function createPlayer(name, symbol) {
  let score = 0;

  function getName() {
    return name;
  }

  function getSymbol() {
    return symbol;
  }

  function getScore() {
    return score;
  }

  function incrementScore() {
    score++;
  }

  return {
    getName,
    getSymbol,
    getScore,
    incrementScore
  }
}
