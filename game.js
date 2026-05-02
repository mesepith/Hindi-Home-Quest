const WORDS = [
  {
    id: "namaste",
    hindi: "नमस्ते",
    translit: "namaste",
    english: "hello",
    icon: "greeting",
    sentence: "नमस्ते, आप कैसे हैं?",
    sentenceEnglish: "Hello, how are you?",
  },
  {
    id: "dhanyavaad",
    hindi: "धन्यवाद",
    translit: "dhanyavaad",
    english: "thank you",
    icon: "thanks",
    sentence: "धन्यवाद, माँ।",
    sentenceEnglish: "Thank you, Mom.",
  },
  {
    id: "haan",
    hindi: "हाँ",
    translit: "haan",
    english: "yes",
    icon: "yes",
    sentence: "हाँ, मुझे खेलना है।",
    sentenceEnglish: "Yes, I want to play.",
  },
  {
    id: "nahi",
    hindi: "नहीं",
    translit: "nahi",
    english: "no",
    icon: "no",
    sentence: "नहीं, धन्यवाद।",
    sentenceEnglish: "No, thank you.",
  },
  {
    id: "kripya",
    hindi: "कृपया",
    translit: "kripya",
    english: "please",
    icon: "please",
    sentence: "कृपया पानी दीजिए।",
    sentenceEnglish: "Please give water.",
  },
  {
    id: "maa",
    hindi: "माँ",
    translit: "maa",
    english: "mother",
    icon: "mother",
    sentence: "माँ घर में हैं।",
    sentenceEnglish: "Mother is at home.",
  },
  {
    id: "pita",
    hindi: "पिता",
    translit: "pita",
    english: "father",
    icon: "father",
    sentence: "पिता किताब पढ़ते हैं।",
    sentenceEnglish: "Father reads a book.",
  },
  {
    id: "bhai",
    hindi: "भाई",
    translit: "bhai",
    english: "brother",
    icon: "brother",
    sentence: "भाई स्कूल जाता है।",
    sentenceEnglish: "Brother goes to school.",
  },
  {
    id: "behan",
    hindi: "बहन",
    translit: "behan",
    english: "sister",
    icon: "sister",
    sentence: "बहन गाना गाती है।",
    sentenceEnglish: "Sister sings a song.",
  },
  {
    id: "dost",
    hindi: "दोस्त",
    translit: "dost",
    english: "friend",
    icon: "friend",
    sentence: "मेरा दोस्त यहाँ है।",
    sentenceEnglish: "My friend is here.",
  },
  {
    id: "ghar",
    hindi: "घर",
    translit: "ghar",
    english: "home",
    icon: "home",
    sentence: "मेरा घर सुंदर है।",
    sentenceEnglish: "My home is beautiful.",
  },
  {
    id: "kamra",
    hindi: "कमरा",
    translit: "kamra",
    english: "room",
    icon: "room",
    sentence: "कमरा साफ है।",
    sentenceEnglish: "The room is clean.",
  },
  {
    id: "darwaza",
    hindi: "दरवाज़ा",
    translit: "darwaza",
    english: "door",
    icon: "door",
    sentence: "दरवाज़ा खोलिए।",
    sentenceEnglish: "Open the door.",
  },
  {
    id: "paani",
    hindi: "पानी",
    translit: "paani",
    english: "water",
    icon: "water",
    sentence: "मुझे पानी चाहिए।",
    sentenceEnglish: "I want water.",
  },
  {
    id: "khaana",
    hindi: "खाना",
    translit: "khaana",
    english: "food",
    icon: "food",
    sentence: "खाना स्वादिष्ट है।",
    sentenceEnglish: "The food is tasty.",
  },
  {
    id: "doodh",
    hindi: "दूध",
    translit: "doodh",
    english: "milk",
    icon: "milk",
    sentence: "दूध ठंडा है।",
    sentenceEnglish: "The milk is cold.",
  },
  {
    id: "seb",
    hindi: "सेब",
    translit: "seb",
    english: "apple",
    icon: "apple",
    sentence: "सेब लाल है।",
    sentenceEnglish: "The apple is red.",
  },
  {
    id: "kitaab",
    hindi: "किताब",
    translit: "kitaab",
    english: "book",
    icon: "book",
    sentence: "मेरी किताब नई है।",
    sentenceEnglish: "My book is new.",
  },
  {
    id: "school",
    hindi: "स्कूल",
    translit: "school",
    english: "school",
    icon: "school",
    sentence: "स्कूल पास में है।",
    sentenceEnglish: "The school is nearby.",
  },
  {
    id: "patang",
    hindi: "पतंग",
    translit: "patang",
    english: "kite",
    icon: "kite",
    sentence: "पतंग ऊपर उड़ती है।",
    sentenceEnglish: "The kite flies high.",
  },
  {
    id: "gaadi",
    hindi: "गाड़ी",
    translit: "gaadi",
    english: "car",
    icon: "car",
    sentence: "गाड़ी नीली है।",
    sentenceEnglish: "The car is blue.",
  },
  {
    id: "suraj",
    hindi: "सूरज",
    translit: "suraj",
    english: "sun",
    icon: "sun",
    sentence: "सूरज चमक रहा है।",
    sentenceEnglish: "The sun is shining.",
  },
  {
    id: "chaand",
    hindi: "चाँद",
    translit: "chaand",
    english: "moon",
    icon: "moon",
    sentence: "चाँद रात में आता है।",
    sentenceEnglish: "The moon comes at night.",
  },
  {
    id: "phool",
    hindi: "फूल",
    translit: "phool",
    english: "flower",
    icon: "flower",
    sentence: "फूल पीला है।",
    sentenceEnglish: "The flower is yellow.",
  },
  {
    id: "laal",
    hindi: "लाल",
    translit: "laal",
    english: "red",
    icon: "red",
    sentence: "सेब लाल है।",
    sentenceEnglish: "The apple is red.",
  },
  {
    id: "neela",
    hindi: "नीला",
    translit: "neela",
    english: "blue",
    icon: "blue",
    sentence: "आसमान नीला है।",
    sentenceEnglish: "The sky is blue.",
  },
  {
    id: "hara",
    hindi: "हरा",
    translit: "hara",
    english: "green",
    icon: "green",
    sentence: "पत्ता हरा है।",
    sentenceEnglish: "The leaf is green.",
  },
  {
    id: "peela",
    hindi: "पीला",
    translit: "peela",
    english: "yellow",
    icon: "yellow",
    sentence: "फूल पीला है।",
    sentenceEnglish: "The flower is yellow.",
  },
  {
    id: "ek",
    hindi: "एक",
    translit: "ek",
    english: "one",
    icon: "one",
    sentence: "एक किताब है।",
    sentenceEnglish: "There is one book.",
  },
  {
    id: "do",
    hindi: "दो",
    translit: "do",
    english: "two",
    icon: "two",
    sentence: "दो सेब हैं।",
    sentenceEnglish: "There are two apples.",
  },
  {
    id: "teen",
    hindi: "तीन",
    translit: "teen",
    english: "three",
    icon: "three",
    sentence: "तीन फूल हैं।",
    sentenceEnglish: "There are three flowers.",
  },
  {
    id: "chaar",
    hindi: "चार",
    translit: "chaar",
    english: "four",
    icon: "four",
    sentence: "चार दोस्त हैं।",
    sentenceEnglish: "There are four friends.",
  },
  {
    id: "paanch",
    hindi: "पाँच",
    translit: "paanch",
    english: "five",
    icon: "five",
    sentence: "पाँच तारे हैं।",
    sentenceEnglish: "There are five stars.",
  },
];

const ROOMS = ["Porch", "Kitchen", "Study", "Bedroom", "Yard", "Sky"];
const ROUND_GOAL = 10;
const MAX_HEARTS = 3;
const AUDIO_DIR = "assets/audio";
const AUDIO_FORMATS = [
  { ext: "m4a", type: "audio/mp4" },
  { ext: "mp3", type: "audio/mpeg" },
  { ext: "ogg", type: 'audio/ogg; codecs="opus"' },
];
const HINDI_LANG = "hi-IN";

const MODES = [
  {
    id: "word",
    label: "Word Match",
    type: "Find the match",
    prompt: (word) => `Find the Hindi word for "${titleCase(word.english)}"`,
    hint: () => "Look for the Devanagari word.",
    main: (word) => word.hindi,
    sub: (word) => `${word.translit} · ${titleCase(word.english)}`,
  },
  {
    id: "meaning",
    label: "Meaning Match",
    type: "Choose the meaning",
    prompt: (word) => word.hindi,
    hint: (word) => `Sounds like: ${word.translit}`,
    main: (word) => titleCase(word.english),
    sub: (word) => word.hindi,
  },
  {
    id: "sound",
    label: "Listen Match",
    type: "Which word did you hear?",
    prompt: () => "Listen and choose",
    hint: (word) => `The word sounds like: ${word.translit}`,
    main: (word) => word.hindi,
    sub: (word) => `${word.translit} · ${titleCase(word.english)}`,
  },
  {
    id: "letter",
    label: "Letter Hunt",
    type: "Starts with",
    prompt: (word) => `Pick the word that starts with ${firstLetter(word.hindi)}`,
    hint: (word) => `${word.hindi} starts with ${firstLetter(word.hindi)}.`,
    main: (word) => word.hindi,
    sub: (word) => `${word.translit} · ${titleCase(word.english)}`,
  },
];

const els = {
  audioLibrary: document.querySelector("#audioLibrary"),
  best: document.querySelector("#bestValue"),
  feedback: document.querySelector("#feedback"),
  heartRow: document.querySelector("#heartRow"),
  journalCount: document.querySelector("#journalCount"),
  journalList: document.querySelector("#journalList"),
  level: document.querySelector("#levelValue"),
  listen: document.querySelector("#listenButton"),
  mode: document.querySelector("#modeLabel"),
  optionGrid: document.querySelector("#optionGrid"),
  phraseEnglish: document.querySelector("#phraseEnglish"),
  phraseHindi: document.querySelector("#phraseHindi"),
  progress: document.querySelector("#progressBar"),
  promptHint: document.querySelector("#promptHint"),
  promptText: document.querySelector("#promptText"),
  promptType: document.querySelector("#promptType"),
  pronunciationAudio: document.querySelector("#pronunciationAudio"),
  restart: document.querySelector("#restartButton"),
  roomTrack: document.querySelector("#roomTrack"),
  round: document.querySelector("#roundValue"),
  score: document.querySelector("#scoreValue"),
  sound: document.querySelector("#soundToggle"),
  targetArt: document.querySelector("#targetArt"),
};

const state = {
  accepting: true,
  best: readBest(),
  currentMode: MODES[0],
  currentOptions: [],
  currentTarget: WORDS[0],
  hearts: MAX_HEARTS,
  learned: [],
  level: 1,
  round: 1,
  score: 0,
  soundOn: true,
  streak: 0,
  wordQueue: [],
};

let voicesLoaded = false;
let cachedVoices = [];
let fallbackSpeechTimer;
let currentPronunciationAudio;
let activePronunciationId = "";
let pendingPronunciationId = "";
let preferredAudioFormat;
let audioContext;

function boot() {
  renderRooms();
  bindEvents();
  setupAudioPlayer();
  if ("speechSynthesis" in window) {
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", () => {
      voicesLoaded = true;
      loadVoices();
      updateSpeechUi();
    });
  }
  updateSpeechUi();
  startGame();
}

function bindEvents() {
  els.optionGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".option-card");
    if (button) selectOption(button.dataset.id);
  });

  els.listen.addEventListener("click", () => {
    playPronunciation(state.currentTarget, { manual: true });
  });
  els.listen.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    playPronunciation(state.currentTarget, { manual: true });
  });
  els.restart.addEventListener("click", startGame);
  els.sound.addEventListener("click", () => {
    playPronunciation(state.currentTarget, { manual: true });
  });

  window.addEventListener("keydown", (event) => {
    const number = Number(event.key);
    if (!state.accepting || Number.isNaN(number) || number < 1 || number > state.currentOptions.length) return;
    selectOption(state.currentOptions[number - 1].id);
  });
}

function startGame() {
  state.accepting = true;
  state.currentMode = MODES[0];
  state.currentOptions = [];
  state.currentTarget = WORDS[0];
  state.hearts = MAX_HEARTS;
  state.learned = [];
  state.level = 1;
  state.round = 1;
  state.score = 0;
  state.streak = 0;
  state.wordQueue = shuffle([...WORDS]);
  els.feedback.textContent = "A new quest is ready.";
  els.feedback.className = "feedback";
  nextRound();
}

function nextRound() {
  state.accepting = true;
  state.currentMode = MODES[(state.round + state.level - 2) % MODES.length];
  state.currentTarget = drawWord();
  state.currentOptions = buildOptions(state.currentTarget, state.currentMode);
  renderAll();

  if (state.currentMode.id === "sound" && state.soundOn && document.hasFocus()) {
    els.feedback.textContent = "Tap Listen to hear the Hindi word.";
    els.feedback.className = "feedback";
  }
}

function drawWord() {
  if (!state.wordQueue.length) state.wordQueue = shuffle([...WORDS]);

  const availableSize = Math.min(WORDS.length, 10 + state.level * 5);
  const availableIds = new Set(WORDS.slice(0, availableSize).map((word) => word.id));
  let next = state.wordQueue.shift();
  let guard = 0;

  while (!availableIds.has(next.id) && guard < WORDS.length) {
    state.wordQueue.push(next);
    next = state.wordQueue.shift();
    guard += 1;
  }

  return next;
}

function buildOptions(target, mode) {
  const count = state.level < 3 ? 3 : 4;
  let pool = WORDS.filter((word) => word.id !== target.id);

  if (mode.id === "letter") {
    const targetLetter = firstLetter(target.hindi);
    pool = pool.filter((word) => firstLetter(word.hindi) !== targetLetter);
  }

  const distractors = shuffle(pool).slice(0, count - 1);
  return shuffle([target, ...distractors]);
}

function selectOption(id) {
  if (!state.accepting) return;

  state.accepting = false;
  const correct = id === state.currentTarget.id;
  updateOptionStates(id, correct);

  if (correct) {
    const bonus = Math.min(state.streak * 2, 10);
    state.streak += 1;
    state.score += 10 + bonus;
    addLearned(state.currentTarget);
    els.feedback.textContent = `सही! ${state.currentTarget.hindi} means ${titleCase(state.currentTarget.english)}.`;
    els.feedback.className = "feedback good";
    playTone(true);
  } else {
    state.hearts -= 1;
    state.streak = 0;
    els.feedback.textContent = `Nice try. ${state.currentTarget.hindi} means ${titleCase(state.currentTarget.english)}.`;
    els.feedback.className = "feedback careful";
    playTone(false);
  }

  saveBest();
  renderStats();
  renderJournal();
  renderHearts();

  window.setTimeout(() => {
    if (state.hearts <= 0) {
      resetLevel();
      return;
    }

    if (correct) {
      state.round += 1;
    }

    if (state.round > ROUND_GOAL) {
      advanceLevel();
      return;
    }

    nextRound();
  }, correct ? 1100 : 1700);
}

function resetLevel() {
  state.hearts = MAX_HEARTS;
  state.round = 1;
  state.streak = 0;
  els.feedback.textContent = "Fresh start for this room.";
  els.feedback.className = "feedback careful";
  nextRound();
}

function advanceLevel() {
  const roomName = ROOMS[(state.level - 1) % ROOMS.length];
  state.level += 1;
  state.round = 1;
  state.hearts = MAX_HEARTS;
  state.streak = 0;
  els.feedback.textContent = `${roomName} complete! A new room is open.`;
  els.feedback.className = "feedback good";
  window.setTimeout(nextRound, 1300);
}

function renderAll() {
  renderStats();
  renderHearts();
  renderPrompt();
  renderOptions();
  renderRooms();
  renderJournal();
}

function renderStats() {
  els.score.textContent = state.score;
  els.best.textContent = state.best;
  els.level.textContent = state.level;
  els.round.textContent = Math.min(state.round, ROUND_GOAL);
  els.progress.style.width = `${((state.round - 1) / ROUND_GOAL) * 100}%`;
}

function renderPrompt() {
  const { currentMode: mode, currentTarget: word } = state;
  els.mode.textContent = mode.label;
  els.promptType.textContent = mode.type;
  els.promptText.textContent = mode.prompt(word);
  els.promptHint.textContent = mode.hint(word);
  els.targetArt.innerHTML = iconSvg(word.icon);
  els.phraseHindi.textContent = word.sentence;
  els.phraseEnglish.textContent = word.sentenceEnglish;
}

function renderOptions() {
  els.optionGrid.textContent = "";

  state.currentOptions.forEach((word, index) => {
    const button = document.createElement("button");
    const main = state.currentMode.main(word);
    const sub = state.currentMode.sub(word);
    button.className = "option-card";
    button.type = "button";
    button.dataset.id = word.id;
    button.setAttribute("aria-label", `${main}, ${sub}`);
    button.innerHTML = `
      <span class="option-icon" aria-hidden="true">${iconSvg(word.icon)}</span>
      <span class="option-copy">
        <span class="option-main">${main}</span>
        <span class="option-sub">${sub}</span>
      </span>
      <span class="option-number" aria-hidden="true">${index + 1}</span>
    `;
    els.optionGrid.append(button);
  });
}

function renderHearts() {
  els.heartRow.textContent = "";
  for (let index = 0; index < MAX_HEARTS; index += 1) {
    const heart = document.createElement("span");
    heart.className = index < state.hearts ? "heart" : "heart empty";
    els.heartRow.append(heart);
  }
}

function renderRooms() {
  els.roomTrack.textContent = "";
  const activeIndex = (state.level - 1) % ROOMS.length;

  ROOMS.forEach((room, index) => {
    const step = document.createElement("div");
    step.className = "room-step";
    if (index === activeIndex) step.classList.add("current");
    if (index < activeIndex) step.classList.add("done");
    step.innerHTML = `<span class="room-dot">${index + 1}</span><span>${room}</span>`;
    els.roomTrack.append(step);
  });
}

function renderJournal() {
  els.journalCount.textContent = state.learned.length;
  els.journalList.textContent = "";

  if (!state.learned.length) {
    const empty = document.createElement("li");
    empty.className = "journal-item";
    empty.innerHTML = `
      <span class="journal-icon" aria-hidden="true">${iconSvg("book")}</span>
      <span>
        <span class="journal-word">शुरू</span>
        <span class="journal-meaning">shuru · Start</span>
      </span>
    `;
    els.journalList.append(empty);
    return;
  }

  state.learned.slice(0, 9).forEach((word) => {
    const item = document.createElement("li");
    item.className = "journal-item";
    item.innerHTML = `
      <span class="journal-icon" aria-hidden="true">${iconSvg(word.icon)}</span>
      <span>
        <span class="journal-word">${word.hindi}</span>
        <span class="journal-meaning">${word.translit} · ${titleCase(word.english)}</span>
      </span>
    `;
    els.journalList.append(item);
  });
}

function updateOptionStates(selectedId, correct) {
  const buttons = els.optionGrid.querySelectorAll(".option-card");
  buttons.forEach((button) => {
    button.disabled = true;
    const isTarget = button.dataset.id === state.currentTarget.id;
    const isSelected = button.dataset.id === selectedId;
    if (isTarget) button.classList.add("correct");
    if (isSelected && !correct) button.classList.add("wrong");
    if (!isTarget && !isSelected) button.classList.add("dimmed");
  });
}

function addLearned(word) {
  state.learned = [word, ...state.learned.filter((item) => item.id !== word.id)];
}

function playPronunciation(word, options = {}) {
  if (!state.soundOn) return;

  const audio = els.pronunciationAudio;
  const source = getPronunciationSource(word);
  if (!audio || !source) {
    speak(word, options);
    return;
  }

  const isSameClipPlaying =
    activePronunciationId === word.id && (pendingPronunciationId === word.id || (!audio.paused && !audio.ended));

  if (isSameClipPlaying) {
    pulseListenButton();
    return;
  }

  stopPronunciation();
  currentPronunciationAudio = audio;
  activePronunciationId = word.id;
  pendingPronunciationId = word.id;
  audio.muted = false;
  audio.volume = 1;
  audio.src = source;
  audio.load();

  let playPromise;
  try {
    playPromise = audio.play();
  } catch (error) {
    currentPronunciationAudio = null;
    activePronunciationId = "";
    pendingPronunciationId = "";
    speak(word, options);
    return;
  }
  pulseListenButton();
  if (options.manual) {
    els.feedback.textContent = `Playing recorded Hindi: ${word.hindi} (${word.translit})`;
    els.feedback.className = "feedback";
  }

  if (playPromise) {
    playPromise.then(() => {
      if (pendingPronunciationId === word.id) pendingPronunciationId = "";
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    }).catch((error) => {
      if (currentPronunciationAudio === audio) currentPronunciationAudio = null;
      if (activePronunciationId === word.id) activePronunciationId = "";
      if (pendingPronunciationId === word.id) pendingPronunciationId = "";
      if (options.manual) {
        const reason = error?.name ? ` (${error.name})` : "";
        els.feedback.textContent = `Recorded audio did not start${reason}. Trying browser speech fallback.`;
        els.feedback.className = "feedback careful";
      }
      speak(word, options);
    });
  }
}

function stopPronunciation() {
  if (!currentPronunciationAudio) return;

  currentPronunciationAudio.pause();
  try {
    currentPronunciationAudio.currentTime = 0;
  } catch (error) {
    currentPronunciationAudio.load();
  }
  currentPronunciationAudio = null;
  activePronunciationId = "";
  pendingPronunciationId = "";
}

function setupAudioPlayer() {
  preferredAudioFormat = chooseAudioFormat();
  els.pronunciationAudio.addEventListener("ended", () => {
    currentPronunciationAudio = null;
    activePronunciationId = "";
    pendingPronunciationId = "";
    els.listen.classList.remove("is-playing");
    els.sound.classList.remove("is-playing");
  });
  els.pronunciationAudio.addEventListener("error", () => {
    currentPronunciationAudio = null;
    activePronunciationId = "";
    pendingPronunciationId = "";
    els.listen.classList.remove("is-playing");
    els.sound.classList.remove("is-playing");
    speak(state.currentTarget, { manual: true });
  });
}

function chooseAudioFormat() {
  const probe = document.createElement("audio");
  if (!probe.canPlayType) return AUDIO_FORMATS[1];
  return AUDIO_FORMATS.find((format) => probe.canPlayType(format.type)) || AUDIO_FORMATS[1];
}

function getPronunciationSource(word) {
  const format = preferredAudioFormat || chooseAudioFormat();
  return `${AUDIO_DIR}/${word.id}.${format.ext}`;
}

function reportAudioSupport() {
  const probe = document.createElement("audio");
  if (!probe.canPlayType) return "No HTML5 audio support detected.";

  return AUDIO_FORMATS.map((format) => `${format.ext}:${probe.canPlayType(format.type) || "no"}`).join(" ");
}

function updateSpeechUi() {
  els.listen.disabled = !state.soundOn;
  if (!state.soundOn) {
    els.listen.title = "Sound is off";
    return;
  }
  els.listen.title = `Plays packaged Hindi audio. ${reportAudioSupport()}`;
  els.sound.setAttribute("aria-label", "Play current word");
  els.sound.title = "Play current word";
}

function pulseListenButton() {
  els.listen.classList.remove("is-playing");
  els.sound.classList.remove("is-playing");
  void els.listen.offsetWidth;
  els.listen.classList.add("is-playing");
  els.sound.classList.add("is-playing");
}

function speak(word, options = {}) {
  if (!state.soundOn) return;

  if (!("speechSynthesis" in window)) {
    els.feedback.textContent = "Speech is not available in this browser.";
    els.feedback.className = "feedback careful";
    return;
  }

  const synth = window.speechSynthesis;
  const hindiVoice = findHindiVoice();
  let started = false;

  window.clearTimeout(fallbackSpeechTimer);

  if (voicesLoaded && !hindiVoice) {
    speakFallback(word);
    return;
  }

  const utterance = new SpeechSynthesisUtterance(word.hindi);
  utterance.lang = HINDI_LANG;
  utterance.rate = 0.78;
  utterance.pitch = 1.05;
  utterance.volume = 1;
  if (hindiVoice) utterance.voice = hindiVoice;

  utterance.onstart = () => {
    started = true;
  };
  utterance.onerror = () => {
    if (!started) speakFallback(word);
  };
  utterance.onend = () => {
    window.clearTimeout(fallbackSpeechTimer);
  };

  if (options.manual) {
    els.feedback.textContent = hindiVoice
      ? `Using browser speech fallback: ${word.hindi} (${word.translit})`
      : `Trying browser speech fallback for ${word.hindi}.`;
    els.feedback.className = "feedback";
  }

  try {
    if (synth.paused) synth.resume();

    if (synth.speaking || synth.pending) {
      synth.cancel();
      window.setTimeout(() => synth.speak(utterance), 90);
    } else {
      synth.speak(utterance);
    }

    fallbackSpeechTimer = window.setTimeout(() => {
      if (!started && !synth.speaking) speakFallback(word);
    }, hindiVoice || !voicesLoaded ? 1800 : 900);
  } catch (error) {
    speakFallback(word);
  }
}

function speakFallback(word) {
  if (!state.soundOn || !("speechSynthesis" in window)) return;

  const synth = window.speechSynthesis;
  const fallbackVoice = findFallbackVoice();
  const utterance = new SpeechSynthesisUtterance(word.translit);

  window.clearTimeout(fallbackSpeechTimer);
  utterance.lang = fallbackVoice?.lang || "en-US";
  utterance.rate = 0.68;
  utterance.pitch = 1;
  utterance.volume = 1;
  if (fallbackVoice) utterance.voice = fallbackVoice;
  utterance.onerror = () => {
    els.feedback.textContent = "Speech did not start on this device.";
    els.feedback.className = "feedback careful";
  };

  try {
    if (synth.paused) synth.resume();
    if (synth.speaking || synth.pending) synth.cancel();
    synth.speak(utterance);
    els.feedback.textContent = `Hindi voice unavailable here, playing guide sound: ${word.translit}.`;
    els.feedback.className = "feedback careful";
  } catch (error) {
    els.feedback.textContent = "Speech did not start on this device.";
    els.feedback.className = "feedback careful";
  }
}

function loadVoices() {
  if (!("speechSynthesis" in window)) return [];

  const voices = window.speechSynthesis.getVoices();
  if (voices.length) {
    cachedVoices = voices;
    voicesLoaded = true;
  }
  return cachedVoices;
}

function findHindiVoice() {
  const voices = loadVoices();
  return (
    voices.find((voice) => /^hi([-_]|$)/i.test(voice.lang)) ||
    voices.find((voice) => /hindi/i.test(voice.name)) ||
    null
  );
}

function findFallbackVoice() {
  const voices = loadVoices();
  return (
    voices.find((voice) => /^en-IN$/i.test(voice.lang)) ||
    voices.find((voice) => /^en-US$/i.test(voice.lang)) ||
    voices.find((voice) => /^en/i.test(voice.lang)) ||
    voices.find((voice) => voice.default) ||
    null
  );
}

function playTone(success) {
  if (!state.soundOn) return;

  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(success ? 660 : 180, now);
    oscillator.frequency.exponentialRampToValueAtTime(success ? 880 : 130, now + 0.12);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.18);
  } catch (error) {
    // Some browsers block generated audio until the first gesture.
  }
}

function saveBest() {
  if (state.score <= state.best) return;

  state.best = state.score;
  try {
    window.localStorage.setItem("hindiHomeQuestBest", String(state.best));
  } catch (error) {
    // Private browsing can disable localStorage.
  }
}

function readBest() {
  try {
    return Number(window.localStorage.getItem("hindiHomeQuestBest")) || 0;
  } catch (error) {
    return 0;
  }
}

function firstLetter(word) {
  return Array.from(word)[0] || "";
}

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function iconSvg(type) {
  const swatches = {
    blue: "#3f7edb",
    green: "#2f9f70",
    red: "#e85f6f",
    yellow: "#f4b43f",
  };

  if (swatches[type]) {
    return `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <rect x="12" y="14" width="56" height="52" rx="8" fill="${swatches[type]}" stroke="#1f2a37" stroke-width="4" />
        <path d="M22 56 58 24" stroke="rgba(255,255,255,.55)" stroke-width="8" stroke-linecap="round" />
      </svg>
    `;
  }

  if (["one", "two", "three", "four", "five"].includes(type)) {
    const count = ["one", "two", "three", "four", "five"].indexOf(type) + 1;
    const dots = [
      [40, 40],
      [26, 40],
      [54, 40],
      [26, 28],
      [54, 52],
    ]
      .slice(0, count)
      .map(([cx, cy]) => `<circle cx="${cx}" cy="${cy}" r="8" fill="#4457a6" />`)
      .join("");
    return `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <rect x="12" y="12" width="56" height="56" rx="10" fill="#fff7df" stroke="#1f2a37" stroke-width="4" />
        ${dots}
      </svg>
    `;
  }

  const people = {
    brother: ["#78c6f0", "#4457a6"],
    father: ["#9bd7ff", "#075b66"],
    friend: ["#f4b43f", "#047a8a"],
    mother: ["#f7a5b0", "#e85f6f"],
    sister: ["#f4b43f", "#e85f6f"],
  };

  if (people[type]) {
    const [shirt, accent] = people[type];
    return `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <circle cx="40" cy="25" r="14" fill="#8d5b3d" stroke="#1f2a37" stroke-width="4" />
        <path d="M18 67c3-18 14-28 22-28s19 10 22 28" fill="${shirt}" stroke="#1f2a37" stroke-width="4" stroke-linejoin="round" />
        <path d="M27 18c5-11 21-11 26 0" fill="${accent}" stroke="#1f2a37" stroke-width="4" stroke-linecap="round" />
      </svg>
    `;
  }

  const icons = {
    apple: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M40 25c11-13 30-1 25 21-5 21-16 25-25 16-9 9-20 5-25-16-5-22 14-34 25-21Z" fill="#e85f6f" stroke="#1f2a37" stroke-width="4" />
        <path d="M40 25c1-9 5-14 13-16" fill="none" stroke="#1f2a37" stroke-width="4" stroke-linecap="round" />
        <path d="M46 15c9-2 14 2 17 8-9 2-14-1-17-8Z" fill="#2f9f70" stroke="#1f2a37" stroke-width="4" />
      </svg>
    `,
    book: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M14 18h23c7 0 11 4 11 11v35c-3-4-7-6-13-6H14Z" fill="#f4b43f" stroke="#1f2a37" stroke-width="4" />
        <path d="M66 18H43c-7 0-11 4-11 11v35c3-4 7-6 13-6h21Z" fill="#78c6f0" stroke="#1f2a37" stroke-width="4" />
        <path d="M40 25v38" stroke="#1f2a37" stroke-width="4" stroke-linecap="round" />
      </svg>
    `,
    car: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M16 45h48l-7-18H27Z" fill="#3f7edb" stroke="#1f2a37" stroke-width="4" stroke-linejoin="round" />
        <rect x="10" y="42" width="60" height="18" rx="7" fill="#78c6f0" stroke="#1f2a37" stroke-width="4" />
        <circle cx="25" cy="61" r="7" fill="#1f2a37" />
        <circle cx="55" cy="61" r="7" fill="#1f2a37" />
      </svg>
    `,
    door: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <rect x="23" y="12" width="34" height="58" rx="4" fill="#9a6338" stroke="#1f2a37" stroke-width="4" />
        <circle cx="49" cy="42" r="3" fill="#f4b43f" />
        <path d="M18 70h44" stroke="#1f2a37" stroke-width="4" stroke-linecap="round" />
      </svg>
    `,
    food: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <circle cx="40" cy="44" r="25" fill="#fffaf2" stroke="#1f2a37" stroke-width="4" />
        <circle cx="40" cy="44" r="14" fill="#f4b43f" stroke="#1f2a37" stroke-width="3" />
        <path d="M18 18v22M25 18v22M18 29h7" stroke="#1f2a37" stroke-width="4" stroke-linecap="round" />
        <path d="M62 18v42" stroke="#1f2a37" stroke-width="4" stroke-linecap="round" />
      </svg>
    `,
    flower: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M40 42c6-15 18-19 24-11 6 8-2 19-17 18 12 10 11 23 1 25-10 2-15-10-8-24-7 14-21 19-27 10-6-9 4-19 19-18-13-9-13-23-3-25 10-2 16 10 11 25Z" fill="#f4b43f" stroke="#1f2a37" stroke-width="4" stroke-linejoin="round" />
        <circle cx="40" cy="43" r="8" fill="#e85f6f" stroke="#1f2a37" stroke-width="3" />
      </svg>
    `,
    greeting: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M30 17c8 11 10 22 7 39-12-12-19-25-7-39Z" fill="#f4b43f" stroke="#1f2a37" stroke-width="4" />
        <path d="M50 17c-8 11-10 22-7 39 12-12 19-25 7-39Z" fill="#78c6f0" stroke="#1f2a37" stroke-width="4" />
        <path d="M24 58c10 8 22 8 32 0" fill="none" stroke="#1f2a37" stroke-width="4" stroke-linecap="round" />
      </svg>
    `,
    home: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M15 37 40 16l25 21v31H15Z" fill="#fffaf2" stroke="#1f2a37" stroke-width="4" stroke-linejoin="round" />
        <path d="M10 39 40 13l30 26" fill="none" stroke="#e85f6f" stroke-width="7" stroke-linecap="round" />
        <rect x="33" y="47" width="14" height="21" fill="#9a6338" stroke="#1f2a37" stroke-width="3" />
      </svg>
    `,
    kite: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M40 9 65 34 40 59 15 34Z" fill="#f4b43f" stroke="#1f2a37" stroke-width="4" />
        <path d="M40 9v50M15 34h50" stroke="#1f2a37" stroke-width="3" />
        <path d="M40 59c-9 9-2 15 5 11 8-5 10 3 4 7" fill="none" stroke="#1f2a37" stroke-width="3" stroke-linecap="round" />
      </svg>
    `,
    milk: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M28 14h24l5 16v38H23V30Z" fill="#ffffff" stroke="#1f2a37" stroke-width="4" stroke-linejoin="round" />
        <path d="M24 33h32" stroke="#78c6f0" stroke-width="8" />
        <path d="M31 14h18" stroke="#1f2a37" stroke-width="4" stroke-linecap="round" />
      </svg>
    `,
    moon: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M52 12c-17 4-28 18-28 34 0 10 5 18 13 23-15-1-27-13-27-29 0-18 15-32 33-32 3 0 6 1 9 4Z" fill="#f4d178" stroke="#1f2a37" stroke-width="4" stroke-linejoin="round" />
        <path d="M57 37h10M62 32v10" stroke="#4457a6" stroke-width="4" stroke-linecap="round" />
      </svg>
    `,
    no: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <circle cx="40" cy="40" r="28" fill="#fff0f2" stroke="#e85f6f" stroke-width="7" />
        <path d="M24 24 56 56" stroke="#e85f6f" stroke-width="8" stroke-linecap="round" />
      </svg>
    `,
    please: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M24 40c2-12 10-20 16-20s14 8 16 20" fill="#f7a5b0" stroke="#1f2a37" stroke-width="4" />
        <path d="M24 40h32v18c0 8-6 14-16 14s-16-6-16-14Z" fill="#f4b43f" stroke="#1f2a37" stroke-width="4" />
        <path d="M31 32c3 5 15 5 18 0" fill="none" stroke="#1f2a37" stroke-width="4" stroke-linecap="round" />
      </svg>
    `,
    room: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <rect x="14" y="15" width="52" height="50" rx="6" fill="#fffaf2" stroke="#1f2a37" stroke-width="4" />
        <rect x="24" y="25" width="18" height="18" fill="#78c6f0" stroke="#1f2a37" stroke-width="3" />
        <path d="M15 55h50" stroke="#e85f6f" stroke-width="6" />
      </svg>
    `,
    school: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M12 32 40 14l28 18v36H12Z" fill="#fffaf2" stroke="#1f2a37" stroke-width="4" stroke-linejoin="round" />
        <path d="M24 68V45h32v23" fill="#78c6f0" stroke="#1f2a37" stroke-width="4" />
        <path d="M32 31h16" stroke="#e85f6f" stroke-width="5" stroke-linecap="round" />
      </svg>
    `,
    sun: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <circle cx="40" cy="40" r="17" fill="#f4b43f" stroke="#1f2a37" stroke-width="4" />
        <path d="M40 7v11M40 62v11M7 40h11M62 40h11M17 17l8 8M55 55l8 8M63 17l-8 8M25 55l-8 8" stroke="#1f2a37" stroke-width="4" stroke-linecap="round" />
      </svg>
    `,
    thanks: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="m40 9 9 20 22 2-17 14 5 22-19-12-19 12 5-22L9 31l22-2Z" fill="#f4b43f" stroke="#1f2a37" stroke-width="4" stroke-linejoin="round" />
      </svg>
    `,
    water: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <path d="M40 9c15 18 23 31 23 43 0 13-10 21-23 21s-23-8-23-21c0-12 8-25 23-43Z" fill="#65c7ea" stroke="#1f2a37" stroke-width="4" />
        <path d="M31 51c1 7 5 10 12 11" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" />
      </svg>
    `,
    yes: `
      <svg class="word-icon" viewBox="0 0 80 80" role="img">
        <circle cx="40" cy="40" r="29" fill="#e7faef" stroke="#2f9f70" stroke-width="7" />
        <path d="M24 42 35 53 58 27" fill="none" stroke="#2f9f70" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `,
  };

  return (
    icons[type] ||
    `<svg class="word-icon" viewBox="0 0 80 80" role="img">
      <rect x="12" y="12" width="56" height="56" rx="10" fill="#fff7df" stroke="#1f2a37" stroke-width="4" />
      <text x="40" y="51" text-anchor="middle" font-size="30" font-family="serif" font-weight="800" fill="#047a8a">ह</text>
    </svg>`
  );
}

boot();
