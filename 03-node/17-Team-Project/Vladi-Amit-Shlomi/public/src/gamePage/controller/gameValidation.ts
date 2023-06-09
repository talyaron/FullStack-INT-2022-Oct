function validateBoard() {
  try {
    let validBoard = true;

    const boardCopy = [...currentGame.board.divArr];

    let set: Array<HTMLDivElement> = [];

    currentGame.sets = [];

    boardCopy.forEach((square) => {
      if (!validBoard) return;
      if (square.innerHTML != "") set.push(square);

      const squareIndex = boardCopy.indexOf(square) + 1;

      // check if reached end of set of end of row -> than run validation on set
      if (
        (square.innerHTML == "" && set.length > 0) ||
        (set.length > 0 && squareIndex % 20 == 0)
      ) {
        const tileArr: Tile[] = set.map((div) => {
          const color = div.dataset.color as string;
          const number = div.dataset.value as string;
          return new Tile(color, parseInt(number));
        });

        //check set length
        if (set.length < 3) {
          set = [];
          alert("set too short. minimun 3 tiles needed");
          validBoard = false;
        }

        if (tileArr.find((tile) => tile.color === "jocker")) {
          if (!validSetWithJocker(tileArr)) {
            validBoard = false;
          }
        }

        // check if the set is not the same color
        else if (!isSameColor(tileArr)) {
          if (!isValidGroup(tileArr)) {
            alert("Not valid board.");
            validBoard = false;
          }
        }

        // check if the set is going up by one number by each tile
        else {
          if (!isValidRun(tileArr)) {
            alert("Not valid board.");
            validBoard = false;
          }
        }

        if (validBoard) currentGame.sets.push(set);
        set = [];
      }
    });

    return validBoard;
  } catch (error) {
    console.error(error);
  }
}

function checkIfPlayerMadeAMove() {
  if (compareArrays(currentPlayer.divsArray, currentPlayer.startingTurnDivs)) {
    currentPlayer.getRandomTile(currentGame.deck);
  }
}

function hasDuplicates(array: Tile[]) {
  const newArr = array.map((tile) => tile.color + tile.value);
  return [...new Set(newArr)].length !== newArr.length;
}

function isValidGroup(tileArr: Tile[]) {
  try {
    if (tileArr.length > 4) {
      return false;
    }

    const stringArr = tileArr.map((tile) => tile.value + tile.color);
    const setArr = [...new Set(stringArr)];

    if (
      !tileArr.map((tile) => tile.value).reduce((a, b) => (a === b ? a : NaN))
    ) {
      return false;
    }

    return setArr.length === stringArr.length;
  } catch (error) {
    console.error(error);
  }
}

function isValidRun(tileArr: Tile[]) {
  return tileArr
    .map((tile) => tile.value)
    .reduce((a, b) => (a + 1 === b ? b : NaN));
}

function isSameColor(tileArr: Tile[]) {
  return tileArr.map((tile) => tile.color).reduce((a, b) => (a === b ? a : ""));
}

function validSetWithJocker(tileArr: Tile[]) {
  try {
    let isValid = true;

    if (isSameColor(tileArr.filter((tile) => tile.color !== "jocker"))) {
      if (!isValidRunWithJocker(tileArr)) isValid = false;
    } else {
      if (!isValidGroupWithJocker(tileArr)) isValid = false;
    }
    return isValid;
  } catch (error) {
    console.error(error);
  }
}

function isValidRunWithJocker(tileArr: Tile[]) {
  try {
    let jockerValue = 0;
    return tileArr
      .map((tile) => tile.value)
      .reduce((a, b) => {
        if (b === 0) {
          jockerValue = a + 1;
          return jockerValue;
        }
        if (a === 0) {
          return b;
        }
        return a + 1 === b ? b : NaN;
      });
  } catch (error) {
    console.error(error);
  }
}

function isValidGroupWithJocker(tileArr: Tile[]) {
  try {
    if (tileArr.length > 4) {
      return false;
    }

    if (
      !tileArr
        .filter((tile) => tile.color !== "jocker")
        .map((tile) => tile.value)
        .reduce((a, b) => (a === b ? a : NaN))
    ) {
      return false;
    }

    const stringArr = tileArr.map((tile) => tile.value + tile.color);
    const setArr = [...new Set(stringArr)];

    return setArr.length === stringArr.length;
  } catch (error) {
    console.error(error);
  }
}  
