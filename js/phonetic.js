// phonetic.js

// Data for phonetic examples
const phonetics = {
  A: { 
    word: 'Aisle', 
    image: 'assets/images/phonetic/aisle.jpg', 
    fact: 'The "A" in aisle is silent because of its Old French origin. An aisle is a passage between rows of seats.' 
  },
  B: { 
    word: 'Bdellium', 
    image: 'assets/images/phonetic/bdellium.jpg', 
    fact: 'The "B" is silent in this word of Greek origin. Bdellium is an aromatic gum resin similar to myrrh mentioned in the Bible.' 
  },
  C: { 
    word: 'Czar', 
    image: 'assets/images/phonetic/czar.jpg', 
    fact: 'The "C" is silent due to transliteration from Russian. Czar was the title for Russian emperors before the revolution of 1917.' 
  },
  D: { 
    word: 'Django', 
    image: 'assets/images/phonetic/django.jpg', 
    fact: 'The "D" is silent in this name of Romani origin. Django Reinhardt was a famous jazz guitarist despite having two paralyzed fingers.' 
  },
  E: { 
    word: 'Eye', 
    image: 'assets/images/phonetic/eye.jpg', 
    fact: 'The final "E" is silent in this Old English word. Human eyes can distinguish about 10 million different colors.' 
  },
  F: { 
    word: 'Fjord', 
    image: 'assets/images/phonetic/fjord.jpg', 
    fact: 'The "F" is not entirely silent but blends with the "J" in this Norwegian word. Fjords are deep, narrow sea inlets formed by glacial erosion.' 
  },
  G: { 
    word: 'Gnocchi', 
    image: 'assets/images/phonetic/gnocchi.webp', 
    fact: 'The "G" is silent in this Italian word. Gnocchi are small dumplings made from potato, semolina, or flour, typically served with sauce.' 
  },
  H: { 
    word: 'Heir', 
    image: 'assets/images/phonetic/heir.jpg', 
    fact: 'The "H" is silent due to French influence. An heir is a person legally entitled to the property or rank of another on that person\'s death.' 
  },
  I: { 
    word: 'I is not for Eye', 
    image: 'assets/images/phonetic/aye-aye.webp', 
    fact: 'I is not for Eye. We asked the pirate if he has two eyes, and he said, "aye-aye"' 
  },
  J: { 
    word: 'Jalapeno', 
    image: 'assets/images/phonetic/jalapeno.jpeg', 
    fact: 'The "J" is pronounced as "H" in this Spanish word. Jalapenos are named after Jalapa, Mexico, where they were traditionally grown.' 
  },
  K: { 
    word: 'Knife', 
    image: 'assets/images/phonetic/knife.webp', 
    fact: 'The silent K is from Old English influence. Knife originates from the Old Norse word "knifr".' 
  },
  L: { 
    word: 'Llanos', 
    image: 'assets/images/phonetic/llanos.png', 
    fact: 'The "L" is silent in this Spanish word. Llanos are the vast tropical grasslands of South America, primarily in Venezuela and Colombia.' 
  },
  M: { 
    word: 'Mnemonic', 
    image: 'assets/images/phonetic/mnemonic.png', 
    fact: 'The "M" is silent due to Greek origin. Mnemonics are memory techniques that help people remember information.' 
  },
  N: { 
    word: 'Autumn', 
    image: 'assets/images/phonetic/autumn.jpg', 
    fact: 'The "N" is silent in this Latin-derived word. Autumn is called "fall" in American English because leaves fall from trees during this season.' 
  },
  O: { 
    word: 'Ouija', 
    image: 'assets/images/phonetic/ouija.jpg', 
    fact: 'The "O" is silent in this word. A Ouija board is used in séances as a supposed means of communicating with the spirits of the dead.' 
  },
  P: { 
    word: 'Pterodactyl', 
    image: 'assets/images/phonetic/pterodactyl.jpg', 
    fact: 'The silent "P" comes from the Greek word "pteron", meaning wing. Pterodactyls were flying reptiles, not dinosaurs.' 
  },
  Q: { 
    word: 'Quinoa', 
    image: 'assets/images/phonetic/quinoa.jpg', 
    fact: 'The "Q" is not pronounced as expected in this South American word. Quinoa is a nutritious grain-like crop grown primarily for its edible seeds.' 
  },
  R: { 
    word: 'Wrong', 
    image: 'assets/images/phonetic/wrong.jpg', 
    fact: 'The "R" is silent in this Old English word. "Wrong" comes from the Old Norse "rangr," meaning crooked or awry.' 
  },
  S: { 
    word: 'Seas', 
    image: 'assets/images/phonetic/seas.jpg', 
    fact: 'The "S" in "Seas" is pronounced as "C". Seas cover about 71% of the Earth\'s surface and contain 97% of Earth\'s water.' 
  },
  T: { 
    word: 'Tsunami', 
    image: 'assets/images/phonetic/tsunami.jpg', 
    fact: 'The word comes from Japanese meaning "harbor wave" Tsunamis can travel up to 500 mph in deep water.' 
  },
  U: { 
    word: 'Unanimous', 
    image: 'assets/images/phonetic/unanimous.jpg', 
    fact: 'The first "U" in unanimous is barely pronounced in casual speech. The word comes from Latin "unanimis," meaning "of one mind."' 
  },
  V: { 
    word: 'Roman Numeral V', 
    image: 'assets/images/phonetic/roman_numeral_v.jpg', 
    fact: 'V is for Five. In Roman numerals, V represents the number 5, derived from the shape made by counting on one hand.' 
  },
  W: { 
    word: 'Wren', 
    image: 'assets/images/phonetic/wren.jpg', 
    fact: 'The "W" is nearly silent in careful pronunciation. Wrens are small, brown songbirds known for their loud, complex songs despite their tiny size.' 
  },
  X: { 
    word: 'Xylophone', 
    image: 'assets/images/phonetic/xylophone.webp', 
    fact: 'The "X" is not silent but pronounced as "Z". The word comes from Greek, with "xylo" meaning wood and "phone" meaning sound.' 
  },
  Y: { 
    word: 'Yttrium', 
    image: 'assets/images/phonetic/yttrium.jpg', 
    fact: 'The "Y" is pronounced differently than expected. Yttrium is a chemical element named after the village of Ytterby in Sweden.' 
  },
  Z: { 
    word: 'Zhivago', 
    image: 'assets/images/phonetic/zhivago.jpg', 
    fact: 'The "Z" is pronounced as "J" in this Russian name. Doctor Zhivago is a famous novel by Boris Pasternak set during the Russian Revolution.' 
  }
};

// DOM logic
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.letter-btn');
  const display = document.getElementById('phonetic-display');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const letter = btn.textContent.trim();
      const data = phonetics[letter];
      if (!data) {
        display.innerHTML = `<p>No data for "${letter}". Try another!</p>`;
        return;
      }

      // Select a random fact
      const fact = data.fact;

      // Render
      display.innerHTML = `
        <h2 class="text-center">${letter} is for <em>${data.word}</em></h2>
        <img 
          src="${data.image}" 
          alt="${data.word}" 
          class="img-fluid rounded mx-auto d-block mb-3" 
        />
        <p>${fact}</p>
      `;
      display.classList.add('fade-in');
      display.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
