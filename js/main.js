document.addEventListener('DOMContentLoaded', () => {
  const factContainer = document.getElementById('fun-fact');

  fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en')
    .then(response => response.json())
    .then(data => {
      factContainer.innerText = data.text;
    })
    .catch(error => {
      factContainer.innerText = 'Oops! Failed to load a fun fact.';
      console.error(error);
    });
});
