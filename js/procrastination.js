// Procrastination Calculator Logic

// Time units in minutes
const timeUnits = {
  barbie: 114, // Barbie movie length in minutes
  lotrTrilogy: 558, // Lord of the Rings trilogy extended editions
  bobRoss: 30, // Average Bob Ross painting episode
  moonTravel: 4320, // Time to travel to the moon (3 days)
  marathonEpisodes: 22, // Average TV episode length
  bananaPeels: 0.5, // Time to peel a banana
  scrollTikTok: 10, // Average TikTok doom scrolling session
  boilWater: 5, // Time to boil water
  bingeNetflix: 240, // Average Netflix binge session (4 hours)
  readHarryPotter: 1020 // Time to read first Harry Potter book
};

// Easter egg messages based on procrastination time
const easterEggs = [
  { threshold: 24 * 60, message: "A whole day? Even professional procrastinators are impressed!" },
  { threshold: 7 * 24 * 60, message: "A week of procrastination? You could've learned the basics of a new language!" },
  { threshold: 30 * 24 * 60, message: "A MONTH?! You could have written a short novel in that time!" },
  { threshold: 365 * 24 * 60, message: "A YEAR?! You're not a procrastinator, you're an avoidance expert!" }
];

function calculateProcrastination(taskName, delayInHours) {
  // Convert hours to minutes
  const delayInMinutes = delayInHours * 60;
  
  // Calculate absurd units
  const result = {
    taskName: taskName,
    delayInHours: delayInHours,
    absurdUnits: {}
  };
  
  // Calculate for each absurd unit
  Object.entries(timeUnits).forEach(([unit, minutes]) => {
    result.absurdUnits[unit] = (delayInMinutes / minutes).toFixed(1);
  });
  
  // Check for easter eggs
  result.easterEgg = null;
  for (let i = easterEggs.length - 1; i >= 0; i--) {
    if (delayInMinutes >= easterEggs[i].threshold) {
      result.easterEgg = easterEggs[i].message;
      break;
    }
  }
  
  return result;
}

function displayResults(result) {
  const resultDiv = document.getElementById('procrastination-results');
  resultDiv.innerHTML = '';
  
  // Create result heading
  const heading = document.createElement('h2');
  heading.textContent = `You've been procrastinating on "${result.taskName}" for ${result.delayInHours} hours!`;
  resultDiv.appendChild(heading);
  
  // Display absurd units
  const unitsList = document.createElement('ul');
  unitsList.className = 'absurd-units';
  
  // Format each absurd unit with fun text
  const unitTexts = {
    barbie: `You could have watched "Barbie" ${result.absurdUnits.barbie} times`,
    lotrTrilogy: `You could have watched the entire Lord of the Rings trilogy ${result.absurdUnits.lotrTrilogy} times`,
    bobRoss: `You could have completed ${result.absurdUnits.bobRoss} Bob Ross paintings`,
    moonTravel: `You could have traveled to the moon ${result.absurdUnits.moonTravel} times`,
    marathonEpisodes: `You could have watched ${result.absurdUnits.marathonEpisodes} episodes of your favorite show`,
    bananaPeels: `You could have peeled ${result.absurdUnits.bananaPeels} bananas`,
    scrollTikTok: `You could have had ${result.absurdUnits.scrollTikTok} TikTok doom scrolling sessions`,
    boilWater: `You could have boiled water ${result.absurdUnits.boilWater} times`,
    bingeNetflix: `You could have had ${result.absurdUnits.bingeNetflix} Netflix binge sessions`,
    readHarryPotter: `You could have read Harry Potter ${result.absurdUnits.readHarryPotter} times`
  };
  
  // Add each unit to the list
  Object.entries(unitTexts).forEach(([unit, text]) => {
    const listItem = document.createElement('li');
    listItem.className = `unit ${unit}`;
    listItem.textContent = text;
    unitsList.appendChild(listItem);
  });
  
  resultDiv.appendChild(unitsList);
  
  // Display easter egg if applicable
  if (result.easterEgg) {
    const easterEgg = document.createElement('p');
    easterEgg.className = 'easter-egg';
    easterEgg.textContent = result.easterEgg;
    resultDiv.appendChild(easterEgg);

    // Add special animation for easter eggs
    easterEgg.classList.add('sparkle');
  }
  
  // Show the results with animation
  resultDiv.classList.add('fade-in');
  
  // Scroll to results
  resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Event listener for the form submission
document.addEventListener('DOMContentLoaded', function() {
  const procrastinationForm = document.getElementById('procrastination-form');
  
  procrastinationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskName = document.getElementById('task-name').value;
    const delayHours = parseFloat(document.getElementById('delay-hours').value);
    
    if (!taskName || isNaN(delayHours) || delayHours <= 0) {
      alert('Please enter a valid task name and delay time!');
      return;
    }
    
    const result = calculateProcrastination(taskName, delayHours);
    displayResults(result);
  });
});