// Generate a random number between 1 and 100
const randomNumber = Math.ceil(Math.random() * 100);
let attempts = 5; // Maximum attempts

function processInput() {
  let userGuess = document.getElementById("userInput").value;
  let messageBox = document.getElementById("message");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageBox.innerText = "⚠️ Please enter a valid number between 1 and 100!";
    return;
  }

  attempts--;

  if (userGuess === randomNumber) {
    messageBox.innerHTML = `🎉 Congratulations! You guessed the correct number: ${randomNumber} 🎯`;
    disableGame();
  } else if (attempts > 0) {
    let hint =
      userGuess > randomNumber
        ? "⬇️ Try a smaller number!"
        : "⬆️ Try a larger number!";
    messageBox.innerHTML = `${hint} You have ${attempts} attempt(s) left.`;
  } else {
    messageBox.innerHTML = `😢 Game Over! The correct number was ${randomNumber}.`;
    disableGame();
  }
}

function disableGame() {
  document.getElementById("userInput").disabled = true;
  document.querySelector("button").disabled = true;
}

// Adding a message box for displaying hints and results
document
  .querySelector(".gameBox")
  .insertAdjacentHTML("beforeend", `<h2 id="message"></h2>`);

function scrollTogameBox() {
  document.querySelector(".gameBox").scrollIntoView({ behavior: "smooth" });
}

function scrollTogameInstruct() {
  document
    .querySelector(".InstructionBox")
    .scrollIntoView({ behavior: "smooth" });
}
