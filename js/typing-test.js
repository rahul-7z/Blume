document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const startTestBtn = document.getElementById('start-test');
    const restartTestBtn = document.getElementById('restart-test');
    const tryAgainBtn = document.getElementById('try-again');
    const difficultyBtns = document.querySelectorAll('.difficulty-btn');
    const preTestDiv = document.getElementById('pre-test');
    const activeTestDiv = document.getElementById('active-test');
    const resultsDiv = document.getElementById('results');
    const testTextElement = document.getElementById('test-text');
    const userInputElement = document.getElementById('user-input');
    const timerElement = document.getElementById('timer');
    const progressBar = document.getElementById('progress-bar');
    const wpmResult = document.getElementById('wpm-result');
    const accuracyResult = document.getElementById('accuracy-result');
    const timeResult = document.getElementById('time-result');
    const funMessage = document.getElementById('fun-message');
  
    // Test state
    let testState = {
      difficulty: 'medium',
      startTime: null,
      endTime: null,
      timerInterval: null,
      seconds: 0,
      testText: '',
      isTestActive: false,
      timerStarted: false,
      wordsTyped: 0,
      errors: 0
    };
  
    // Test sentences by difficulty
    const testSentences = {
      easy: [
        "the quick brown fox jumps over the lazy dog",
        "a journey of a thousand miles begins with a single step",
        "all that glitters is not gold but it's still pretty shiny",
        "do not count your chickens before they hatch especially if you don't have chickens",
        "early bird gets the worm but the second mouse gets the cheese"
      ],
      medium: [
        "Pack my box with five dozen liquor jugs. How quickly daft jumping zebras vex!",
        "Amazingly few discotheques provide jukeboxes. Crazy Fredrick bought many very exquisite opal jewels.",
        "The five boxing wizards jump quickly. The job requires extra pluck and zeal from every young wage earner.",
        "We promptly judged antique ivory buckles for the next prize. Sphinx of black quartz, judge my vow!",
        "How vexingly quick daft zebras jump! The jay, pig, fox, zebra, and my wolves quack!"
      ],
      hard: [
        "Jaded zombies acted quaintly but kept driving their oxen forward. Six big devils from Japan quickly forgot how to waltz.",
        "Crazy Fredrick bought many very exquisite opal jewels and paid for them with a quick zephyr from the west.",
        "The job requires extra pluck and zeal from every young wage earner. The five boxing wizards jump quickly to puzzle Sphinx.",
        "My faxed joke won a pager in the cable TV quiz show. Sphinx of black quartz, judge my vow with the quick zephyr wave.",
        "Waltz, bad nymph, for quick jigs vex! The explorer was frozen in his big kayak just after making queer discoveries."
      ]
    };
  
    // Fun messages based on WPM
    const funMessages = [
      { min: 0, max: 20, message: "Are you typing with oven mitts on? 🧤" },
      { min: 21, max: 40, message: "Slow and steady... might not win this race. 🐢" },
      { min: 41, max: 60, message: "Not bad! Your fingers are warming up! 👋" },
      { min: 61, max: 80, message: "Now we're cooking! Your keyboard is heating up! 🔥" },
      { min: 81, max: 100, message: "Impressive! Your fingers are like lightning! ⚡" },
      { min: 101, max: Infinity, message: "Are you even human?! The keyboard is melting! 🤖" }
    ];
  
    // Event listeners
    difficultyBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        difficultyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        testState.difficulty = btn.dataset.difficulty;
      });
    });
  
    startTestBtn.addEventListener('click', startTest);
    restartTestBtn.addEventListener('click', () => restartTest(false)); // Don't go back to difficulty selection
    tryAgainBtn.addEventListener('click', () => restartTest(true)); // Return to difficulty selection
    userInputElement.addEventListener('input', handleInput);
  
    // Initialize with medium difficulty selected
    document.querySelector('[data-difficulty="medium"]').classList.add('active');
  
    // Functions
    function startTest() {
      preTestDiv.classList.add('d-none');
      activeTestDiv.classList.remove('d-none');
      resultsDiv.classList.add('d-none');
      
      // Get a random sentence for the selected difficulty
      const sentences = testSentences[testState.difficulty];
      testState.testText = sentences[Math.floor(Math.random() * sentences.length)];
      
      // Display the test text
      testTextElement.textContent = testState.testText;
      
      // Reset timer but don't start it yet
      testState.seconds = 0;
      timerElement.textContent = '0';
      testState.timerStarted = false;
      testState.isTestActive = true;
      
      // Clear any existing timer
      if (testState.timerInterval) {
        clearInterval(testState.timerInterval);
        testState.timerInterval = null;
      }
      
      // Focus on the input field
      userInputElement.value = '';
      userInputElement.focus();
      
      // Reset progress bar
      progressBar.style.width = '0%';
    }
  
    function handleInput(e) {
      if (!testState.isTestActive) return;
      
      // Start timer on first keystroke
      if (!testState.timerStarted && userInputElement.value.length > 0) {
        testState.startTime = new Date();
        testState.timerStarted = true;
        testState.timerInterval = setInterval(updateTimer, 1000);
      }
      
      updateProgress();
    }
  
    function updateTimer() {
      testState.seconds++;
      timerElement.textContent = testState.seconds;
    }
  
    function updateProgress() {
      const userInput = userInputElement.value;
      const testText = testState.testText;
      
      // Update progress bar
      const progress = Math.min(100, Math.floor((userInput.length / testText.length) * 100));
      progressBar.style.width = `${progress}%`;
      
      // Highlight characters in the test text
      let highlightedText = '';
      for (let i = 0; i < testText.length; i++) {
        if (i < userInput.length) {
          if (userInput[i] === testText[i]) {
            highlightedText += `<span style="color: green;">${testText[i]}</span>`;
          } else {
            highlightedText += `<span style="color: red;">${testText[i]}</span>`;
          }
        } else {
          highlightedText += testText[i];
        }
      }
      testTextElement.innerHTML = highlightedText;
      
      // Check if test is complete
      if (userInput.length >= testText.length) {
        completeTest();
      }
    }
  
    function completeTest() {
      if (testState.timerInterval) {
        clearInterval(testState.timerInterval);
        testState.timerInterval = null;
      }
      
      testState.endTime = new Date();
      testState.isTestActive = false;
      
      // Calculate results
      const timeElapsed = testState.timerStarted ? 
                           (testState.endTime - testState.startTime) / 1000 : 0; // in seconds
      const userInput = userInputElement.value;
      const testText = testState.testText;
      
      // Calculate WPM: (characters / 5) / minutes
      // We use 5 characters as average word length
      const minutes = timeElapsed / 60 || 0.01; // Avoid division by zero
      const wordCount = Math.floor((userInput.length / 5));
      const wpm = Math.round(wordCount / minutes);
      
      // Calculate accuracy
      let correctChars = 0;
      for (let i = 0; i < Math.min(userInput.length, testText.length); i++) {
        if (userInput[i] === testText[i]) {
          correctChars++;
        }
      }
      const accuracy = Math.round((correctChars / testText.length) * 100);
      
      // Display results
      wpmResult.textContent = wpm;
      accuracyResult.textContent = `${accuracy}%`;
      timeResult.textContent = Math.round(timeElapsed);
      
      // Get fun message based on WPM
      const message = funMessages.find(m => wpm >= m.min && wpm <= m.max).message;
      funMessage.textContent = message;
      
      // Show results div
      activeTestDiv.classList.add('d-none');
      resultsDiv.classList.remove('d-none');
    }
  
    function restartTest(goToSelection) {
      // Clear any running timer
      if (testState.timerInterval) {
        clearInterval(testState.timerInterval);
        testState.timerInterval = null;
      }
      
      testState.isTestActive = false;
      testState.timerStarted = false;
      userInputElement.value = '';
      
      if (goToSelection) {
        // Return to difficulty selection
        preTestDiv.classList.remove('d-none');
        activeTestDiv.classList.add('d-none');
        resultsDiv.classList.add('d-none');
      } else {
        // Just restart the current test
        startTest();
      }
    }
  });
