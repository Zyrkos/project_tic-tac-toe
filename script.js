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
  let boardFields = ["", "", "", "", "", "", "", "", ""];
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

  const resetGame = () => {
    boardFields = ["", "", "", "", "", "", "", "", ""];
    const fields = document.querySelectorAll(".field");
    fields.forEach((field) => {
      field.textContent = "";
    });
  };

  return {
    createBoard,
    boardFields,
    resetGame,
  };
})();

const game = (() => {
  const changeTurn = () => {
    const currentPlayer = player.getCurrentPlayer();
    currentPlayer.symbol === "X"
      ? (currentPlayer.symbol = "O")
      : (currentPlayer.symbol = "X");
  };

  const checkForWinner = () => {
    const boardFields = board.boardFields;
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winner.length; i++) {
      const [a, b, c] = winner[i];
      if (
        boardFields[a] &&
        boardFields[a] === boardFields[b] &&
        boardFields[a] === boardFields[c]
      ) {
        return boardFields[a]; // Return the winning symbol ("X" or "O")
      }
    }

    return null; // Return null if there is no winner yet
  };

  const endGame = (winner) => {
    if (winner) {
      const symbol = winner;
      const message = `${symbol} has won!`;
      console.log(message);
      location.reload(); //reloads the page after 
    }
  };

  return { changeTurn, checkForWinner, endGame };
})();
