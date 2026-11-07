/**
 * ==============================================================================
 * TRIVIA GOL - LÓGICA PRINCIPAL DEL JUEGO
 * ==============================================================================
 * Arquitectura modular y limpia:
 *  1. Base de datos de niveles y preguntas (15 niveles: Fácil, Medio, Difícil).
 *  2. Estado global de la aplicación y persistencia (LocalStorage).
 *  3. Sistema de Sonido nativo con Web Audio API (sin dependencias externas).
 *  4. Controladores de Pantallas y Navegación.
 *  5. Motor del Juego (Temporizador de 30s, Validación y Feedback).
 *  6. Inicialización de Eventos del DOM.
 * ==============================================================================
 */

// ==============================================================================
// 1. BANCO DE PREGUNTAS (15 NIVELES PROGRESIVOS)
// ==============================================================================
const LEVELS_DATA = [
  // --- DIFICULTAD: FÁCIL (NIVELES 1 A 5) ---
  {
    id: 1,
    title: "Mundial Qatar 2022",
    difficulty: "easy",
    difficultyLabel: "Fácil",
    questions: [
      {
        category: "Mundiales",
        question: "¿Qué selección se consagró campeona en la Copa del Mundo de Qatar 2022?",
        options: ["Francia", "Argentina", "Brasil", "Croacia"],
        correctIndex: 1
      },
      {
        category: "Mundiales",
        question: "¿Quién fue el capitán y elegido Mejor Jugador del Mundial Qatar 2022?",
        options: ["Kylian Mbappé", "Luka Modrić", "Lionel Messi", "Ángel Di María"],
        correctIndex: 2
      },
      {
        category: "Mundiales",
        question: "¿Qué arquero argentino se destacó en los penales y ganó el Guante de Oro en Qatar 2022?",
        options: ["Franco Armani", "Emiliano 'Dibu' Martínez", "Sergio Romero", "Gerónimo Rulli"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 2,
    title: "Gigantes del Fútbol Argentino",
    difficulty: "easy",
    difficultyLabel: "Fácil",
    questions: [
      {
        category: "Fútbol Argentino",
        question: "¿Cómo se denomina tradicionalmente el enfrentamiento entre Boca Juniors y River Plate?",
        options: ["Clásico de Avellaneda", "Superclásico", "Clásico Rosarino", "Clásico Platense"],
        correctIndex: 1
      },
      {
        category: "Fútbol Argentino",
        question: "¿En qué estadio de la Ciudad de Buenos Aires hace de local Boca Juniors?",
        options: ["El Monumental", "La Bombonera", "El Cilindro", "El Gasómetro"],
        correctIndex: 1
      },
      {
        category: "Fútbol Argentino",
        question: "¿Qué clásico de barrio enfrenta a San Lorenzo de Almagro?",
        options: ["Huracán", "Vélez Sarsfield", "Ferro", "Lanús"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 3,
    title: "Estrellas Mundiales",
    difficulty: "easy",
    difficultyLabel: "Fácil",
    questions: [
      {
        category: "Fútbol Internacional",
        question: "¿Qué delantero portugués es el máximo goleador histórico de selecciones masculinas?",
        options: ["Luís Figo", "Cristiano Ronaldo", "Eusébio", "Bruno Fernandes"],
        correctIndex: 1
      },
      {
        category: "Fútbol Internacional",
        question: "¿En qué club europeo disputó Lionel Messi la mayor parte de su carrera profesional?",
        options: ["Paris Saint-Germain", "Chelsea", "FC Barcelona", "Manchester City"],
        correctIndex: 2
      },
      {
        category: "Fútbol Internacional",
        question: "¿Qué astro brasileño ganó 3 Copas del Mundo (1958, 1962 y 1970)?",
        options: ["Pelé", "Garrincha", "Zico", "Romário"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 4,
    title: "Copas del Mundo Históricas",
    difficulty: "easy",
    difficultyLabel: "Fácil",
    questions: [
      {
        category: "Mundiales",
        question: "¿En qué país sudamericano se disputó el primer Mundial de la historia en 1930?",
        options: ["Brasil", "Argentina", "Uruguay", "Chile"],
        correctIndex: 2
      },
      {
        category: "Mundiales",
        question: "¿Quién convirtió el 'Gol del Siglo' y 'La Mano de Dios' frente a Inglaterra en 1986?",
        options: ["Jorge Burruchaga", "Diego Armando Maradona", "Mario Kempes", "Jorge Valdano"],
        correctIndex: 1
      },
      {
        category: "Mundiales",
        question: "¿Qué país ostenta el récord de haber ganado 5 Copas del Mundo (Pentacampeón)?",
        options: ["Alemania", "Italia", "Brasil", "Argentina"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 5,
    title: "Reyes de Europa y Champions League",
    difficulty: "easy",
    difficultyLabel: "Fácil",
    questions: [
      {
        category: "Champions League",
        question: "¿Qué club es el máximo ganador histórico de la UEFA Champions League?",
        options: ["AC Milan", "Bayern Múnich", "Liverpool", "Real Madrid"],
        correctIndex: 3
      },
      {
        category: "Fútbol Europeo",
        question: "¿Con qué apodo se conoce habitualmente al Bayern Múnich en Alemania?",
        options: ["Los Bávaros", "Los Gunners", "Los Culés", "Los Colchoneros"],
        correctIndex: 0
      },
      {
        category: "Fútbol Europeo",
        question: "¿Qué club inglés conquistó un histórico triplete (Premier, FA Cup y Champions) en 2023?",
        options: ["Manchester United", "Manchester City", "Arsenal", "Liverpool"],
        correctIndex: 1
      }
    ]
  },

  // --- DIFICULTAD: INTERMEDIO (NIVELES 6 A 10) ---
  {
    id: 6,
    title: "Copa Libertadores de América",
    difficulty: "medium",
    difficultyLabel: "Intermedio",
    questions: [
      {
        category: "Copa Libertadores",
        question: "¿Qué club argentino es apodado el 'Rey de Copas' por ganar 7 Copas Libertadores?",
        options: ["Boca Juniors", "River Plate", "Independiente", "Estudiantes de La Plata"],
        correctIndex: 2
      },
      {
        category: "Copa Libertadores",
        question: "¿En qué ciudad europea se jugó la inédita final de Copa Libertadores 2018 entre River y Boca?",
        options: ["París", "Madrid", "Londres", "Roma"],
        correctIndex: 1
      },
      {
        category: "Copa Libertadores",
        question: "¿Quién es el máximo goleador histórico de la Copa Libertadores (54 goles)?",
        options: ["Alberto Spencer", "Fernando Morena", "Daniel Onega", "Gabriel Barbosa"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 7,
    title: "La Albiceleste en la Historia",
    difficulty: "medium",
    difficultyLabel: "Intermedio",
    questions: [
      {
        category: "Selección Argentina",
        question: "¿Quién fue el director técnico de Argentina en la conquista del Mundial 1978?",
        options: ["Carlos Salvador Bilardo", "César Luis Menotti", "Alejandro Sabella", "Marcelo Bielsa"],
        correctIndex: 1
      },
      {
        category: "Selección Argentina",
        question: "¿A qué rival derrotó Argentina en el Maracaná para consagrarse campeona de la Copa América 2021?",
        options: ["Colombia", "Chile", "Brasil", "Uruguay"],
        correctIndex: 2
      },
      {
        category: "Selección Argentina",
        question: "¿Quién fue el goleador del Mundial 1978 con 6 tantos?",
        options: ["Mario Alberto Kempes", "Leopoldo Luque", "Daniel Passarella", "Osvaldo Ardiles"],
        correctIndex: 0
      }
    ]
  },
  {
    id: 8,
    title: "Balones de Oro y Goleadores",
    difficulty: "medium",
    difficultyLabel: "Intermedio",
    questions: [
      {
        category: "Premios y Récords",
        question: "¿Quién ha sido el único arquero en la historia en ganar el Balón de Oro (1963)?",
        options: ["Dino Zoff", "Lev Yashin", "Gianluigi Buffon", "Iker Casillas"],
        correctIndex: 1
      },
      {
        category: "Premios y Récords",
        question: "¿Qué récord asombroso logró Lionel Messi en el año natural 2012?",
        options: ["91 goles oficiales", "75 goles oficiales", "100 goles oficiales", "82 goles oficiales"],
        correctIndex: 0
      },
      {
        category: "Goleadores",
        question: "¿Qué mítico delantero brasileño fue conocido con el apodo de 'O Fenômeno'?",
        options: ["Ronaldinho", "Rivaldo", "Ronaldo Nazário", "Adriano"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 9,
    title: "Mística Sudamericana",
    difficulty: "medium",
    difficultyLabel: "Intermedio",
    questions: [
      {
        category: "Fútbol Sudamericano",
        question: "¿Qué histórico estadio de Montevideo albergó la final del Mundial de 1930?",
        options: ["Estadio Gran Parque Central", "Estadio Centenario", "Estadio Campeón del Siglo", "Estadio Luis Franzini"],
        correctIndex: 1
      },
      {
        category: "Fútbol Sudamericano",
        question: "¿Cuál es el clásico más tradicional del fútbol uruguayo?",
        options: ["Defensor vs Danubio", "Nacional vs Peñarol", "Cerro vs Rampla Juniors", "Montevideo City vs Progreso"],
        correctIndex: 1
      },
      {
        category: "Fútbol Sudamericano",
        question: "¿Qué club colombiano conquistó la Copa Libertadores en 1989 y 2016?",
        options: ["América de Cali", "Millonarios", "Atlético Nacional", "Deportivo Cali"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 10,
    title: "Mundiales de la Era Moderna (1998 - 2014)",
    difficulty: "medium",
    difficultyLabel: "Intermedio",
    questions: [
      {
        category: "Mundiales",
        question: "¿Qué selección fue subcampeona tras caer 1-0 en tiempo extra ante Alemania en Brasil 2014?",
        options: ["Holanda", "Argentina", "Brasil", "Francia"],
        correctIndex: 1
      },
      {
        category: "Mundiales",
        question: "¿Quién anotó los dos goles de la final en la victoria 2-0 de Brasil sobre Alemania en 2002?",
        options: ["Rivaldo", "Ronaldinho", "Ronaldo", "Roberto Carlos"],
        correctIndex: 2
      },
      {
        category: "Mundiales",
        question: "¿Qué selección europea ganó en Sudáfrica 2010 su primera Copa del Mundo con gol de Iniesta?",
        options: ["Países Bajos", "España", "Portugal", "Inglaterra"],
        correctIndex: 1
      }
    ]
  },

  // --- DIFICULTAD: DIFÍCIL (NIVELES 11 A 15) ---
  {
    id: 11,
    title: "Pioneros del Fútbol Argentino",
    difficulty: "hard",
    difficultyLabel: "Difícil",
    questions: [
      {
        category: "Historia Argentina",
        question: "¿Qué legendario club escolar dominó el amateurismo argentino ganando 10 títulos a principios del siglo XX?",
        options: ["Quilmes AC", "Alumni Athletic Club", "Lomas Athletic", "Belgrano Athletic"],
        correctIndex: 1
      },
      {
        category: "Historia Argentina",
        question: "¿En qué año se fundó la predecesora oficial de la AFA (Argentine Association Football League)?",
        options: ["1893", "1905", "1912", "1931"],
        correctIndex: 0
      },
      {
        category: "Historia Argentina",
        question: "¿Quién fue el primer campeón del fútbol argentino profesional en el año 1931?",
        options: ["River Plate", "Independiente", "Boca Juniors", "San Lorenzo"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 12,
    title: "Récords Insólitos de Copas del Mundo",
    difficulty: "hard",
    difficultyLabel: "Difícil",
    questions: [
      {
        category: "Récords Mundiales",
        question: "¿Quién tiene el récord imbatido de más goles anotados en una sola edición de Mundial (13 en 1958)?",
        options: ["Gerd Müller", "Just Fontaine", "Sandor Kocsis", "Eusébio"],
        correctIndex: 1
      },
      {
        category: "Récords Mundiales",
        question: "¿Qué histórico suceso deportivo fue bautizado como 'El Milagro de Berna' en Suiza 1954?",
        options: [
          "Uruguay venciendo a Brasil",
          "Alemania Federal derrotando a la Hungría de Puskás",
          "Austria goleando a Suiza 7-5",
          "Francia eliminando al campeón"
        ],
        correctIndex: 1
      },
      {
        category: "Récords Mundiales",
        question: "¿Quién pateó y convirtió el penal definitorio para Italia en la final de Alemania 2006 ante Francia?",
        options: ["Andrea Pirlo", "Francesco Totti", "Fabio Grosso", "Alessandro Del Piero"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 13,
    title: "Estrategas y Tácticas Legendarias",
    difficulty: "hard",
    difficultyLabel: "Difícil",
    questions: [
      {
        category: "Directores Técnicos",
        question: "¿Qué técnico guio a Estudiantes de La Plata a ganar el tricampeonato de Libertadores (1968-70)?",
        options: ["Osvaldo Zubeldía", "Carlos Bilardo", "Alejandro Sabella", "Adolfo Pedernera"],
        correctIndex: 0
      },
      {
        category: "Directores Técnicos",
        question: "¿Cuántas Copas Libertadores conquistó Carlos Bianchi como director técnico (Vélez y Boca)?",
        options: ["3 Copas", "4 Copas", "5 Copas", "6 Copas"],
        correctIndex: 1
      },
      {
        category: "Directores Técnicos",
        question: "¿Quién fue el legendario cerebro táctico de la selección de Hungría ('Magiares Mágicos') de los 50?",
        options: ["Béla Guttmann", "Gusztáv Sebes", "Ernst Happel", "Rinus Michels"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 14,
    title: "Momentos Épicos e Inolvidables",
    difficulty: "hard",
    difficultyLabel: "Difícil",
    questions: [
      {
        category: "Momentos Históricos",
        question: "¿Qué jugador alemán anotó el polémico penal en la final de Italia 90 contra Argentina?",
        options: ["Lothar Matthäus", "Jürgen Klinsmann", "Andreas Brehme", "Rudi Völler"],
        correctIndex: 2
      },
      {
        category: "Momentos Históricos",
        question: "¿Qué árbitro expulsó a Antonio Rattín en Inglaterra 66, hecho clave para la invención de tarjetas?",
        options: ["Rudolf Kreitlein", "Ken Aston", "Jack Taylor", "Pierluigi Collina"],
        correctIndex: 0
      },
      {
        category: "Momentos Históricos",
        question: "¿Quién marcó el 'Gol de Oro' con volea letal en la final de la Eurocopa 2000 para Francia?",
        options: ["Zinedine Zidane", "Thierry Henry", "David Trezeguet", "Sylvain Wiltord"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 15,
    title: "El Gran Desafío Máster",
    difficulty: "hard",
    difficultyLabel: "Difícil",
    questions: [
      {
        category: "Historia Argentina",
        question: "¿Cómo apodaban a la legendaria delantera de River Plate de los 40 (Muñoz, Moreno, Pedernera, Labruna y Loustau)?",
        options: ["Los Matadores", "La Máquina", "Los Profesores", "El Ballet Azul"],
        correctIndex: 1
      },
      {
        category: "Leyendas",
        question: "¿Qué crack hispano-argentino brilló en River, Millonarios y condujo al Real Madrid a 5 Copas de Europa consecutivas?",
        options: ["Alfredo Di Stéfano", "Héctor Rial", "Enrique Omar Sívori", "Raimundo Orsi"],
        correctIndex: 0
      },
      {
        category: "Leyendas",
        question: "¿En qué club del fútbol argentino debutó oficialmente Diego Armando Maradona en Primera (1976)?",
        options: ["Boca Juniors", "Argentinos Juniors", "Newell's Old Boys", "Lanús"],
        correctIndex: 1
      }
    ]
  }
];

// ==============================================================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN (STATE)
// ==============================================================================
const STORAGE_KEY_COMPLETED = "triviagol_completed_levels";
const STORAGE_KEY_SOUND = "triviagol_sound_enabled";

const state = {
  currentLevelIndex: 0,
  currentQuestionIndex: 0,
  levelScore: 0,
  isAnswerLocked: false,
  timerSeconds: 30,
  timerInterval: null,
  soundEnabled: JSON.parse(localStorage.getItem(STORAGE_KEY_SOUND) ?? "true"),
  completedLevels: JSON.parse(localStorage.getItem(STORAGE_KEY_COMPLETED) || "[]")
};

// ==============================================================================
// 3. GENERADOR DE SONIDOS SINTETIZADOS (Web Audio API)
// Sin necesidad de archivos mp3 externos: funciona 100% offline y en GitHub Pages
// ==============================================================================
class SoundEffects {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playTone(frequency, type, duration, startTime = 0, gainLevel = 0.15) {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === "suspended") this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime + startTime);

      gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + startTime);
      osc.stop(this.ctx.currentTime + startTime + duration);
    } catch (e) {
      // Audio context suprimido por navegador hasta interacción de usuario
    }
  }

  correct() {
    // Acorde alegre de victoria (Do - Mi - Sol)
    this.playTone(523.25, "sine", 0.15, 0);
    this.playTone(659.25, "sine", 0.15, 0.1);
    this.playTone(783.99, "triangle", 0.35, 0.2, 0.2);
  }

  wrong() {
    // Tono grave de error / pitazo frustrado
    this.playTone(220, "sawtooth", 0.2, 0, 0.12);
    this.playTone(185, "sawtooth", 0.3, 0.15, 0.12);
  }

  click() {
    // Click sutil de interfaz
    this.playTone(800, "sine", 0.05, 0, 0.05);
  }

  levelPassed() {
    // Fanfarria corta de superación de nivel
    this.playTone(440, "triangle", 0.12, 0);
    this.playTone(554.37, "triangle", 0.12, 0.1);
    this.playTone(659.25, "triangle", 0.15, 0.2);
    this.playTone(880, "sine", 0.45, 0.35, 0.25);
  }
}

const sounds = new SoundEffects();

// ==============================================================================
// 4. ELEMENTOS DEL DOM
// ==============================================================================
const DOM = {
  // Pantallas
  screenHome: document.getElementById("screen-home"),
  screenMap: document.getElementById("screen-map"),
  screenGame: document.getElementById("screen-game"),
  screenResults: document.getElementById("screen-results"),

  // Audio & Global
  soundToggleBtn: document.getElementById("sound-toggle-btn"),
  soundIcon: document.getElementById("sound-icon"),

  // Home
  btnStart: document.getElementById("btn-start"),
  btnViewMap: document.getElementById("btn-view-map"),
  homeLevelsCompleted: document.getElementById("home-levels-completed"),
  homeAccuracy: document.getElementById("home-accuracy"),

  // Map
  btnMapBackHome: document.getElementById("btn-map-back-home"),
  mapProgressText: document.getElementById("map-progress-text"),
  levelsGrid: document.getElementById("levels-grid"),
  btnResetProgress: document.getElementById("btn-reset-progress"),

  // Game
  btnGameExit: document.getElementById("btn-game-exit"),
  gameLevelBadge: document.getElementById("game-level-badge"),
  gameLevelTitle: document.getElementById("game-level-title"),
  gameScoreCount: document.getElementById("game-score-count"),
  gameQuestionTracker: document.getElementById("game-question-tracker"),
  timerDisplay: document.getElementById("timer-display"),
  timerSeconds: document.getElementById("timer-seconds"),
  timerBar: document.getElementById("timer-bar"),
  questionCategory: document.getElementById("question-category"),
  questionText: document.getElementById("question-text"),
  optionsContainer: document.getElementById("options-container"),
  feedbackBanner: document.getElementById("feedback-banner"),
  feedbackIcon: document.getElementById("feedback-icon"),
  feedbackMsg: document.getElementById("feedback-msg"),

  // Results
  resultsIconContainer: document.getElementById("results-icon-container"),
  resultsStatusBadge: document.getElementById("results-status-badge"),
  resultsTitle: document.getElementById("results-title"),
  resultsMessage: document.getElementById("results-message"),
  resultsScore: document.getElementById("results-score"),
  resultsAccuracy: document.getElementById("results-accuracy"),
  resultsTimeLeft: document.getElementById("results-time-left"),
  btnNextLevel: document.getElementById("btn-next-level"),
  btnRetryLevel: document.getElementById("btn-retry-level"),
  btnResultsMap: document.getElementById("btn-results-map")
};

// ==============================================================================
// 5. CONTROLADOR DE VISTAS (PANTALLAS)
// ==============================================================================
function showScreen(screenKey) {
  const screens = [
    { key: "home", el: DOM.screenHome },
    { key: "map", el: DOM.screenMap },
    { key: "game", el: DOM.screenGame },
    { key: "results", el: DOM.screenResults }
  ];

  screens.forEach((s) => {
    if (s.key === screenKey) {
      s.el.classList.add("active");
    } else {
      s.el.classList.remove("active");
    }
  });

  // Si abrimos Home o Map, actualizamos los indicadores
  if (screenKey === "home") updateHomeStats();
  if (screenKey === "map") renderLevelsMap();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==============================================================================
// 6. SISTEMA DE MAPA DE NIVELES Y PROGRESO
// ==============================================================================

/**
 * Un nivel está desbloqueado si es el nivel 1 o si el nivel previo fue completado.
 */
function isLevelUnlocked(levelId) {
  if (levelId === 1) return true;
  return state.completedLevels.includes(levelId - 1);
}

/**
 * Renderiza dinámicamente las 15 tarjetas en el mapa de desafíos.
 */
function renderLevelsMap() {
  DOM.levelsGrid.innerHTML = "";
  const totalLevels = LEVELS_DATA.length;
  const completedCount = state.completedLevels.length;

  DOM.mapProgressText.textContent = `${completedCount} / ${totalLevels}`;

  LEVELS_DATA.forEach((lvl) => {
    const isCompleted = state.completedLevels.includes(lvl.id);
    const isUnlocked = isLevelUnlocked(lvl.id);

    const card = document.createElement("div");
    card.className = "level-card";

    if (isCompleted) {
      card.classList.add("completed");
    } else if (isUnlocked) {
      card.classList.add("unlocked");
    } else {
      card.classList.add("locked");
    }

    // Badge de dificultad
    const badgeClass =
      lvl.difficulty === "easy"
        ? "badge-easy"
        : lvl.difficulty === "medium"
        ? "badge-medium"
        : "badge-hard";

    // Contenido inferior del estado
    let statusHTML = "";
    if (isCompleted) {
      statusHTML = `
        <span class="level-status-tag">
          <span class="level-completed-check">✓</span> Completado
        </span>
      `;
    } else if (isUnlocked) {
      statusHTML = `<span class="level-status-tag">▶ Desbloqueado</span>`;
    } else {
      statusHTML = `<span class="level-status-tag">🔒 Bloqueado</span>`;
    }

    card.innerHTML = `
      <div class="level-card-top">
        <span class="level-num">Nivel ${lvl.id}</span>
        <span class="badge ${badgeClass}">${lvl.difficultyLabel}</span>
      </div>
      <div class="level-theme">${lvl.title}</div>
      <div class="level-card-bottom">
        ${statusHTML}
      </div>
    `;

    // Click solo si está desbloqueado
    if (isUnlocked) {
      card.addEventListener("click", () => {
        sounds.click();
        startLevel(lvl.id);
      });
    }

    DOM.levelsGrid.appendChild(card);
  });
}

function updateHomeStats() {
  const total = LEVELS_DATA.length;
  const completed = state.completedLevels.length;
  DOM.homeLevelsCompleted.textContent = `${completed} / ${total}`;

  const pct = Math.round((completed / total) * 100);
  DOM.homeAccuracy.textContent = `${pct}%`;
}

// ==============================================================================
// 7. MOTOR DEL JUEGO (GAME LOOP & TIMER)
// ==============================================================================

/**
 * Inicia el nivel seleccionado.
 */
function startLevel(levelId) {
  state.currentLevelIndex = LEVELS_DATA.findIndex((l) => l.id === levelId);
  if (state.currentLevelIndex === -1) state.currentLevelIndex = 0;

  state.currentQuestionIndex = 0;
  state.levelScore = 0;
  state.isAnswerLocked = false;

  const currentLevel = LEVELS_DATA[state.currentLevelIndex];

  // Actualizar top bar de la pantalla de juego
  DOM.gameLevelBadge.textContent = `Nivel ${currentLevel.id}`;
  DOM.gameLevelBadge.className = `badge badge-${currentLevel.difficulty}`;
  DOM.gameLevelTitle.textContent = currentLevel.title;
  DOM.gameScoreCount.textContent = "0";

  showScreen("game");
  loadQuestion();
}

/**
 * Carga y renderiza la pregunta actual con sus opciones.
 */
function loadQuestion() {
  const currentLevel = LEVELS_DATA[state.currentLevelIndex];
  const qData = currentLevel.questions[state.currentQuestionIndex];
  const totalQuestions = currentLevel.questions.length;

  // Actualizar indicadores
  DOM.gameQuestionTracker.textContent = `Pregunta ${state.currentQuestionIndex + 1} de ${totalQuestions}`;
  DOM.questionCategory.textContent = qData.category;
  DOM.questionText.textContent = qData.question;

  // Ocultar banner de feedback
  DOM.feedbackBanner.className = "feedback-banner hidden";

  // Crear botones de opción
  DOM.optionsContainer.innerHTML = "";
  state.isAnswerLocked = false;

  const optionKeys = ["A", "B", "C", "D"];

  qData.options.forEach((optText, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.setAttribute("type", "button");

    btn.innerHTML = `
      <span class="option-key">${optionKeys[index]}</span>
      <span class="option-text">${optText}</span>
    `;

    btn.addEventListener("click", () => handleOptionSelection(index, btn));
    DOM.optionsContainer.appendChild(btn);
  });

  // Iniciar Temporizador de 30 segundos
  startTimer();
}

/**
 * Inicia el conteo regresivo de 30 segundos por pregunta.
 */
function startTimer() {
  clearInterval(state.timerInterval);
  state.timerSeconds = 30;
  updateTimerUI();

  state.timerInterval = setInterval(() => {
    state.timerSeconds--;
    updateTimerUI();

    if (state.timerSeconds <= 0) {
      clearInterval(state.timerInterval);
      handleTimeout();
    }
  }, 1000);
}

/**
 * Actualiza la barra y el texto del temporizador según el tiempo restante.
 */
function updateTimerUI() {
  DOM.timerSeconds.textContent = state.timerSeconds;
  const percentage = (state.timerSeconds / 30) * 100;
  DOM.timerBar.style.width = `${Math.max(0, percentage)}%`;

  // Cambios de color y estilo según urgencia
  if (state.timerSeconds <= 5) {
    DOM.timerDisplay.className = "timer-display danger";
    DOM.timerBar.className = "progress-bar-fill danger";
  } else if (state.timerSeconds <= 12) {
    DOM.timerDisplay.className = "timer-display warning";
    DOM.timerBar.className = "progress-bar-fill warning";
  } else {
    DOM.timerDisplay.className = "timer-display";
    DOM.timerBar.className = "progress-bar-fill";
  }
}

/**
 * Procesa la respuesta seleccionada por el usuario.
 */
function handleOptionSelection(selectedIndex, clickedBtn) {
  if (state.isAnswerLocked) return;
  state.isAnswerLocked = true;
  clearInterval(state.timerInterval);

  const currentLevel = LEVELS_DATA[state.currentLevelIndex];
  const qData = currentLevel.questions[state.currentQuestionIndex];
  const isCorrect = selectedIndex === qData.correctIndex;

  // Bloquear todos los botones para evitar doble click
  const allButtons = DOM.optionsContainer.querySelectorAll(".option-btn");
  allButtons.forEach((btn) => btn.classList.add("disabled"));

  if (isCorrect) {
    // Acierto: botón en verde + sonido + incremento de score
    clickedBtn.classList.add("correct");
    sounds.correct();
    state.levelScore++;
    DOM.gameScoreCount.textContent = state.levelScore;

    showFeedback(true, "¡Golazo! Respuesta correcta ⚽");
  } else {
    // Error: botón en rojo + resaltar el correcto en verde
    clickedBtn.classList.add("incorrect");
    sounds.wrong();

    // Resaltar la opción que era correcta
    if (allButtons[qData.correctIndex]) {
      allButtons[qData.correctIndex].classList.add("correct");
    }

    showFeedback(false, `¡Al palo! La respuesta correcta era: ${qData.options[qData.correctIndex]}`);
  }

  // Esperar 1.8 segundos y pasar a la siguiente pregunta
  setTimeout(nextStep, 1800);
}

/**
 * Manejo de tiempo agotado (30 segundos cumplidos sin responder).
 */
function handleTimeout() {
  if (state.isAnswerLocked) return;
  state.isAnswerLocked = true;

  sounds.wrong();

  const currentLevel = LEVELS_DATA[state.currentLevelIndex];
  const qData = currentLevel.questions[state.currentQuestionIndex];

  // Bloquear botones y mostrar la respuesta correcta
  const allButtons = DOM.optionsContainer.querySelectorAll(".option-btn");
  allButtons.forEach((btn) => btn.classList.add("disabled"));

  if (allButtons[qData.correctIndex]) {
    allButtons[qData.correctIndex].classList.add("correct");
  }

  showFeedback(false, `¡Tiempo cumplido! La opción correcta era: ${qData.options[qData.correctIndex]}`);

  setTimeout(nextStep, 2000);
}

/**
 * Muestra el banner informativo con el resultado de la pregunta.
 */
function showFeedback(isSuccess, message) {
  DOM.feedbackBanner.className = `feedback-banner ${isSuccess ? "success" : "danger"}`;
  DOM.feedbackIcon.textContent = isSuccess ? "✔" : "✖";
  DOM.feedbackMsg.textContent = message;
}

/**
 * Avanza a la siguiente pregunta del nivel o presenta la pantalla de resultados.
 */
function nextStep() {
  const currentLevel = LEVELS_DATA[state.currentLevelIndex];

  if (state.currentQuestionIndex + 1 < currentLevel.questions.length) {
    state.currentQuestionIndex++;
    loadQuestion();
  } else {
    finishLevel();
  }
}

// ==============================================================================
// 8. PANTALLA DE RESULTADOS Y FINALIZACIÓN DE NIVEL
// ==============================================================================
function finishLevel() {
  const currentLevel = LEVELS_DATA[state.currentLevelIndex];
  const totalQuestions = currentLevel.questions.length;
  const score = state.levelScore;
  const passThreshold = 2; // Requiere al menos 2 aciertos de 3
  const hasPassed = score >= passThreshold;

  // Registrar nivel completado en LocalStorage si pasó y no estaba registrado
  if (hasPassed && !state.completedLevels.includes(currentLevel.id)) {
    state.completedLevels.push(currentLevel.id);
    localStorage.setItem(STORAGE_KEY_COMPLETED, JSON.stringify(state.completedLevels));
  }

  // Sonido según resultado
  if (hasPassed) {
    sounds.levelPassed();
  } else {
    sounds.wrong();
  }

  // Calcular estadísticas
  const accuracy = Math.round((score / totalQuestions) * 100);
  DOM.resultsScore.textContent = `${score} / ${totalQuestions}`;
  DOM.resultsAccuracy.textContent = `${accuracy}%`;
  DOM.resultsTimeLeft.textContent = `Nivel ${currentLevel.id}`;

  // Configurar textos dinámicos según el rendimiento
  if (hasPassed) {
    DOM.resultsIconContainer.textContent = "🏆";
    DOM.resultsStatusBadge.textContent = "¡Nivel Superado!";
    DOM.resultsStatusBadge.className = "badge badge-success";
    DOM.resultsTitle.textContent = score === 3 ? "¡Goleada Histórica!" : "¡Victoria Ajustada!";
    DOM.resultsMessage.textContent =
      score === 3
        ? "¡Rendimiento perfecto de Balón de Oro! Demostraste ser una enciclopedia del fútbol."
        : "¡Gran partido! Clasificaste a la siguiente fase y el mapa ya tiene tu tilde verde.";

    // Botón siguiente nivel disponible si no es el nivel 15
    const hasNext = state.currentLevelIndex + 1 < LEVELS_DATA.length;
    DOM.btnNextLevel.style.display = hasNext ? "inline-flex" : "none";
  } else {
    DOM.resultsIconContainer.textContent = "⚽";
    DOM.resultsStatusBadge.textContent = "No alcanzaron los puntos";
    DOM.resultsStatusBadge.className = "badge badge-hard";
    DOM.resultsTitle.textContent = "¡A entrenar en la semana!";
    DOM.resultsMessage.textContent =
      "En el fútbol siempre hay revancha. Necesitás al menos 2 aciertos para desbloquear el próximo nivel.";
    DOM.btnNextLevel.style.display = "none";
  }

  showScreen("results");
}

// ==============================================================================
// 9. CONFIGURACIÓN DE EVENT LISTENERS
// ==============================================================================
function initEventListeners() {
  // Toggle de sonido
  DOM.soundToggleBtn.addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    localStorage.setItem(STORAGE_KEY_SOUND, JSON.stringify(state.soundEnabled));
    DOM.soundIcon.textContent = state.soundEnabled ? "🔊" : "🔇";
    if (state.soundEnabled) sounds.click();
  });

  // Pantalla Inicio
  DOM.btnStart.addEventListener("click", () => {
    sounds.click();
    // Iniciar el primer nivel disponible no completado o el nivel 1
    const nextPlayable = LEVELS_DATA.find((l) => !state.completedLevels.includes(l.id)) || LEVELS_DATA[0];
    startLevel(nextPlayable.id);
  });

  DOM.btnViewMap.addEventListener("click", () => {
    sounds.click();
    showScreen("map");
  });

  // Pantalla Mapa
  DOM.btnMapBackHome.addEventListener("click", () => {
    sounds.click();
    showScreen("home");
  });

  DOM.btnResetProgress.addEventListener("click", () => {
    if (confirm("¿Estás seguro de reiniciar todo tu progreso de niveles y tildes?")) {
      state.completedLevels = [];
      localStorage.removeItem(STORAGE_KEY_COMPLETED);
      renderLevelsMap();
      updateHomeStats();
      sounds.click();
    }
  });

  // Pantalla Juego
  DOM.btnGameExit.addEventListener("click", () => {
    if (confirm("¿Querés abandonar la partida actual? Perderás el progreso de este nivel.")) {
      clearInterval(state.timerInterval);
      sounds.click();
      showScreen("map");
    }
  });

  // Pantalla Resultados
  DOM.btnNextLevel.addEventListener("click", () => {
    sounds.click();
    if (state.currentLevelIndex + 1 < LEVELS_DATA.length) {
      const nextLevel = LEVELS_DATA[state.currentLevelIndex + 1];
      startLevel(nextLevel.id);
    } else {
      showScreen("map");
    }
  });

  DOM.btnRetryLevel.addEventListener("click", () => {
    sounds.click();
    const currentLevel = LEVELS_DATA[state.currentLevelIndex];
    startLevel(currentLevel.id);
  });

  DOM.btnResultsMap.addEventListener("click", () => {
    sounds.click();
    showScreen("map");
  });
}

// ==============================================================================
// 10. INICIALIZACIÓN DE LA APLICACIÓN
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Ajustar ícono de sonido inicial
  DOM.soundIcon.textContent = state.soundEnabled ? "🔊" : "🔇";

  // Iniciar listeners y vista inicial
  initEventListeners();
  updateHomeStats();
  showScreen("home");
});
