const startGameBtn = document.getElementById("start-game-btn");
const playerChoiceX = document.getElementById("x-choice");
const playerChoiceO = document.getElementById("o-choice");
const gameBoard = document.getElementById("game-board");
const gameBoardField = document.getElementsByClassName("game-board-field");

/* function createPlayer(choice, score) {
  let score = 0;
  let choice = "X";

  function getChoice(choice) {
    
    return choice;
  }

  function getScore() {
    return score;
  }

  return {
    getChoice,
    getScore,
  };
} */

function createGameBoard() {
  const gameBoardDiv = document.createElement("div");
  gameBoardDiv.classList.add("game-board");
  gameBoardDiv.id = "game-board";

  for (let i = 0; i < 9; i++) {
    const gameBoardFieldDiv = document.createElement("div");
    gameBoardFieldDiv.classList.add("game-board-field");
    gameBoardFieldDiv.id = `game-board-field-${i}`;
    gameBoardDiv.appendChild(gameBoardFieldDiv);
  }

  return gameBoardDiv;
}

function gameFlow() {
  function playerTurn() {
    const gameBoardField = document.getElementsByClassName("game-board-field");
    for (let i = 0; i < gameBoardField.length; i++) {
      gameBoardField[i].addEventListener("click", function () {
        this.textContent = "X";
        this.id += "-X";
      });
    }
  }
  return {
    playerTurn,
  };
}

const game = gameFlow();
game.playerTurn();
