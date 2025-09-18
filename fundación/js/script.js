document.getElementById('year').textContent = new Date().getFullYear();


// Noticias en español (demo)
const noticiasES = [
  {
    id: 1,
    title: "Taller de pintura urbana abre inscripciones",
    body: "La Fundación Artea invita a jóvenes de la ciudad a participar en el nuevo taller de pintura urbana que busca fomentar la creatividad y el arte en espacios públicos."
  },
  {
    id: 2,
    title: "Concierto cultural para promover talento local",
    body: "Este sábado se realizará un concierto con bandas emergentes de la comunidad. La iniciativa busca impulsar la música y la cultura local entre los jóvenes."
  },
  {
    id: 3,
    title: "Exposición de arte juvenil en el centro cultural",
    body: "Los trabajos de los talleres de arte de la Fundación Artea estarán expuestos durante todo el mes en el centro cultural. Ven y apoya a los jóvenes artistas."
  }
];

// Función para crear tarjetas de noticias
function makeNewsItem(post) {
  const div = document.createElement('div');
  div.className = 'card news-item';
  
  const img = document.createElement('img');
  img.src = `https://picsum.photos/seed/post${post.id}/200/140`;
  img.alt = 'foto noticia';
  
  const body = document.createElement('div');
  const h4 = document.createElement('h4');
  h4.textContent = post.title;
  h4.style.margin = '0 0 6px';
  h4.style.fontFamily = 'Montserrat';
  
  const p = document.createElement('p');
  p.style.margin = 0;
  p.style.color = 'var(--muted)';
  p.textContent = post.body.slice(0,140) + (post.body.length>140?'…':'');
  
  body.appendChild(h4);
  body.appendChild(p);
  div.appendChild(img);
  div.appendChild(body);
  return div;
}

// Insertar noticias en el DOM
const news = document.getElementById('news');
news.innerHTML = '';
noticiasES.forEach(noticia => news.appendChild(makeNewsItem(noticia)));


function makeVolunteer(user) {
  const cont = document.createElement('div');
  cont.className = 'vol';
  const img = document.createElement('img');
  img.className = 'avatar';
  img.src = user.picture.medium;
  img.alt = user.name.first;
  const meta = document.createElement('div');
  const name = document.createElement('div');
  name.textContent = user.name.first + ' ' + user.name.last;
  name.style.fontWeight = '700';
  const role = document.createElement('div');
  role.textContent = user.location.city + ', ' + user.nat;
  role.style.color = 'var(--muted)';
  role.style.fontSize = '0.9rem';
  meta.appendChild(name);
  meta.appendChild(role);
  cont.appendChild(img);
  cont.appendChild(meta);
  return cont;
}

// Fetch posts (JSONPlaceholder)
fetch(API_POSTS)
  .then(r => r.json())
  .then(posts => {
    const news = document.getElementById('news');
    news.innerHTML = '';
    posts.forEach(p => news.appendChild(makeNewsItem(p)));
  })
  .catch(err => {
    console.error('Error cargando posts', err);
    document.getElementById('news').innerHTML = '<div class="card">No se pudieron cargar las noticias.</div>';
  });

// Fetch volunteers (RandomUser)
fetch(API_USERS)
  .then(r => r.json())
  .then(resp => {
    const users = resp.results || [];
    const vols = document.getElementById('vols');
    vols.innerHTML = '';
    users.forEach(u => vols.appendChild(makeVolunteer(u)));
  })
  .catch(err => {
    console.error('Error cargando usuarios', err);
    document.getElementById('vols').innerHTML = '<div class="card">No se pudieron cargar los perfiles.</div>';
  });

// Contact form demo
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Gracias — tu mensaje se ha registrado (demo).');
  e.target.reset();
});