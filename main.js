
const profiles = [
  {
    "name": "Diega",
    "photo": "assets/diega.jpg",
    "match": 98,
    "distance": "A 6 km",
    "job": "Contadora",
    "status": "Algo serio",
    "bio": "Trabajo, vivo sola, tengo carro... y sí, probablemente terminemos en un bar.",
    "green": [
      "Independiente",
      "Responsable",
      "Siempre tiene plan"
    ],
    "red": [
      "Dice “la última” unas siete veces",
      "Tiene más confianza con el bartender que contigo"
    ],
    "activity": "Te preguntó si prefieres una cita romántica... o ir por unas chelas. 🍻"
  },
  {
    "name": "Fabiana",
    "photo": "assets/fabiana.jpg",
    "match": 96,
    "distance": "A 4 km",
    "job": "Adm. de Negocios Internacionales",
    "status": "Sorpréndeme",
    "bio": "No soy antipática. Simplemente la mayoría no pasa el filtro.",
    "green": [
      "Muy leal",
      "Independiente",
      "Directa"
    ],
    "red": [
      "Primera impresión: insufrible",
      "Segunda impresión: sigue siendo insufrible",
      "Tercera impresión: quizá ya te cae bien"
    ],
    "activity": "Vio tu mensaje hace 5 horas. Sigue decidiendo si mereces respuesta. 🙂"
  },
  {
    "name": "Georgina",
    "photo": "assets/georgina.jpg",
    "match": 97,
    "distance": "A 2 km",
    "job": "Profesora",
    "status": "Relación estable",
    "bio": "Si aceptas una cita conmigo, prepárate para escuchar por qué Iron Man sigue siendo el mejor Avenger.",
    "green": [
      "Inteligente",
      "Paciente",
      "Buena conversación"
    ],
    "red": [
      "Corrige datos aunque nadie lo haya pedido",
      "Puede convertir cualquier conversación en una clase"
    ],
    "activity": "Te envió un video de Marvel de 27 minutos diciendo “míralo cuando puedas”."
  },
  {
    "name": "Joselyn",
    "photo": "assets/joselyn.jpg",
    "match": 98,
    "distance": "A 3 km",
    "job": "Ingeniera económica",
    "status": "Algo serio",
    "bio": "Dicen que soy seria. Es mentira. Solo estoy analizando cuánto voy a molestarte antes de que me caigas bien.",
    "green": [
      "Inteligente",
      "Muy graciosa",
      "Siempre tiene tema de conversación"
    ],
    "red": [
      "Si te molestas es porque ya te agarró confianza",
      "Nunca sabes cuándo habla en serio"
    ],
    "activity": "Te respondió un meme en 8 segundos... para burlarse."
  },
  {
    "name": "Eduarda",
    "photo": "assets/eduarda.jpg",
    "match": 95,
    "distance": "A 5 km",
    "job": "Profesora",
    "status": "Lo que se dé",
    "bio": "Si no sabes jugar Catan o no has visto Fullmetal Alchemist... tenemos temas pendientes.",
    "green": [
      "Muy divertida",
      "Siempre propone planes",
      "Buena compañía"
    ],
    "red": [
      "Explica el lore completo del anime aunque no preguntes"
    ],
    "activity": "Canceló una cita porque había noche de juegos. 🎲"
  },
  {
    "name": "Renata",
    "photo": "assets/renata.jpg",
    "match": 94,
    "distance": "A 1 km",
    "job": "Administradora",
    "status": "Algo serio",
    "bio": "Las indirectas me dan flojera. Si te gusto, dilo. Si no, también.",
    "green": [
      "Comunicación directa",
      "Muy sociable",
      "Cariñosa"
    ],
    "red": [
      "Si das muchas vueltas, pierde el interés"
    ],
    "activity": "Te preguntó: “¿Qué somos?” en la segunda cita. 👀"
  }
];

const slides = [
  { kind: "cover" },
  { kind: "rules" },
  ...profiles.map((profile) => ({ kind: "profile", profile })),
  { kind: "awards" },
  { kind: "ending" }
];

let current = 0;
const app = document.querySelector("#app");

function list(items, type) {
  const icon = type === "green" ? "✓" : "⚠";
  return items.map(item => `<li><span>${icon}</span><p>${item}</p></li>`).join("");
}

function profileSlide(p) {
  return `
    <section class="slide profile-slide">
      <div class="topbar">
        <div class="brand">🔥 <b>tinder</b></div>
        <div class="verified">Verificado <span>✓</span></div>
      </div>

      <div class="profile-layout">
        <div class="visual-column">
          <div class="photo-card">
            <img src="${p.photo}" alt="${p.name}">
            <div class="compatibility">
              <strong>${p.match}%</strong>
              <small>COMPATIBLE</small>
            </div>
            <div class="photo-gradient"></div>
            <div class="photo-name">
              <h1 style="color:red;font-size:80px;position:absolute;top:50px;left:50px;z-index:9999">
HOLA
</h1>
              <p>📍 ${p.distance} &nbsp; · &nbsp; 👩‍💼 ${p.job}</p>
            </div>
          </div>

          <div class="decision-row">
            <button class="round nope">✕</button>
            <button class="round super">★</button>
            <button class="round like">♥</button>
          </div>
        </div>

        <div class="content-column">
          <div class="status-row">
            <div>
              <small>ÚLTIMA CONEXIÓN</small>
              <strong>Hace ${Math.max(2, 100 - p.match)} min</strong>
            </div>
            <div>
              <small>BUSCANDO</small>
              <span class="pill">${p.status}</span>
            </div>
          </div>

          <article class="panel bio-panel">
            <div class="panel-title">BIO</div>
            <p>${p.bio}</p>
          </article>

          <div class="flags-grid">
            <article class="panel flag-panel green-panel">
              <div class="panel-title">GREEN FLAGS</div>
              <ul>${list(p.green, "green")}</ul>
            </article>

            <article class="panel flag-panel red-panel">
              <div class="panel-title">RED FLAGS</div>
              <ul>${list(p.red, "red")}</ul>
            </article>
          </div>

          <article class="activity-panel">
            <div class="activity-icon">📱</div>
            <div>
              <small>ÚLTIMA ACTIVIDAD</small>
              <p>${p.activity}</p>
            </div>
          </article>
        </div>
      </div>
    </section>`;
}

function render() {
  const slide = slides[current];
  let body = "";

  if (slide.kind === "cover") {
    body = `
      <section class="slide cover">
        <div class="cover-copy">
          <div class="cover-logo">🔥 tinder</div>
          <div class="eyebrow">EXPERIMENTO SOCIAL 2026</div>
          <h1>¿SALDRÍAS<br><span>CONTIGO</span><br>SI FUERAS DEL<br>SEXO OPUESTO?</h1>
          <p>Un estudio completamente innecesario, pero respaldado por años de malas decisiones sentimentales.</p>
          <div class="swipe-hint">Desliza con las flechas del teclado →</div>
        </div>
        <div class="cover-stack">
          ${profiles.slice(0,3).map((p,i)=>`<div class="mini-card card-${i+1}"><img src="${p.photo}"><span>${p.name}</span></div>`).join("")}
        </div>
      </section>`;
  }

  if (slide.kind === "rules") {
    body = `
      <section class="slide rules">
        <div class="rules-head">
          <div class="brand">🔥 <b>tinder</b></div>
          <h1>REGLAS DEL <span>EXPERIMENTO</span></h1>
        </div>
        <div class="rules-body">
          <div class="rules-list">
            <div><span>01</span><p>Se evaluarán <b>6 perfiles</b>.</p></div>
            <div><span>02</span><p>Cada perfil pertenece a una persona de esta sala.</p></div>
            <div><span>03</span><p>Tendrás unos segundos para decidir.</p></div>
            <div><span>04</span><p>Una vez revelada la identidad, no se aceptan arrepentimientos.</p></div>
          </div>
          <div class="rules-actions">
            <div class="action-card like"><span>♥</span><b>LIKE</b></div>
            <div class="action-card nope"><span>✕</span><b>NOPE</b></div>
            <div class="action-card super"><span>★</span><b>SUPER LIKE</b></div>
          </div>
        </div>
        <div class="rules-footer">Toda respuesta podrá ser utilizada para burlarnos de ti durante los próximos 10 años. 😈</div>
      </section>`;
  }

  if (slide.kind === "profile") body = profileSlide(slide.profile);

  if (slide.kind === "awards") {
    const awards = [
      ["💍", "Más material para matrimonio", "Renata"],
      ["🚩", "CEO de las Red Flags", "Fabiana"],
      ["😂", "Más probable que te haga reír", "Joselyn"],
      ["🎭", "Primera impresión más engañosa", "Joselyn"],
      ["👑", "Más independiente", "Diega"],
      ["🎮", "Nerd más encantadora", "Eduarda"],
      ["🦸", "Terminaría hablando de Marvel", "Georgina"]
    ];
    body = `
      <section class="slide awards">
        <div class="awards-head">
          <div class="brand gold">🔥 tinder</div>
          <h1>🏆 TINDER AWARDS 2026</h1>
          <p>Premios que nadie pidió, pero todos merecían.</p>
        </div>
        <div class="awards-grid">
          ${awards.map(a => `<div class="award-card"><span>${a[0]}</span><div><small>${a[1]}</small><strong>${a[2]}</strong></div></div>`).join("")}
        </div>
      </section>`;
  }

  if (slide.kind === "ending") {
    body = `
      <section class="slide ending">
        <div class="ending-head">
          <div class="brand">🔥 <b>tinder</b></div>
          <h1>CONCLUSIONES DEL ESTUDIO</h1>
          <p>Después de analizar los seis perfiles, la ciencia llegó a resultados preocupantes.</p>
        </div>

        <div class="ending-layout">
          <div class="faces">
            ${profiles.map(p => `<div class="face-card"><img src="${p.photo}" alt="${p.name}"><span>${p.name}</span></div>`).join("")}
          </div>

          <div class="conclusion-list">
            <div><span>✓</span><p>Todos creemos que somos un partidazo.</p></div>
            <div><span>🚩</span><p>Todos tenemos al menos una red flag.</p></div>
            <div><span>😅</span><p>Fuimos más exigentes evaluando que siendo evaluados.</p></div>
            <div><span>🍺</span><p>Algunos necesitan terapia. Otros, responder mensajes.</p></div>
          </div>
        </div>

        <div class="final-box">
          <small>LA CONCLUSIÓN MÁS IMPORTANTE</small>
          <strong>Si no te darías Like a ti mismo, quizá sea momento de actualizar tu perfil.</strong>
        </div>
      </section>`;
  }

  app.innerHTML = `
    <main class="deck">
      <div class="counter">${current + 1} / ${slides.length}</div>
      ${body}
      <nav>
        <button id="prev">←</button>
        <div class="dots">${slides.map((_,i)=>`<span class="${i===current?'active':''}"></span>`).join("")}</div>
        <button id="next">→</button>
      </nav>
    </main>`;

  document.querySelector("#prev").addEventListener("click", previous);
  document.querySelector("#next").addEventListener("click", next);
}

function next() {
  current = (current + 1) % slides.length;
  render();
}

function previous() {
  current = (current - 1 + slides.length) % slides.length;
  render();
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") next();
  if (event.key === "ArrowLeft") previous();
});

render();
