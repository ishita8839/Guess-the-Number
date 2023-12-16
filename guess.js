// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let remainingGuesses = 10;
let previousGuesses = [];

document.addEventListener("DOMContentLoaded", function () {
    // Attach click event listener to the button
    document.getElementById("btn").addEventListener("click", checkGuess);
});

function checkGuess() {
    const userGuess = parseInt(document.getElementById("field").value);
    const result = document.querySelector(".loworhi");
    const guessesDisplay = document.querySelector(".guesses");
    const remainingDisplay = document.querySelector(".remaining");

    if (!isNaN(userGuess)) {
        previousGuesses.push(userGuess);
        guessesDisplay.textContent = previousGuesses.join(", ");

        if (userGuess === secretNumber) {
            result.textContent = "Congratulations! You guessed the correct number!";
            result.style.color = "green";
            disableInput();
        } else {
            remainingGuesses--;
            remainingDisplay.textContent = remainingGuesses;

            if (remainingGuesses === 0) {
                result.textContent = `Game over. The correct number was ${secretNumber}.`;
                result.style.color = "red";
                disableInput();
            } else {
                result.textContent = userGuess < secretNumber ? "Too low!" : "Too high!";
                result.style.color = "black";
            }
        }
    } else {
        result.textContent = "Please enter a valid number.";
        result.style.color = "black";
    }

    document.getElementById("field").value = ""; // Clear the input field
}

function disableInput() {
    document.getElementById("field").disabled = true;
    document.getElementById("btn").disabled = true;
}
