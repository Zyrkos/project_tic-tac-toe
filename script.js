const playerOne = document.getElementById("x-choice");
const playerTwo = document.getElementById("o-choice");
const gameBoard = document.getElementById("game-board");
const gameBoardField = document.getElementsByClassName("game-board-field");

/* function createPlayer(symbol, score) {
  let playerOne;
  let playerTwo;
  let symbol;

  function getSymbol(symbol) {
    playerOne.addEventListener("click", function () {
      playerOneSymbol = "x";
    });
    playerTwo.addEventListener("click", function () {
      playerTwoSymbol = "o";
    });

    return symbol;
  }

  return {
    getSymbol,
  };
} */

/* (function () {
  const startGameBtn = document.getElementById("start-game-btn");

  startGameBtn.addEventListener("click", function () {
    createGameBoard();
    startGameBtn.removeEventListener("click", arguments.callee); //to stop the start game from deploying more grids after one click
  });

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

    document.body.appendChild(gameBoardDiv);
  }
})(); */

function gameFlow() {
  function playerTurn() {
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
