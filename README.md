# ⚽ Master Fútbol Trivia Pro | Edición Videojuego Deportivo

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-10B981?style=for-the-badge&logo=github)](https://alejoezequiel99.github.io/trivia-futbol/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-F59E0B?style=for-the-badge)](LICENSE)

**Master Fútbol Trivia Pro** es una aplicación web interactiva competitiva de preguntas y respuestas sobre fútbol internacional, torneos locales, ascenso y grandes ligas. Diseñada con estética de videojuego deportivo profesional (Dark Mode con tonos pizarra, Verde Césped `#10B981` y Dorado Trofeo `#F59E0B`), comodines en vivo, economía de monedas **FutCoins** y una **Vitrina / Club** con 22 artículos coleccionables estilo Ultimate Team.

---

## 🆚 Comparativa: ¿Qué hay de nuevo frente a la versión anterior?

| Característica | Versión Anterior (Trivia Gol) | Versión Actual (Master Fútbol Trivia Pro) |
| :--- | :--- | :--- |
| **Arquitectura** | 3 archivos (`index.html`, `style.css`, `script.js`) | **1 archivo autónomo (`index.html`)** con Tailwind CDN y FontAwesome 6 |
| **Categorías** | 1 serie general de preguntas | **5 Ligas/Sectores dedicados** + Modo SuperMix Total |
| **Dificultad** | Preguntas estándar | **Preguntas capciosas y de doble lectura** con datos poco conocidos |
| **Economía** | Sin monedas | **Sistema de FutCoins** (inicias con 200, multiplicador por racha) |
| **Comodines en Vivo** | Inexistentes | **4 Comodines:** 50/50, Pista del DT, VAR y Pase de Gol |
| **Temporizador** | 30 segundos fijo | **20 segundos dinámico** con cambio de color y alerta de peligro |
| **Feedback** | Solo indicaba correcta/incorrecta | **Tarjeta educativa con explicación histórica y derribo de mitos** |
| **Coleccionables** | Sin vitrina | **22 Coleccionables:** Camisetas clásicas, Trofeos y Cartas FUT |

---

## 🎮 Mecánicas y Funcionalidades del Juego

### 1. Sectores y Ligas de Competición
- 🌍 **Fútbol Mundial:** Copas del Mundo, Champions League, Balones de Oro, mitos universales y récords históricos.
- 🇦🇷 **Fútbol Argentino:** Primera División AFA, Superclásicos de época, Copas Libertadores y anécdotas de vestuario.
- 🎺 **Fútbol de Ascenso:** La mística del barro, Primera Nacional, B Metro, estadios con historia, apodos barriales y ascensos épicos.
- 🏴󠁧󠁢󠁥󠁮󠁧󠁿 **Premier League:** The Big Six, los *Invincibles* de Arsène Wenger, el United de Ferguson y récords británicos.
- 🇪🇸 **LaLiga Española:** El Clásico Real Madrid vs. Barcelona, el invencible Athletic de Bilbao, récords Pichichi y figuras de época.
- 🔀 **SuperMix Fútbol Total:** Desafío combinado de todas las categorías con máxima bonificación de monedas.

### 2. Barra de Comodines Activos (Lifelines)
Durante la partida podés activar 4 comodines estratégicos usando tus monedas:
- 💡 **50/50 (50 FutCoins):** Descarta 2 opciones incorrectas con tachado visual en pantalla.
- 📋 **Pista del DT (75 FutCoins):** Muestra un consejo táctico del entrenador que te orienta sin revelar la respuesta.
- 📺 **VAR / Cambio de Pregunta (100 FutCoins):** Reemplaza la pregunta en curso por otra del banco de la misma categoría.
- ⚡ **Pase de Gol (150 FutCoins):** Valida la pregunta como acertada automáticamente para proteger y extender tu racha.

### 3. Sistema de Racha y Economía (FutCoins)
- Comienzas tu carrera con **200 FutCoins**.
- Cada respuesta correcta suma **+20 monedas base**, más un **bonus de +5 monedas por cada punto de racha activa** (🔥).
- Si fallas o se te acaba el tiempo de 20 segundos, la racha se reinicia a 0.

### 4. Museo y Vitrina de Recompensas (22 Coleccionables)
Dividido en tres secciones con desbloqueo progresivo según tu desempeño y rachas:
- 👕 **8 Camisetas Históricas:**
  - *Argentina 1986* (La Azul mística de Diego ante Inglaterra).
  - *Arsenal 2003-04* (The Invincibles).
  - *Boca Juniors 2000* (Campeón Intercontinental en Tokio ante Real Madrid).
  - *River Plate 1996* (Bicampeón de América con Francescoli).
  - *Barcelona 2011* (El Sextete y el baile en Wembley).
  - *Nueva Chicago 2001* (El ascenso histórico en Córdoba).
  - *Chacarita Juniors 1969* (El Funebrero campeón del Metropolitano).
  - *Leicester City 2016* (El milagro de Claudio Ranieri).
- 🏆 **6 Trofeos Sagrados:**
  - *Copa del Mundo FIFA*, *UEFA Champions League (La Orejona)*, *Copa Libertadores*, *Trofeo Primera B Nacional*, *Copa Intercontinental* y *Balón de Oro de Honor*.
- 🃏 **8 Cartas Ultimate Team (FUT Style):**
  - Con marcos y rarezas (*Bronce*, *Plata*, *Oro*, *Leyenda*): Lionel Messi (99), Diego Maradona (99), "El Trinche" Carlovich (89), Juan Román Riquelme (94), Thierry Henry (94), Alfredo Di Stéfano (96), Erling Haaland (92) y Hugo "Mono" Navarro (84).

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura limpia y accesible de Aplicación de Página Única (SPA).
- **Tailwind CSS (CDN):** Diseño responsivo de alta gama para celulares, tablets y monitores.
- **FontAwesome 6 & Google Fonts:** Tipografías deportivas (*Outfit* y *Plus Jakarta Sans*) e iconografía deportiva completa.
- **JavaScript Moderno (ES6+):** Motor de temporizador dinámico, evaluación de respuestas, comodines, control de audio sintetizado con **Web Audio API** (sin archivos de audio externos) y persistencia mediante `localStorage`.

---

## 🌐 Cómo Actualizar tu Repositorio en GitHub

1. Ingresá a tu repositorio: [**github.com/alejoezequiel99/trivia-futbol**](https://github.com/alejoezequiel99/trivia-futbol).
2. Hacé clic en el botón **Add file** > **Upload files**.
3. Arrastrá los archivos que están en tu carpeta del Escritorio (`Master-Futbol-Trivia`):
   - `index.html`
   - `README.md`
4. En el campo de commit escribe:  
   `feat: Actualización a Master Fútbol Trivia Pro con comodines, monedas y vitrina`
5. Hacé clic en **Commit changes**.
6. En un minuto tu versión en [**alejoezequiel99.github.io/trivia-futbol**](https://alejoezequiel99.github.io/trivia-futbol/) se actualizará automáticamente con todo el juego nuevo.

---

Desarrollado con pasión futbolera y código limpio para desplegar en GitHub Pages.
