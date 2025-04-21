const inventions = [
  {
    name: 'Post-it Note',
    inventionImage: 'postit.svg',
    creatorName: 'Spencer Silver & Art Fry',
    creatorImage: 'spencer_silver.jpg',
    info: 'Originally a failed adhesive in 3M labs, it became the world’s favorite sticky note.',
    historyImage: 'postit_history.jpg',
    history: 'After years of rejection, Post-its launched in 1980 and revolutionized office communication.'
  },
  {
    name: 'Microwave Oven',
    inventionImage: 'microwave.png',
    creatorName: 'Percy Spencer',
    creatorImage: 'percy_spencer.jpg',
    info: 'Accidentally discovered heating effect of radar waves; first commercial model in 1947.',
    historyImage: 'microwave_history.webp',
    history: 'Initially bulky and expensive, now a kitchen staple worldwide.'
  },
  {
    name: 'Silly Putty',
    inventionImage: 'silly_putty.png',
    creatorName: 'James Wright',
    creatorImage: 'james_wright.jpg',
    info: 'Developed as a rubber substitute, found fame as a playful toy.',
    historyImage: 'silly_putty_history.jpg',
    history: 'Launched in 1950, Silly Putty sold millions despite its whimsical beginnings.'
  },
  {
    name: 'Bubble Wrap',
    inventionImage: 'bubble_wrap.png',
    creatorName: 'Marc Chavannes & Al Fielding',
    creatorImage: 'marc_chavannes.jpeg',
    info: 'Initially intended as wallpaper, found purpose as packaging material.',
    historyImage: 'bubble_wrap_history.jpg',
    history: 'Patented in 1960, it became the go-to for protecting fragile items.'
  },
  {
    name: 'Play-Doh',
    inventionImage: 'playdoh.png',
    creatorName: 'Noel McVicker',
    creatorImage: 'noel_mcvicker.jpeg',
    info: 'Originally a wallpaper cleaner, turned into a beloved modeling compound.',
    historyImage: 'playdoh_history.webp',
    history: 'Rebranded in 1956, Play-Doh has inspired creativity for generations.'
  },
  {
    name: 'Super Glue',
    inventionImage: 'super_glue.png',
    creatorName: 'Harry Coover',
    creatorImage: 'harry_coover.jpg',
    info: 'Rejected for visibility, found its calling as an ultra-strong adhesive.',
    historyImage: 'super_glue_history.webp',
    history: 'Commercialized in 1958, Super Glue is now a household repair hero.'
  },
  {
    name: 'Velcro',
    inventionImage: 'velcro.png',
    creatorName: 'George de Mestral',
    creatorImage: 'george_demestral.jpg',
    info: 'Inspired by burrs on clothing, became a hook-and-loop fastening icon.',
    historyImage: 'velcro_history.webp',
    history: 'Patented in 1955, Velcro is used in everything from apparel to aerospace.'
  },
  {
    name: 'WD-40',
    inventionImage: 'wd40.svg',
    creatorName: 'Norm Larsen',
    creatorImage: 'norm_larsen.jpg',
    info: 'Formulated to prevent rust, now a multipurpose household staple.',
    historyImage: 'wd40_history.webp',
    history: 'Launched in 1953, WD-40’s versatility is legendary.'
  }
];

let currentIndex = 0;
const cardContainer = document.querySelector('.card-custom');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function renderInvention(index) {
  const inv = inventions[index];
  // Remove existing animation and reflow
  cardContainer.classList.remove('fade-in');
  void cardContainer.offsetWidth;

  cardContainer.innerHTML = `
    <img src="assets/images/inventions/${inv.inventionImage}" alt="${inv.name}" class="img-fluid rounded mb-3" style="margin-left: auto;margin-right: auto;max-height:200px" />
    <h3 id="invention-name">${inv.name}</h3>
    <div class="d-flex align-items-center mb-3">
      <img src="assets/images/inventions/${inv.creatorImage}" alt="${inv.creatorName}" class="rounded-circle me-3" style="width:60px;height:60px;" />
      <p class="mb-0 text-muted">by ${inv.creatorName}</p>
    </div>
    <img src="assets/images/inventions/${inv.historyImage}" alt="History of ${inv.name}" class="img-fluid rounded my-3 style="height:200px" />
    <p id="invention-info">${inv.info}</p>
    <p id="invention-history">${inv.history}</p>
  `;

  cardContainer.classList.add('fade-in');
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + inventions.length) % inventions.length;
  renderInvention(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % inventions.length;
  renderInvention(currentIndex);
});

// Initial render
renderInvention(currentIndex);
