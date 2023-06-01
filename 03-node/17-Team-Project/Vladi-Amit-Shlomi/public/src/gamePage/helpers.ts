const resetCurrentTile = () => {
  try {
    if (!currentTile) throw new Error("current tile not found.");
    currentTile.classList.remove("active");
    currentTile = undefined;
  } catch (error) {
    console.error(error);
  }
};

const compareArrays = (a: Array<HTMLDivElement>, b: Array<HTMLDivElement>) =>
  a.length === b.length;

function tileBelongesToPlayer(div: HTMLDivElement) {
  try {
    if (!currentPlayer.startingTurnDivs.includes(div)) {
      resetCurrentTile();
      return false;
    }
    return true;
  } catch (error) {
    console.error(error);
  }
}

const genRanHex = () =>
  [...Array(24)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
