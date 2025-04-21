document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const timePeriodSelect = document.getElementById('timePeriod');
    const timeMachineBtn = document.getElementById('timeMachineBtn');
    const timePortal = document.getElementById('timePortal');
    const eventYear = document.getElementById('eventYear');
    const eventDescription = document.getElementById('eventDescription');
    const eventCategory = document.getElementById('eventCategory');
    const eventImage = document.getElementById('eventImage');
    const travelAgainBtn = document.getElementById('travelAgainBtn');
    const travelTimeline = document.getElementById('travelTimeline');
    
    // Time travel history
    let travelHistory = [];
    
    // Historical events database by time period
    const historicalEvents = {
      ancient: [
        { 
          year: '3000 BCE', 
          event: 'First pyramids were built in Egypt', 
          category: 'Architecture',
          image: 'assets/images/time-travel/egyptian-pyramids.jpg'
        },
        { 
          year: '2700 BCE', 
          event: 'The first written recipe was recorded in Mesopotamia', 
          category: 'Cuisine',
          image: 'assets/images/time-travel/mesopotamian-recipe.jpg'
        },
        { 
          year: '1600 BCE', 
          event: 'The first evidence of mathematical algebra appeared in Egypt and Babylon', 
          category: 'Science',
          image: 'assets/images/time-travel/egyptian-math.jpg'
        },
        { 
          year: '776 BCE', 
          event: 'The first Olympic Games were held in Olympia, Greece', 
          category: 'Sports',
          image: 'assets/images/time-travel/ancient-olympics.jpg'
        },
        { 
          year: '550 BCE', 
          event: 'The Persian Empire was founded by Cyrus the Great', 
          category: 'Politics',
          image: 'assets/images/time-travel/cyrus-great.jpg'
        },
        { 
          year: '330 BCE', 
          event: 'Alexander the Great conquered Persia and created one of history\'s largest empires', 
          category: 'Warfare',
          image: 'assets/images/time-travel/alexander-great.jpg'
        },
        { 
          year: '45 BCE', 
          event: 'Julius Caesar implemented the Julian calendar', 
          category: 'Science',
          image: 'assets/images/time-travel/julian-calendar.jpg'
        },
        { 
          year: '79 CE', 
          event: 'Mount Vesuvius erupted, burying Pompeii and Herculaneum', 
          category: 'Disaster',
          image: 'assets/images/time-travel/vesuvius-eruption.jpg'
        },
        { 
          year: '180 CE', 
          event: 'Marcus Aurelius, Roman Emperor and philosopher, died', 
          category: 'Philosophy',
          image: 'assets/images/time-travel/marcus-aurelius.jpg'
        },
        { 
          year: '455 CE', 
          event: 'The Vandals sacked Rome', 
          category: 'Warfare',
          image: 'assets/images/time-travel/vandals-rome.jpg'
        }
      ],
      medieval: [
        { 
          year: '527 CE', 
          event: 'Byzantine Emperor Justinian I came to power', 
          category: 'Politics',
          image: 'assets/images/time-travel/justinian.jpg'
        },
        { 
          year: '632 CE', 
          event: 'Muhammad, founder of Islam, died in Medina', 
          category: 'Religion',
          image: 'assets/images/time-travel/medina.jpg'
        },
        { 
          year: '793 CE', 
          event: 'Vikings began their raids on Europe with the attack on Lindisfarne', 
          category: 'Warfare',
          image: 'assets/images/time-travel/viking-raid.jpg'
        },
        { 
          year: '1066 CE', 
          event: 'William the Conqueror invaded England, winning the Battle of Hastings', 
          category: 'Warfare',
          image: 'assets/images/time-travel/battle-hastings.jpg'
        },
        { 
          year: '1206 CE', 
          event: 'Genghis Khan was proclaimed ruler of all Mongol tribes', 
          category: 'Politics',
          image: 'assets/images/time-travel/genghis-khan.jpg'
        },
        { 
          year: '1271 CE', 
          event: 'Marco Polo began his journey to China', 
          category: 'Exploration',
          image: 'assets/images/time-travel/marco-polo.jpg'
        },
        { 
          year: '1347 CE', 
          event: 'The Black Death began spreading through Europe', 
          category: 'Disease',
          image: 'assets/images/time-travel/black-death.jpg'
        },
        { 
          year: '1415 CE', 
          event: 'The Battle of Agincourt during the Hundred Years\' War', 
          category: 'Warfare',
          image: 'assets/images/time-travel/agincourt.jpg'
        },
        { 
          year: '1440 CE', 
          event: 'Johannes Gutenberg invented the printing press', 
          category: 'Technology',
          image: 'assets/images/time-travel/gutenberg-press.jpg'
        },
        { 
          year: '1492 CE', 
          event: 'Christopher Columbus reached the Americas', 
          category: 'Exploration',
          image: 'assets/images/time-travel/columbus.jpg'
        }
      ],
      modern: [
        { 
          year: '1517', 
          event: 'Martin Luther posted his Ninety-five Theses, starting the Protestant Reformation', 
          category: 'Religion',
          image: 'assets/images/time-travel/luther-theses.jpg'
        },
        { 
          year: '1605', 
          event: 'Miguel de Cervantes published "Don Quixote"', 
          category: 'Literature',
          image: 'assets/images/time-travel/don-quixote.jpg'
        },
        { 
          year: '1687', 
          event: 'Isaac Newton published "Principia Mathematica"', 
          category: 'Science',
          image: 'assets/images/time-travel/newton-principia.jpg'
        },
        { 
          year: '1776', 
          event: 'The United States Declaration of Independence was adopted', 
          category: 'Politics',
          image: 'assets/images/time-travel/declaration-independence.jpg'
        },
        { 
          year: '1789', 
          event: 'The French Revolution began with the storming of the Bastille', 
          category: 'Politics',
          image: 'assets/images/time-travel/bastille.jpg'
        },
        { 
          year: '1804', 
          event: 'Napoleon Bonaparte crowned himself Emperor of France', 
          category: 'Politics',
          image: 'assets/images/time-travel/napoleon-coronation.jpg'
        },
        { 
          year: '1819', 
          event: 'Mary Shelley published "Frankenstein"', 
          category: 'Literature',
          image: 'assets/images/time-travel/frankenstein.jpg'
        },
        { 
          year: '1859', 
          event: 'Charles Darwin published "On the Origin of Species"', 
          category: 'Science',
          image: 'assets/images/time-travel/darwin-origin.jpg'
        },
        { 
          year: '1876', 
          event: 'Alexander Graham Bell patented the telephone', 
          category: 'Technology',
          image: 'assets/images/time-travel/bell-telephone.jpg'
        },
        { 
          year: '1896', 
          event: 'The first modern Olympic Games were held in Athens, Greece', 
          category: 'Sports',
          image: 'assets/images/time-travel/modern-olympics.jpg'
        }
      ],
      recent: [
        { 
          year: '1903', 
          event: 'The Wright brothers made their first powered airplane flight', 
          category: 'Technology',
          image: 'assets/images/time-travel/wright-brothers.png'
        },
        { 
          year: '1912', 
          event: 'The Titanic sank on its maiden voyage', 
          category: 'Disaster',
          image: 'assets/images/time-travel/titanic.jpeg'
        },
        { 
          year: '1928', 
          event: 'Alexander Fleming discovered penicillin', 
          category: 'Medicine',
          image: 'assets/images/time-travel/fleming-penicillin.webp'
        },
        { 
          year: '1939', 
          event: 'World War II began with Germany\'s invasion of Poland', 
          category: 'Warfare',
          image: 'assets/images/time-travel/wwii-begins.jpg'
        },
        { 
          year: '1945', 
          event: 'The United Nations was established', 
          category: 'Politics',
          image: 'assets/images/time-travel/united-nations.jpg'
        },
        { 
          year: '1953', 
          event: 'James Watson and Francis Crick discovered the structure of DNA', 
          category: 'Science',
          image: 'assets/images/time-travel/dna-structure.jpg'
        },
        { 
          year: '1969', 
          event: 'Neil Armstrong became the first person to walk on the Moon', 
          category: 'Space',
          image: 'assets/images/time-travel/moon-landing.jpg'
        },
        { 
          year: '1971', 
          event: 'The first email was sent by Ray Tomlinson', 
          category: 'Technology',
          image: 'assets/images/time-travel/first-email.png'
        },
        { 
          year: '1989', 
          event: 'The Berlin Wall fell, signaling the end of the Cold War', 
          category: 'Politics',
          image: 'assets/images/time-travel/berlin-wall.webp'
        },
        { 
          year: '1990', 
          event: 'The World Wide Web was invented by Tim Berners-Lee', 
          category: 'Technology',
          image: 'assets/images/time-travel/www-invention.jpg'
        }
      ],
      contemporary: [
        { 
          year: '2001', 
          event: 'Wikipedia was launched', 
          category: 'Technology',
          image: 'assets/images/time-travel/wikipedia.jpg'
        },
        { 
          year: '2003', 
          event: 'The Human Genome Project was completed', 
          category: 'Science',
          image: 'assets/images/time-travel/human-genome.jpg'
        },
        { 
          year: '2007', 
          event: 'Apple introduced the first iPhone', 
          category: 'Technology',
          image: 'assets/images/time-travel/iphone.webp'
        },
        { 
          year: '2008', 
          event: 'The Large Hadron Collider was completed', 
          category: 'Science',
          image: 'assets/images/time-travel/large-hadron-collider.jpg'
        },
        { 
          year: '2010', 
          event: 'The first iPad was released', 
          category: 'Technology',
          image: 'assets/images/time-travel/ipad.jpg'
        },
        { 
          year: '2012', 
          event: 'The Curiosity rover landed on Mars', 
          category: 'Space',
          image: 'assets/images/time-travel/curiosity-rover.jpg'
        },
        { 
          year: '2016', 
          event: 'Gravitational waves were directly detected for the first time', 
          category: 'Science',
          image: 'assets/images/time-travel/gravitational-waves.jpg'
        },
        { 
          year: '2019', 
          event: 'The first image of a black hole was published', 
          category: 'Science',
          image: 'assets/images/time-travel/black-hole-image.png'
        },
        { 
          year: '2020', 
          event: 'The COVID-19 pandemic caused global lockdowns', 
          category: 'Disease',
          image: 'assets/images/time-travel/covid-pandemic.jpg'
        }
      ]
    };
  
    // Fallback image if the specific image isn't found
    const fallbackImage = 'assets/images/time-travel/fallback-history.jpg';
  
    // Event handlers
    timeMachineBtn.addEventListener('click', travelThroughTime);
    travelAgainBtn.addEventListener('click', travelThroughTime);
  
    // Function to preload images for smoother experience
    function preloadImages() {
      // Create an array of all image paths
      let allImages = [];
      
      // Loop through all time periods and events to collect image paths
      Object.keys(historicalEvents).forEach(period => {
        historicalEvents[period].forEach(event => {
          allImages.push(event.image);
        });
      });
      
      // Add fallback image
      allImages.push(fallbackImage);
      
      // Preload each image
      allImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  
    // Function to travel through time
    function travelThroughTime() {
      // Add a loading animation
      timePortal.classList.remove('d-none');
      eventYear.textContent = 'Traveling...';
      eventDescription.textContent = 'The time machine is calculating temporal coordinates...';
      eventCategory.textContent = 'Loading';
      
      // Simulate time travel delay (for dramatic effect)
      setTimeout(() => {
        const selectedPeriod = timePeriodSelect.value;
        let event;
        
        // Select a random event from either the chosen period or any period
        if (selectedPeriod === 'all') {
          // Combine all time periods and pick a random event
          const allPeriods = ['ancient', 'medieval', 'modern', 'recent', 'contemporary'];
          const randomPeriod = allPeriods[Math.floor(Math.random() * allPeriods.length)];
          const periodEvents = historicalEvents[randomPeriod];
          event = periodEvents[Math.floor(Math.random() * periodEvents.length)];
        } else {
          // Pick from the selected time period
          const periodEvents = historicalEvents[selectedPeriod];
          event = periodEvents[Math.floor(Math.random() * periodEvents.length)];
        }
        
        // Update the time portal with event information
        eventYear.textContent = event.year;
        eventDescription.textContent = event.event;
        eventCategory.textContent = event.category;
        
        // Set image with error handling
        eventImage.onerror = function() {
          this.src = fallbackImage;
        };
        eventImage.src = event.image;
        
        // Apply reveal animation
        timePortal.classList.add('fade-in');
        
      }, 1000); // Delay for dramatic effect
      
      // Scroll to the time portal
      timePortal.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Add some ambient effects
    function addAmbientEffects() {
      // Add subtle background animation
      const main = document.querySelector('main');
      
      // Random star effect in the background
      for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'time-star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        main.appendChild(star);
      }
    }
    
    // Add CSS for stars animation and image transitions
    function addExtraStyles() {
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        .time-star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: #ffb347;
          border-radius: 50%;
          opacity: 0;
          z-index: -1;
          animation: twinkle 5s infinite;
        }
        
        @keyframes twinkle {
          0% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
          100% { opacity: 0; transform: scale(1); }
        }
        
        #timePortal {
          transition: all 0.5s ease-in-out;
        }
        
        #timePortal:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 24px rgba(255, 179, 71, 0.2);
        }
        
        #eventYear {
          color: #ff6b6b;
          transition: all 0.3s ease;
        }
        
        #eventImage {
          transition: transform 0.5s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          border: 4px solid white;
        }
        
        #eventImage:hover {
          transform: scale(1.05);
        }
        
        #travelTimeline .list-group-item {
          transition: all 0.3s ease;
          border-left: 4px solid transparent;
        }
        
        #travelTimeline .list-group-item:hover {
          border-left: 4px solid #ffb347;
          background-color: #fff9f1;
        }
        
        .time-image {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }
        
        @keyframes shine {
          to {
            left: 100%;
          }
        }
      `;
      document.head.appendChild(styleElement);
    }
    
    // Initialize the page
    function init() {
      addExtraStyles();
      addAmbientEffects();
      preloadImages();
    }
    
    // Run initialization
    init();
  });