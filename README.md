# ⚽ Trivia Gol - Desafío Futbolero

Una aplicación web interactiva de preguntas y respuestas sobre fútbol internacional, Copas del Mundo e historia del fútbol argentino. Diseñada con una arquitectura limpia en **HTML5, CSS3 y Vanilla JavaScript**, con modo oscuro moderno y 15 niveles de dificultad progresiva.

Desplegable directamente en **GitHub Pages** sin configuraciones complejas ni frameworks.

---

## 🚀 Características Principales

- **Diseño Moderno & Dark Mode**: Paleta en tonos azulados y grisáceos (`#080d1a`, `#111a2e`, `#17223b`) con detalles en azul eléctrico (`#38bdf8`), verde césped (`#22c55e`) y rojo alerta (`#ef4444`).
- **100% Responsivo**: Adaptado tanto para pantallas móviles como monitores de escritorio.
- **Sistema de 15 Niveles Progresivos**:
  - 🟢 **Niveles 1 a 5 (Fácil)**: Mundiales recientes, estrellas y conceptos clásicos.
  - 🟡 **Niveles 6 a 10 (Intermedio)**: Copa Libertadores, historia de la Selección Argentina y torneos internacionales.
  - 🔴 **Niveles 11 a 15 (Difícil)**: Curiosidades, récords mundiales, amateurismo argentino y leyendas del siglo XX.
- **Mapa de Desafíos & Desbloqueo**:
  - Cada nivel se desbloquea al aprobar el anterior (al menos 2 de 3 preguntas correctas).
  - Cada nivel superado luce un **tilde verde (`✔`)** y resplandor de victoria.
  - Guardado persistente automático mediante `localStorage`.
- **Mecánica de Juego y Feedback**:
  - Temporizador regresivo de 30 segundos por pregunta con barra dinámica.
  - Efectos visuales instantáneos: aciertos en verde, fallos en rojo con indicación de la opción correcta.
  - Bloqueo de botones tras la respuesta y avance automático.
- **Efectos de Sonido Nativos**:
  - Sintetizados mediante la **Web Audio API** de JavaScript (sin necesidad de cargar archivos MP3 externos).
  - Botón para silenciar/activar sonido en cualquier momento.

---

## 📂 Estructura de Archivos

```text
trivia-futbol/
│
├── index.html        # Estructura semántica, pantallas y componentes accesibles
├── style.css         # Estilos, variables CSS, layout responsive y animaciones
├── script.js         # Lógica de juego, base de datos de preguntas y persistencia
└── README.md         # Documentación del proyecto
```

---

## 🛠️ Cómo Probarlo en Tu Computadora

1. Hacé doble click en el archivo `index.html` para abrirlo en cualquier navegador (Chrome, Edge, Firefox, Brave).
2. O utilizá una extensión como **Live Server** en VS Code.

---

## 🌐 Pasos para Subirlo a GitHub y Activar GitHub Pages

1. **Crear el repositorio en GitHub**:
   - Ingresá a tu cuenta de GitHub y creá un nuevo repositorio público llamado por ejemplo: `trivia-futbol`.
2. **Subir los archivos mediante Git**:
   ```bash
   git init
   git add .
   git commit -m "feat: Primera versión de Trivia Gol con 15 niveles y dark mode"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/trivia-futbol.git
   git push -u origin main
   ```
3. **Activar GitHub Pages**:
   - En tu repositorio de GitHub, andá a **Settings** > **Pages**.
   - En la sección **Branch**, seleccioná la rama `main` y la carpeta `/ (root)`.
   - Hacé click en **Save**.
   - En un par de minutos, tendrás tu enlace público listo para compartir (ej: `https://TU_USUARIO.github.io/trivia-futbol/`).
