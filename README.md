# Hindi Home Quest

An HTML5 learning game for kids who are beginning Hindi at home. Players match English meanings, Hindi words, sounds, and first letters while building a small word journal.

## Run

Open `index.html` in a browser.

The game is self-contained and does not need a build step or internet connection.

## Speech

Pronunciation uses packaged HTML5 audio files first. Each Hindi word has an `.m4a` file for Safari/iOS compatibility, a 44.1 kHz `.mp3` file, and an `.ogg` file for browsers that prefer OGG.

The clips in `assets/audio/` were generated with the macOS Hindi voice `Kiyara (Premium)`. If an audio file cannot play, the game falls back to the browser's Web Speech API: `window.speechSynthesis` with `SpeechSynthesisUtterance`.

To regenerate the audio files on a Mac with Hindi system voices installed:

```sh
node scripts/generate-audio.mjs
```
