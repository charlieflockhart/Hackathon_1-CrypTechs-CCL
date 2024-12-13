//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Get theme and difficulty from local storage / Cache
let theme = localStorage.getItem('theme');
let difficulty = localStorage.getItem('difficulty');

//grab theme and difficulty from cache and console log
console.log('Theme:', theme);
console.log('Difficulty:', difficulty);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Dictionary Import
import { testDictionary, testDictionary2 ,christmasDictionary, movieDictionary, foodDictionary, technologyDictionary, geographyDictionary } from './dictionary.js';
console.log('test dictionary:', testDictionary);
console.log('test dictionary2:', testDictionary2);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Theme


if (theme === 'christmas') {
    console.log('Christmas theme selected');
}
if (theme === 'movies') {
    console.log('Movie theme selected');
}
if (theme === 'food') {
    console.log('Food theme selected');
}
if (theme === 'tech') {
    console.log('Technolgy theme selected');
}
if (theme === 'geography') {
    console.log('Geography theme selected');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Difficulty

if (difficulty === 'easy') {
    console.log('Easy mode selected');
}
if (difficulty === 'hard') {
    console.log('Hard mode selected');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Represents the state of the game.
 * 
 * @property {Object} state - The state object containing the game's current state.
 * @property {string} state.secret - A randomly selected word from the dictionary.
 * @property {Array<Array<string>>} state.grid - A 2D array representing the game grid, initialized based on the game mode.
 * @property {number} state.currentRow - The index of the current row the player is on.
 * @property {number} state.currentCol - The index of the current column the player is on.
 */

const dictionary = testDictionary2;
const state = {
  secret: dictionary[Math.floor(Math.random() * dictionary.length)],
  grid: Array(difficulty === 'easy' ? 6 : 5)
    .fill()
    .map(() => Array(5).fill('')),
  currentRow: 0,
  currentCol: 0,
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Draw the grid called will either call easyGrid or hardGrid depending on the difficulty selected

function drawGrid(container) {
    if (difficulty === 'easy') {
      easyGrid(container);
    } else {
      hardGrid(container);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Draw the grid

// Draw the easy grid
function easyGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';
  
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        drawBox(grid, i, j);
      }
    }
  
    container.appendChild(grid);
    console.log('Easy Grid Created');
}

// Draw the hard grid
function hardGrid(container) {
    const grid = document.createElement('div');
    grid.className = 'grid';
  
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        drawBox(grid, i, j);
      }
    }
  
    container.appendChild(grid);
    console.log('Hard Grid Created');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Update Grid
/**
 * Updates the content of the grid on the webpage.
 * Iterates through the state grid and updates the text content
 * of each corresponding HTML element with the current state value.
 */
function updateGrid() {
    for (let i = 0; i < state.grid.length; i++) {
       for (let j = 0; j < state.grid[i].length; j++) {
         const box = document.getElementById(`box${i}${j}`);
         box.textContent = state.grid[i][j];
       }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Create the box

/**
 * Creates and appends a box element to the specified container.
 *
 * @param {HTMLElement} container - The container to which the box will be appended.
 * @param {number} row - The row number for the box's ID.
 * @param {number} col - The column number for the box's ID.
 * @param {string} [letter=''] - The text content to be placed inside the box. Default is an empty string.
 * @returns {HTMLElement} The created box element.
 */

function drawBox(container, row, col, letter = '') {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.zIndex = '100';
    box.textContent = letter;
    box.id = `box${row}${col}`;
    
    container.appendChild(box);
    return box;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Register Keyboard Events

function registerKeyboardEvents() {
    document.body.onkeydown = (e) => {
      const key = e.key;
      if (key === 'Enter') {
        if (state.currentCol === 5) {
          const word = getCurrentWord();
          console.log('word:', word);
          if (isWordValid(word)) {
            revealWord(word);
            state.currentRow++;
            state.currentCol = 0;
            //document.getElementById('textBox').value = '';
          } else {
            alert('Sorry, This is not a valid word or in the current Dictonary.');
          }
        }
      }
      if (key === 'Backspace') {
        removeLetter();
      }
      if (isLetter(key)) {
          addLetter(key.toLowerCase());
      }
  
      updateGrid();
    };
}

//Stop Register Keyboard Events
function stopRegisterKeyboardEvents() {
    document.body.onkeydown = null;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Get Word And Validate

/**
 * Retrieves the current word from the game grid based on the current row.
 * 
 * @returns {string} The concatenated string of characters from the current row in the grid.
 */

function getCurrentWord() {
    return state.grid[state.currentRow].reduce((prev, curr) => prev + curr);
}
  
/**
 * Checks if a given word is valid by verifying its presence in the dictionary.
 *
 * @param {string} word - The word to be validated.
 * @returns {boolean} - Returns true if the word is found in the dictionary, otherwise false.
 */

function isWordValid(word) {
    return dictionary.includes(word);
}


/**
 * Counts the number of occurrences of a specific letter in a given word.
 *
 * @param {string} word - The word in which to count occurrences of the letter.
 * @param {string} letter - The letter to count within the word.
 * @returns {number} The number of times the letter occurs in the word.
 */

function getNumOfOccurrencesInWord(word, letter) {
    let result = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        result++;
      }
    }
    return result;
}
  

/**
 * Gets the number of occurrences of a specific letter in a word up to a given position.
 *
 * @param {string} word - The word to search within.
 * @param {string} letter - The letter to count occurrences of.
 * @param {number} position - The position in the word up to which to count occurrences.
 * @returns {number} The number of occurrences of the specified letter up to the given position.
 */

function getPositionOfOccurrence(word, letter, position) {
    let result = 0;
    for (let i = 0; i <= position; i++) {
      if (word[i] === letter) {
        result++;
      }
    }
    return result;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Reveal Word

function revealWord(guess) {
    const row = state.currentRow;
    const animation_duration = 500; // ms
  
    for (let i = 0; i < 5; i++) {
      const box = document.getElementById(`box${row}${i}`);
      const letter = box.textContent;
      const numOfOccurrencesSecret = getNumOfOccurrencesInWord(
        state.secret,
        letter
      );
      const numOfOccurrencesGuess = getNumOfOccurrencesInWord(guess, letter);
      const letterPosition = getPositionOfOccurrence(guess, letter, i);
  
      setTimeout(() => {
        if (
          numOfOccurrencesGuess > numOfOccurrencesSecret &&
          letterPosition > numOfOccurrencesSecret
        ) {
          box.classList.add('empty');
        } else {
          if (letter === state.secret[i]) {
            box.classList.add('right');
          } else if (state.secret.includes(letter)) {
            box.classList.add('wrong');
          } else {
            box.classList.add('empty');
          }
        }
      }, ((i + 1) * animation_duration) / 2);
  
      box.classList.add('animated');
      box.style.animationDelay = `${(i * animation_duration) / 2}ms`;
    }
  
    const isWinner = state.secret === guess;
    const isGameOver = state.currentRow === (difficulty === 'easy' ? 5 : 4);
  
    setTimeout(() => {
      if (isWinner) {
        congratulations();
        drawReplayButton();
        stopRegisterKeyboardEvents();
      } else if (isGameOver) {
        console.log('Game over Loser');
  
        const outcome = document.createElement('div');
        outcome.id = 'outcome';
        document.getElementById('title').append(outcome);
  
        const header = document.createElement('h3');
        header.innerHTML = `Better luck next time!<br>The word was ${state.secret.charAt(0).toUpperCase() + state.secret.slice(1)}.`;
        header.className = 'header3';
        outcome.appendChild(header);
  
        stopRegisterKeyboardEvents();
        drawReplayButton();
      }
    }, 3 * animation_duration);
}

/**
 * Checks if the given key is a single alphabetical letter.
 *
 * @param {string} key - The key to check.
 * @returns {boolean} - Returns true if the key is a single letter (case-insensitive), otherwise false.
 */
function isLetter(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Adding or Removeing Letters from the grid

// Add letter to Sqaure
function addLetter(letter) {
    if (state.currentCol === 5) return;
    state.grid[state.currentRow][state.currentCol] = letter;
    state.currentCol++;
}
  
  
// Remove letter from Square
function removeLetter() {
    if (state.currentCol === 0) return;
    state.grid[state.currentRow][state.currentCol - 1] = '';
    state.currentCol--;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Start The Game

//  Start the game
function startup() {
    const aboveGrid = document.getElementById('aboveGrid');
    drawGrid(aboveGrid);
    //drawHintButton();
    registerKeyboardEvents();
    console.log('Game Started');
}
  
startup();