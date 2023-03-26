const gameBoard = (() => {
  const boardFields = ["", "", "", "", "", "", "", "", ""];

  const createBoard = () => {
    const board = document.createElement("div");
    board.classList.add("game-board");

    for (let i = 0; i < boardFields.length; i++) {
      const field = document.createElement("div");
      field.classList.add("field");
      field.setAttribute("data-index", i);
      field.addEventListener("click", (e) => {
        const clickedIndex = e.target.getAttribute("data-index");
        boardFields[clickedIndex] = "X"; // or "O", depending on the player
        field.textContent = boardFields[clickedIndex];
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
  const startGame = () => {
    const button = document.getElementById("start-game-btn");
    button.addEventListener("click", () => {
      gameBoard.createBoard();
    });
  };

  return {
    startGame
  }
};

const startGame = gameFlow().startGame;