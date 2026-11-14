# ⚽ Master Fútbol Trivia Pro | Plataforma Profesional de Entretenimiento Futbolístico

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-10B981?style=for-the-badge&logo=github)](https://alejoezequiel99.github.io/trivia-futbol/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-F59E0B?style=for-the-badge)](LICENSE)

**Master Fútbol Trivia Pro** es una plataforma web interactiva de entretenimiento y trivia futbolística de calidad internacional, inspirada en las mejores referencias globales del género (*Sporcle*, *PlayFootball.Games*, *Futbolle*, *FourFourTwo* y *Triviverse*).

Desarrollada con estética visual deportiva profesional (Dark Mode pizarra `#090D14`, Verde Césped Neón `#10B981`, Púrpura Eléctrico `#A855F7` y Dorado `#F59E0B`), motor de audio sintetizado con **Web Audio API**, persistencia automática en `localStorage` y arquitectura 100% compatible con **GitHub Pages**.

---

## 🚀 Modos de Juego Disponibles

### 1. 🏆 Trivia por Ligas y Sectores (Modo Clásico)
- **5 Sectores temáticos + Modo SuperMix:**
  - 🌍 **Fútbol Mundial:** Mundiales, Champions League, Balones de Oro, récords y leyendas.
  - 🇦🇷 **Fútbol Argentino:** Primera División AFA, Superclásicos, Libertadores e historia criolla.
  - 🎺 **Fútbol de Ascenso:** Primera Nacional, B Metro, canchas de barro y ascensos históricos.
  - 🏴󠁧󠁢󠁥󠁮󠁧󠁿 **Premier League:** The Big Six, *The Invincibles*, entrenadores célebres y récords británicos.
  - 🇪🇸 **LaLiga:** El Clásico, récords de goleo, leyendas de época y clubes tradicionales.
  - 🔀 **SuperMix Fútbol Total:** Batería combinada de preguntas de todas las categorías.
- **4 Dificultades** con insignias dinámicas: Fácil, Intermedio, Difícil y Experto.
- **4 Comodines en Vivo:** 50/50, Pista del DT, VAR/Cambio y Pase de Gol.
- **Pantalla de Resumen Final** con desglose de cada pregunta y fuentes oficiales.

### 2. 🕵️‍♂️ Adiviná el Jugador
- Fotografía con **desenfoque progresivo** de `22px` a `0px`.
- **5 pistas** revelables: Nacionalidad, Posición, Generación, Clubes e Hito.
- Autocompletado con 75+ figuras mundiales y normalización de apodos.
- Recompensas decrecientes: **100→75→50→30→15 FutCoins** según intentos.
- **25 futbolistas** icónicos (Messi, Maradona, CR7, Mbappé, Haaland y más).

### 3. 🗺️ Camino de Carrera
- **Línea temporal cronológica interactiva** de transferencias de clubes.
- Nodos numerados con años, países/ligas y etiquetas de cesión (Préstamo).
- **4 intentos** con 3 pistas de respaldo revelables: Nacionalidad, Posición y Logro Clave.
- **25 trotamundos legendarios** (Zlatan, Tevez, Falcao, Anelka, Seedorf, Forlán y más).

### 4. 📅 Desafío Diario Oficial (Nuevo en Etapa 5)
- **Mismo reto para toda la comunidad:** 10 preguntas generadas a partir de una semilla matemática determinista basada en la fecha `YYYY-MM-DD` (todos los usuarios reciben exactamente las mismas preguntas cada día).
- **Bloqueo anti-abuso:** Solo se puede completar una vez por día. Al día siguiente se activa un nuevo desafío.
- **Temporizador de 20 segundos por pregunta** con cambio de color de alerta.
- **Racha de Días Consecutivos 🔥:** Registra si jugaste ayer y suma a la racha diaria. Si cortás la racha, vuelve a 1.
- **Economía equilibrada:** Base de 150🪙 + 10🪙 por pregunta correcta + hasta 100🪙 de bonus por racha diaria + 75 XP base.
- **Countdown al próximo reto:** Contador regresivo a medianoche visible en la tarjeta del menú y en el panel de resultado.
- **Resultado compartible:** Genera un bloque de texto con emojis (🟩/🟥 por pregunta) copiable al portapapeles para compartir en redes sociales.
- **Historial de desafíos:** Registra cada partida diaria en `localStorage` (puntuación, monedas, XP, racha y timestamp).

---

## 🎖️ Progresión y Coleccionables

### Rangos de Carrera de Jugador (XP)
- **Nivel 1 (0 XP):** Promesa — **Nivel 2 (150 XP):** Debutante — **Nivel 3 (300 XP):** Titular
- **Nivel 4 (450 XP):** Capitán — **Nivel 5 (600 XP):** Ídolo — **Nivel 6 (750+ XP):** Leyenda

### Museo y Vitrina del Club (22 Coleccionables)
- 👕 **8 Camisetas Históricas** — 🏆 **6 Trofeos Sagrados** — 🃏 **8 Cartas FUT Style** (Bronce a Leyenda)

---

## ⌨️ Controles y Accesibilidad
- `1-4` / `A-D`: Responder opciones en la trivia clásica.
- `Enter`: Enviar respuesta (Adiviná el Jugador / Camino de Carrera) o avanzar pregunta.
- `Escape`: Cerrar lista de autocompletado.
- 🔊 Sonido sintetizado **Web Audio API** activable/desactivable desde la cabecera.

---

## 🗺️ Hoja de Ruta (Roadmap)

- [x] **Etapa 1:** Persistencia profunda, resumen de partida, hub de modos y rangos de carrera.
- [x] **Etapa 2:** Banco ampliado a 85 preguntas verificadas con 4 dificultades y fuentes oficiales.
- [x] **Etapa 3:** Modo "Adiviná el Jugador" (fotos desenfocadas, pistas y autocompletado).
- [x] **Etapa 4:** Modo "Camino de Carrera" (timeline cronológico de transferencias).
- [x] **Etapa 5:** Desafíos Diarios (semilla determinista, bloqueo anti-abuso, racha diaria, compartir).
- [ ] **Etapa 6:** Logros desbloqueables, historial de partidas y estadísticas ampliadas.
- [ ] **Etapa 7:** Modos restantes (Tres en raya futbolero, Mayor o menor, Armá el once, Adiviná el escudo).

---

## 🌐 Cómo Actualizar tu Repositorio en GitHub

1. Ingresá a tu repositorio: [**github.com/alejoezequiel99/trivia-futbol**](https://github.com/alejoezequiel99/trivia-futbol).
2. Hacé clic en **Add file** > **Upload files**.
3. Arrastrá los archivos que están en tu carpeta del Escritorio (`Master-Futbol-Trivia`):
   - `index.html`
   - `README.md`
4. En el campo de commit escribe:  
   `feat: Etapa 5 - Desafío Diario con semilla determinista, racha consecutiva y resultado compartible`
5. Hacé clic en **Commit changes**.

---

Desarrollado con pasión futbolera y código limpio para desplegar en GitHub Pages.
