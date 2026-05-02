import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const gameFile = join(rootDir, "game.js");
const audioDir = join(rootDir, "assets", "audio");
const tempDir = join(audioDir, ".tmp");
const voiceChoices = ["Kiyara (Premium)", "Kiyara (Enhanced)", "Kiyara", "Lekha (Enhanced)", "Lekha"];

const gameSource = readFileSync(gameFile, "utf8");
const wordMatches = [...gameSource.matchAll(/\{\s*id: "([^"]+)",\s*hindi: "([^"]+)"/g)];
const words = wordMatches.map(([, id, hindi]) => ({ id, hindi }));

if (!words.length) {
  throw new Error("No words found in game.js.");
}

const availableVoices = execFileSync("say", ["-v", "?"], { encoding: "utf8" });
const ffmpegEncoders = execFileSync("ffmpeg", ["-hide_banner", "-encoders"], { encoding: "utf8" });
const voice = voiceChoices.find((choice) => availableVoices.includes(choice));
const oggEncoder = ffmpegEncoders.includes("libopus")
  ? ["-codec:a", "libopus", "-b:a", "48k"]
  : ["-strict", "-2", "-codec:a", "opus", "-b:a", "48k"];

if (!voice) {
  throw new Error(`No Hindi macOS voice found. Tried: ${voiceChoices.join(", ")}`);
}

mkdirSync(audioDir, { recursive: true });
rmSync(tempDir, { recursive: true, force: true });
mkdirSync(tempDir, { recursive: true });

for (const entry of readdirSync(audioDir, { withFileTypes: true })) {
  if (entry.isFile() && /\.(aiff|m4a|mp3|ogg)$/i.test(entry.name)) {
    rmSync(join(audioDir, entry.name), { force: true });
  }
}

for (const word of words) {
  const aiffPath = join(tempDir, `${word.id}.aiff`);
  const m4aPath = join(audioDir, `${word.id}.m4a`);
  const mp3Path = join(audioDir, `${word.id}.mp3`);
  const oggPath = join(audioDir, `${word.id}.ogg`);

  console.log(`Generating ${word.id}...`);
  execFileSync("say", ["-v", voice, "-o", aiffPath, word.hindi], { stdio: "ignore" });
  execFileSync(
    "ffmpeg",
    ["-y", "-hide_banner", "-loglevel", "error", "-i", aiffPath, "-ar", "44100", "-ac", "2", "-codec:a", "aac", "-b:a", "96k", m4aPath],
    { stdio: "inherit" },
  );
  execFileSync(
    "ffmpeg",
    [
      "-y",
      "-hide_banner",
      "-loglevel",
      "error",
      "-i",
      aiffPath,
      "-ar",
      "44100",
      "-ac",
      "2",
      "-codec:a",
      "libmp3lame",
      "-b:a",
      "128k",
      mp3Path,
    ],
    { stdio: "inherit" },
  );
  execFileSync(
    "ffmpeg",
    ["-y", "-hide_banner", "-loglevel", "error", "-i", aiffPath, "-ar", "48000", "-ac", "1", ...oggEncoder, oggPath],
    { stdio: "inherit" },
  );
}

rmSync(tempDir, { recursive: true, force: true });
console.log(`Generated ${words.length} Hindi audio clips with ${voice}.`);
