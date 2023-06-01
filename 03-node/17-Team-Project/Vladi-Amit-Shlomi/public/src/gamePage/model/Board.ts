class Board {
  public divArr: Array<HTMLDivElement> = [];
  constructor(public tileArr: Tile[] = [], public id: string = genRanHex()) {}

  buildEmptyBoard() {
    for (let i = 1; i <= 160; i++) {
      const newTile = new Tile("empty", -1);
      this.tileArr.push(newTile);
    }
    this.updateDivArr();
  }

  updateDivArr() {
    this.divArr = this.tileArr.map((tile) => tile.div);
    this.divArr.forEach((div) => toggleTileActive(div, this.divArr));
  }

  convertDivArrToTileArr() {
    this.tileArr = this.divArr.map((div) => {
      const color = div.dataset.color as string;
      const value = div.dataset.value as string;
      return new Tile(color, parseInt(value));
    });
  }

  async saveBoardToDB() {
    await fetch(`${boardAPI}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: this.id, tileArr: this.tileArr }),
    }).catch((error) => console.error(error));
  }

  async updateBoardInDB() {
    this.convertDivArrToTileArr();
    const updatedBoard = await fetch(`${boardAPI}/updateBoard`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tileArr: this.tileArr, boardId: this.id }),
    })
      .then((res) => res.json())
      .then(({ board }) => board)
      .catch((error) => console.error(error));
  }
}
