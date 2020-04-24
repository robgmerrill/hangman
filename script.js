const wordEl = document.getElementById('word');
console.log(wordEl);

const wrongLetterEl = document.getElementById('wrong-letters');

const playAgainBtn = document.getElementById('play-again');

const popup = document.getElementById('popup-container');

const notification = document.getElementById('notification-container');

const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['fish', 'orange', 'pizza', 'global', 'programming'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = ['f', 'i', 's', 'h'];

const wrongLetters = [];

// Show the hidden word
function displayWord() {
  console.log('this fires');
  console.log(selectedWord);
  wordEl.innerHTML = `
  ${selectedWord
    .split('')
    .map(
      (letter) =>
        `<span class='letter'>${
          correctLetters.includes(letter) ? letter : ''
        }</span>`
    )
    .join('')}
    `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');
  console.log(wordEl.innerText, innerWord);

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations, you won!';
    popup.style.display = 'flex';
  }
}

displayWord();
