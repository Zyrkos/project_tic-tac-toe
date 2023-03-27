const player = (() => {
  let currentPlayer = "X";
  let playerOne = { symbol: "X" };
  let playerTwo = { symbol: "O" };
  const getCurrentPlayer = () => {
    if (currentPlayer === playerOne.symbol) {
      return playerOne;
    } else {
      return playerTwo;
    }
  };
  return { getCurrentPlayer };
})();

const board = (() => {
  const boardFields = ["", "", "", "", "", "", "", "", ""];
  const button = document.getElementById("start-game-btn");
  button.addEventListener("click", function () {
    board.createBoard();
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
          const currentPlayer = player.getCurrentPlayer();
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
    // add this to return the boardFields array to be used in other modules
  };
})();

const game = (() => {
  const changeTurn = () => {};

  const checkForWinner = () => {};

  const endGame = () => {};

  return { changeTurn, checkForWinner, endGame };
})();
