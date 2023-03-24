const playerChoiceX = document.getElementById("x-choice");
const playerChoiceO = document.getElementById("o-choice");
const gameBoard = document.getElementById("game-board")
const gameBoardField = document.getElementById("game-board-field")







function createPlayer(choice) {
  let score = 0;

  function getChoice() {
    return choice;
  }

  function getScore() {
    return score;
  }

  return {
    getChoice,
    getScore,
  };
}


