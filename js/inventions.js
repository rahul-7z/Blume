const inventions = [
  {
    name: 'Post-it Note',
    inventionImage: 'postit.svg',
    creatorName: 'Spencer Silver & Art Fry',
    creatorImage: 'spencer_silver.jpg',
    info: 'Originally a failed adhesive in 3M labs, it became the world\'s favorite sticky note. Spencer Silver was attempting to create a super-strong adhesive but instead created one that was pressure-sensitive and reusable. Art Fry, a colleague at 3M, saw potential in the "low-tack" adhesive when he needed bookmarks that wouldn\'t fall out of his hymnal at church.',
    historyImage: 'postit_history.jpg',
    history: 'After years of rejection, Post-its launched in 1980 and revolutionized office communication. Initially, 3M executives didn\'t see value in the product, leading to several years of internal advocacy by Fry and Silver. A massive free sample campaign in Boise, Idaho proved the product\'s appeal, leading to national distribution and eventual global success as an indispensable organizational tool.'
  },
  {
    name: 'Microwave Oven',
    inventionImage: 'microwave.png',
    creatorName: 'Percy Spencer',
    creatorImage: 'percy_spencer.jpg',
    info: 'Accidentally discovered when Percy Spencer noticed a chocolate bar melting in his pocket while working with radar equipment at Raytheon. Spencer recognized the heating potential of microwave energy and conducted further experiments with popcorn and eggs, confirming his discovery. The first commercial model, called the "Radarange," was introduced in 1947 and stood nearly 6 feet tall, weighed 750 pounds, and cost about $5,000 (equivalent to over $65,000 today).',
    historyImage: 'microwave_history.webp',
    history: 'Initially bulky and expensive, the microwave has evolved into a kitchen staple worldwide. The first countertop domestic model wasn\'t available until 1967, costing around $500 (about $4,300 in today\'s dollars). Technological advances throughout the 1970s and 1980s dramatically reduced both size and cost while improving safety features, leading to widespread adoption that transformed how people prepare and reheat food across the globe.'
  },
  {
    name: 'Silly Putty',
    inventionImage: 'silly_putty.png',
    creatorName: 'James Wright',
    creatorImage: 'james_wright.jpg',
    info: 'Developed as a rubber substitute during World War II when Japan cut off America\'s rubber supply from Southeast Asia. James Wright, an engineer at General Electric, combined boric acid and silicone oil in an attempt to create synthetic rubber for military applications. The resulting substance could bounce higher than rubber, didn\'t collect mold, and had the unusual property of being able to pick up images from newspaper and comic pages.',
    historyImage: 'silly_putty_history.jpg',
    history: 'Launched in 1950 after toy store owner Ruth Fallgatter saw its potential as a novelty item and began selling it in clear plastic eggs. Marketing entrepreneur Peter Hodgson recognized its appeal despite initial rejection from the toy industry, borrowing $147 to buy a batch for the Easter season. The product became an overnight sensation, selling over 250,000 units in three days at Neiman Marcus, and has since sold more than 300 million units worldwide while being inducted into the National Toy Hall of Fame.'
  },
  {
    name: 'Bubble Wrap',
    inventionImage: 'bubble_wrap.png',
    creatorName: 'Marc Chavannes & Al Fielding',
    creatorImage: 'marc_chavannes.jpeg',
    info: 'Initially intended as textured wallpaper, the inventors imagined it as a trendy decorative product for modern homes. When the wallpaper idea flopped, they pivoted to marketing it as greenhouse insulation, which also failed to gain traction. Its true purpose was finally discovered when IBM needed to ship its new 1401 computer safely, establishing Bubble Wrap as revolutionary packaging material.',
    historyImage: 'bubble_wrap_history.jpg',
    history: 'Patented in 1960 by Sealed Air Corporation, the product initially struggled to find its market niche despite its innovative design. The breakthrough came in 1964 with the IBM partnership, which validated the product and opened doors to broader commercial applications. Beyond its practical uses, Bubble Wrap developed a cult following for its stress-relieving popping sensation, even leading to the establishment of Bubble Wrap Appreciation Day and numerous popping-related competitions and games.'
  },
  {
    name: 'Play-Doh',
    inventionImage: 'playdoh.png',
    creatorName: 'Noel McVicker',
    creatorImage: 'noel_mcvicker.jpeg',
    info: 'Originally formulated as a pliable wallpaper cleaner called Kutol designed to remove soot from coal-heated homes. The product faced obsolescence when cleaner heating methods became common and wallpaper cleaning was less necessary. A nursery school teacher, Kay Zufall, discovered that children loved using the non-toxic, malleable substance for art projects and suggested rebranding it as a toy.',
    historyImage: 'playdoh_history.webp',
    history: 'Rebranded in 1956 by Rainbow Crafts, Play-Doh was transformed from a dying cleaning product to a children\'s modeling compound that would become iconic. The original formula came only in off-white, but colored versions were introduced in 1957, expanding the creative possibilities for children. Hasbro acquired the brand in 1991 and has since expanded the line to include over 50 colors and numerous play sets, with more than 3 billion cans sold worldwide and a distinctive smell that has become so recognizable it was officially trademarked in 2018.'
  },
  {
    name: 'Super Glue',
    inventionImage: 'super_glue.png',
    creatorName: 'Harry Coover',
    creatorImage: 'harry_coover.jpg',
    info: 'Initially discovered during World War II while searching for transparent plastic materials for gun sights, but rejected because it stuck to everything it touched. Harry Coover rediscovered the substance (cyanoacrylate) in 1951 while working at Eastman Kodak on heat-resistant acrylate polymers for jet canopies. Its remarkable ability to form strong bonds without heat or pressure, requiring only the presence of moisture (even just the trace amounts found on most surfaces), made it uniquely valuable.',
    historyImage: 'super_glue_history.webp',
    history: 'Commercialized in 1958 under the name "Eastman #910," Super Glue gained public attention when Coover demonstrated its strength by using a single drop to lift a 275-pound assistant on the TV show "I\'ve Got a Secret." During the Vietnam War, medics used a spray version to temporarily seal soldiers\' wounds until they could reach medical facilities, saving countless lives. Today, variations of cyanoacrylate adhesives are used in everything from household repairs to medical procedures, automotive manufacturing, and forensic science for developing fingerprints.'
  },
  {
    name: 'Velcro',
    inventionImage: 'velcro.png',
    creatorName: 'George de Mestral',
    creatorImage: 'george_demestral.jpg',
    info: 'Inspired by burrs that stuck to George de Mestral\'s dog\'s fur and his own clothing during a hunting trip in the Swiss Alps in 1941. Examining the burrs under a microscope, de Mestral discovered they had tiny hooks that caught on anything with a loop, like clothing, fur, or hair. After years of development and experimentation with various materials, he created a two-sided fastening system with hooks on one side and loops on the other, mimicking nature\'s design.',
    historyImage: 'velcro_history.webp',
    history: 'Patented in 1955 after nearly 8 years of research, the name "Velcro" was created from the French words "velours" (velvet) and "crochet" (hook). The fastener gained significant prominence when NASA adopted it for space missions, helping astronauts maneuver in zero gravity environments by securing tools and keeping items from floating away. Beyond its original vision, Velcro has become ubiquitous in industries from fashion to medical devices, military applications, and everyday products, revolutionizing how we fasten objects while generating annual sales exceeding $400 million.'
  },
  {
    name: 'WD-40',
    inventionImage: 'wd40.svg',
    creatorName: 'Norm Larsen',
    creatorImage: 'norm_larsen.jpg',
    info: 'Formulated in 1953 by the Rocket Chemical Company to prevent corrosion on the Atlas missile\'s delicate surfaces and circuitry. The name stands for "Water Displacement, 40th formula," indicating it was the 40th attempt to create a successful water-displacing compound. Its unique formulation—still a trade secret today—creates a thin layer that protects metal surfaces from moisture and corrosion while also penetrating stuck parts and reducing friction.',
    historyImage: 'wd40_history.webp',
    history: 'Launched commercially in 1958 after employees secretly took bottles home for household uses, proving its versatility beyond aerospace applications. In 1969, the company was renamed after its only product, signifying the transformation from an industrial chemical to a consumer brand. WD-40 has achieved iconic status with over 80% brand recognition in American households, is sold in more than 176 countries with 80% of professionals reporting they use it at work, and has inspired such loyalty that a fan club called the "WD-40 Fan Club" boasts over 100,000 members who share unusual uses for the product, which now number more than 2,000.'
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
