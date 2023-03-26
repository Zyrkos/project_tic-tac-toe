/* const playerOne = document.getElementById("x-choice");
const playerTwo = document.getElementById("o-choice");
const gameBoard = document.getElementById("game-board");
const startGameBtn = document.getElementById("start-game-btn"); */

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

const gameBoard = (function () {
  const boardFields = ["", "", "", "", "", "", "", "", ""];

  const button = document.getElementById("start-game-btn");
  button.addEventListener("click", function () {
    gameBoard.createBoard();
    button.removeEventListener("click", arguments.callee); //to stop the start game from deploying more grids after one click
  });

  const createBoard = () => {
    const board = document.createElement("div");
    board.classList.add("board");

    for (let i = 0; i < boardFields.length; i++) {
      const field = document.createElement("div");
      field.classList.add("field");
      field.setAttribute("data-index", i);
      field.addEventListener("click", (e) => {
        const clickedIndex = e.target.getAttribute("data-index");
        boardFields[clickedIndex] = "";
      });

      board.appendChild(field);
    }

    document.getElementById("game").appendChild(board);
  };

  return {
    createBoard,
  };
})();

const gameFlow = (function (gameBoard) {
  let currentPlayer = "X";

  const playerTurn = (index) => {
    const field = document.querySelector(`.field[data-index="${index}"]`);
    if (gameBoard.boardFields[index] === "") {
      field.textContent = currentPlayer;
      gameBoard.boardFields[index] = currentPlayer;
    }
  };

  return {
    playerTurn,
  };
})();

/* 
const fields = document.getElementsByClassName("field");
  for (let i = 0; i < fields.length; i++) {
    fields[i].addEventListener("mouseenter", () => {
      console.log("mouse")
      
    });
  } */
