const player = () => {
  const getCurrentPlayer = () => {
    const btnX = document.getElementById("x-choice");
    const btnO = document.getElementById("o-choice");
  };
};

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
        if (boardFields[clickedIndex] === "") {
          const currentPlayer = game.getCurrentPlayer();
          e.target.textContent = currentPlayer.symbol;
          boardFields[clickedIndex] = currentPlayer.symbol;
          const winner = game.checkForWinner();
          if (winner !== null) {
            game.endGame(winner);
          } else {
            game.changeTurn();
          }
        }
      });

      board.appendChild(field);
    }

    document.getElementById("game").appendChild(board);
  };

  return {
    createBoard,
  };
})();

const gameFlow = () => {
  const changeTurn = () => {};

  const checkForWinner = () => {};

  const endGame = () => {};
};

/* const playerTurn = (index) => {
  const boardFields = ["", "", "", "", "", "", "", "", ""];
  const field = document.querySelector(`.field[data-index="${index}"]`);
  if (boardFields[index] === "") {
    field.textContent = "X";
    boardFields[index] = "X";
  }
};
 */
