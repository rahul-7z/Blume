document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const translateBtn = document.getElementById('translateBtn');
    const translationResult = document.getElementById('translationResult');
    const onlyEmojiCheck = document.getElementById('onlyEmojiCheck');
    const translationHistory = document.getElementById('translationHistory');
    const copyBtn = document.getElementById('copyBtn');
    const shareBtn = document.getElementById('shareBtn');
    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    
    window.emojilib = null;
  
    fetch('assets/emojis.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        window.emojilib = data;
        console.log('Emoji data loaded successfully!');
        translateBtn.disabled = false;
        translateBtn.innerHTML = '<span class="me-2">Translate to Emoji</span>✨';
      })
      .catch(error => {
        console.error('Error loading emoji data:', error);
        translationResult.innerHTML = 'Error loading emoji data. Please refresh the page and try again.';
        translateBtn.disabled = true;
        translateBtn.innerHTML = 'Failed to load emoji data 😢';
      });
  
    translateBtn.disabled = true;
    translateBtn.innerHTML = '<span class="me-2">Loading emoji data...</span><div class="spinner-border spinner-border-sm" role="status"></div>';
  
    loadTranslationHistory();
  
    translateBtn.addEventListener('click', translateText);
    copyBtn.addEventListener('click', copyTranslation);
    shareBtn.addEventListener('click', shareTranslation);
    clearHistoryBtn.addEventListener('click', clearHistory);
  
    function translateText() {
      const text = inputText.value.trim();
      if (!text) {
        translationResult.innerHTML = 'Please enter some text to translate! 📝';
        return;
      }
  
      if (!window.emojilib) {
        translationResult.innerHTML = 'Emoji data is still loading. Please wait a moment and try again.';
        return;
      }
  
      const onlyEmoji = onlyEmojiCheck.checked;
      const translatedText = translate(text, onlyEmoji);
      
      translationResult.innerHTML = translatedText || 'No translation available 🤔';
      
      addToHistory(text, translatedText);
      
      translationResult.classList.add('translation-flash');
      setTimeout(() => {
        translationResult.classList.remove('translation-flash');
      }, 500);
    }
  
    function copyTranslation() {
      const text = translationResult.innerText;
      if (text && text !== 'Your translation will appear here 👀') {
        navigator.clipboard.writeText(text)
          .then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = 'Copied! ✅';
            setTimeout(() => {
              copyBtn.innerHTML = originalText;
            }, 2000);
          })
          .catch(err => {
            console.error('Could not copy text: ', err);
          });
      }
    }
  
    function shareTranslation() {
      const text = translationResult.innerText;
      if (text && text !== 'Your translation will appear here 👀') {
        if (navigator.share) {
          navigator.share({
            title: 'My Emoji Translation',
            text: text
          })
          .catch(err => {
            console.error('Share failed:', err);
          });
        } else {
          navigator.clipboard.writeText(text)
            .then(() => {
              const originalText = shareBtn.innerHTML;
              shareBtn.innerHTML = 'Copied for sharing! ✅';
              setTimeout(() => {
                shareBtn.innerHTML = originalText;
              }, 2000);
            });
        }
      }
    }

    function addToHistory(original, translated) {
      const historyItem = document.createElement('li');
      historyItem.className = 'list-group-item slide-up';
      
      historyItem.innerHTML = `
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <small class="text-muted">${original}</small>
            <div class="mt-1 fs-5">${translated}</div>
          </div>
          <button class="btn btn-sm btn-outline-secondary copy-history-btn" data-translation="${translated.replace(/"/g, '&quot;')}">
            📋
          </button>
        </div>
      `;

      const copyHistoryBtn = historyItem.querySelector('.copy-history-btn');
      copyHistoryBtn.addEventListener('click', function() {
        const textToCopy = this.getAttribute('data-translation');
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            this.textContent = '✅';
            setTimeout(() => {
              this.textContent = '📋';
            }, 2000);
          });
      });
      
      if (translationHistory.firstChild) {
        translationHistory.insertBefore(historyItem, translationHistory.firstChild);
      } else {
        translationHistory.appendChild(historyItem);
      }
      
      const noHistoryMsg = document.querySelector('#historyContainer > .text-center.text-muted');
      if (noHistoryMsg) {
        noHistoryMsg.remove();
      }
      
      saveTranslationHistory();
    }
  
    function saveTranslationHistory() {
      const historyItems = translationHistory.querySelectorAll('li');
      const history = [];
      
      historyItems.forEach(item => {
        const original = item.querySelector('small.text-muted').innerText;
        const translated = item.querySelector('.mt-1.fs-5').innerText;
        history.push({ original, translated });
      });
      
      localStorage.setItem('emojiTranslationHistory', JSON.stringify(history));
    }

    function loadTranslationHistory() {
      const history = JSON.parse(localStorage.getItem('emojiTranslationHistory')) || [];
      
      if (history.length > 0) {
        const noHistoryMsg = document.querySelector('#historyContainer > .text-center.text-muted');
        if (noHistoryMsg) {
          noHistoryMsg.remove();
        }
        
        history.forEach(item => {
          const historyItem = document.createElement('li');
          historyItem.className = 'list-group-item';
          
          historyItem.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-muted">${item.original}</small>
                <div class="mt-1 fs-5">${item.translated}</div>
              </div>
              <button class="btn btn-sm btn-outline-secondary copy-history-btn" data-translation="${item.translated.replace(/"/g, '&quot;')}">
                📋
              </button>
            </div>
          `;

          const copyHistoryBtn = historyItem.querySelector('.copy-history-btn');
          copyHistoryBtn.addEventListener('click', function() {
            const textToCopy = this.getAttribute('data-translation');
            navigator.clipboard.writeText(textToCopy)
              .then(() => {
                this.textContent = '✅';
                setTimeout(() => {
                  this.textContent = '📋';
                }, 2000);
              });
          });
          
          translationHistory.appendChild(historyItem);
        });
      }
    }
  
    function clearHistory() {
      translationHistory.innerHTML = '';
      
      const noHistoryMsg = document.createElement('p');
      noHistoryMsg.className = 'text-center text-muted';
      noHistoryMsg.textContent = 'Your translation history will appear here...';
      document.getElementById('historyContainer').appendChild(noHistoryMsg);
      
      localStorage.removeItem('emojiTranslationHistory');
      
      const originalText = clearHistoryBtn.textContent;
      clearHistoryBtn.textContent = 'History Cleared! ✅';
      setTimeout(() => {
        clearHistoryBtn.textContent = originalText;
      }, 2000);
    }
  
    const SYMBOLS = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~';
  
    /**
     * Returns true for something that's already an emoji like 🤖.
     * @param {String} word The word to be translated
     * @returns {Bool}
     */
    function isMaybeAlreadyAnEmoji(word) {
      let ranges = [
          '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
          '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
          '\ud83d[\ude80-\udeff]' // U+1F680 to U+1F6FF
      ];
      return word.match(ranges.join('|')) !== null;
    }
  
    /**
     * Returns the list of all emoji translations of an english word.
     * @param {String} word The word to be translated
     * @returns {Array} The list of emoji translations or '' if none exist.
     */
    function getAllEmojiForWord(originalWord) {
      if (!window.emojilib) return '';
      
      let word = originalWord.trim().toLowerCase();
  
      if (!word || word === '' || word === 'a' || word === 'it' || word === 'is')
        return '';
  
      // Maybe this is a plural word but the word is the singular?
      // Don't do it for two letter words since "as" would become "a" etc.
      let maybeSingular = '';
      if (word.length > 2 && word[word.length - 1] == 's') {
        maybeSingular = word.slice(0, word.length - 1);
      }
  
      // Maybe this is a singular word but the word is the plural?
      // Don't do this for single letter since that will pluralize crazy things.
      let maybePlural = (word.length == 1) ? '' : word + 's';
  
      let maybeVerbedSimple = '';
      let maybeVerbedVowel = '';
      let maybeVerbedDoubled  = '';
  
      if (word.indexOf('ing') !== -1) {
        let verb = word.substr(0, word.length - 3);
        // eating -> eat
        maybeVerbedSimple = verb;
        // dancing -> dance
        maybeVerbedVowel = verb + 'e';
        // running -> run
        maybeVerbedDoubled = verb.substr(0, verb.length - 1);
      }
  
      // Go through all the things and find the first one that matches.
      let useful = [];
  
      // If this is already an emoji, don't try to translate it.
      if (isMaybeAlreadyAnEmoji(word)) {
        useful.push(word);
        return useful;
      }
  
      // If it's "i" or "i", add some faces to it.
      if (word === 'i' || word === 'you') {
        useful.push('😀');
        useful.push('😊');
      } else if (word === 'she'){
        useful.push('💁');
      } else if (word === 'he'){
        useful.push('💁‍♂️');
      } else if (word === 'we' || word === 'they') {
        useful.push('👩‍👩‍👦‍👦');
      } else if (word === 'am' || word === 'is' || word === 'are') {
        useful.push('👉');
      } else if (word === 'thanks') {
        useful.push('🙌');
      }
  
      for (let emoji in window.emojilib) {
        let words = window.emojilib[emoji].keywords;
        // Check for matches
        if (emoji == word || (emoji == word + '_face') ||
            emoji == maybeSingular || emoji == maybePlural ||
            emoji == maybeVerbedSimple || emoji == maybeVerbedVowel || emoji == maybeVerbedDoubled ||
            (words && words.indexOf(word) >= 0) ||
            (words && words.indexOf(maybeSingular) >= 0) ||
            (words && words.indexOf(maybePlural) >= 0) ||
            (words && words.indexOf(maybeVerbedSimple) >= 0) ||
            (words && words.indexOf(maybeVerbedVowel) >= 0) ||
            (words && words.indexOf(maybeVerbedDoubled) >= 0)) {
          // If it's a two letter word that got translated to a flag, it's 99% of the
          // time incorrect, so stop doing that.
          if (!(word.length <= 3 && window.emojilib[emoji].category == 'flags')) {
            useful.push(window.emojilib[emoji].char);
          }
        }
      }
      return (useful.length === 0) ? '' : useful;
    }
  
    /**
     * Returns a random emoji translation of an english word.
     * @param {String} word The word to be translated.
     * @returns {String} A random emoji translation or '' if none exists.
     */
    function getEmojiForWord(word) {
      let translations = getAllEmojiForWord(word);
      if (!translations || translations.length === 0) return '';
      return translations[Math.floor(Math.random() * translations.length)];
    }
  
    /**
     * Translates an entire sentence to emoji. If multiple translations exist
     * for a particular word, a random emoji is picked.
     * @param {String} sentence The sentence to be translated
     * @param {Bool} onlyEmoji True if the translation should omit all untranslatable words
     * @returns {String} An emoji translation!
     */
    function translate(sentence, onlyEmoji) {
      let translation = '';
      let words = sentence.split(' ');
      for (let i = 0; i < words.length; i++ ) {
        // Punctuation blows. Get all the punctuation at the start and end of the word.
        let firstSymbol = '';
        let lastSymbol = '';
        var word = words[i];
  
        while (word.length > 0 && SYMBOLS.indexOf(word[0]) != -1) {
          firstSymbol += word[0];
          word = word.slice(1, word.length);
        }
        while (word.length > 0 && SYMBOLS.indexOf(word[word.length - 1]) != -1) {
          lastSymbol += word[word.length - 1];
          word = word.slice(0, word.length - 1);
        }
  
        if (onlyEmoji) {
          firstSymbol = lastSymbol = '';
        }
  
        let translated = getEmojiForWord(word);
        if (translated) {
          translation += firstSymbol + translated + lastSymbol + ' ';
        } else if (!onlyEmoji){
          translation += firstSymbol + word + lastSymbol +  ' ';
        }
      }
      return translation;
    }
  });