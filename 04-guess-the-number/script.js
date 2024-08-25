let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");

const resultParas = document.querySelector(".resultParas");
const lowOrHi = document.querySelector(".lowOrHi");

const p = document.createElement("p");

let prevGuess = [];
let numberOfGuessMade = 1;

let play = true;

// check if you can play or not
if (play) {
  // start playing
  submit.addEventListener("click", function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    validate(guess);
  });
}

// function to validate the user input => whether given input is integer or some other value
function validate(guess) {
  // validation logic
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Enter a number greater than 1");
  } else if (guess > 100) {
    alert("Enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numberOfGuessMade === 11) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// function to check guess => check if guessed and radom number are equal or not
function checkGuess(guess) {
  // logic
  if (guess === randomNumber) {
    displayMsg(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMsg(`Number is too high`);
  }
}

// function to display guess => clean the values (to get new values) and will update some values
function displayGuess(guess) {
  // logic
  userInput.value = "";
  guesses.innerHTML += `${guess}, `;
  numberOfGuessMade++;
  lastResult.innerHTML = `${11 - numberOfGuessMade}`;
}

// function to display messagges
function displayMsg(msg) {
  // logic
  lowOrHi.innerHTML = msg;
}

function endGame() {
  // logic
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  p.style.cursor = "pointer";
  resultParas.appendChild(p);
  play = false;
  newGame();
}

function newGame() {
  // logic
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numberOfGuessMade = 1;
    guesses.innerHTML = "";
    lastResult.innerHTML = `${11 - numberOfGuessMade}`;
    userInput.removeAttribute("disabled");
    resultParas.removeChild(p);

    play = true;
  });
}
