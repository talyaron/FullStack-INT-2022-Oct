class Player {
  public startingTurnDivs: Array<HTMLDivElement> = [];

  constructor(
    public name: string,
    public divsArray: Array<HTMLDivElement> = [],
    public id: string = genRanHex(),
    public hand: Tile[] = [],
    public isActive: boolean = false
  ) {}

  initializeStartHend() {
    this.startingTurnDivs = [...this.divsArray];
  }

  getNewHand(deck: Deck) {
    for (let i = 1; i <= 20; i++) {
      this.getRandomTile(deck);
    }
  }

  removeTileFromHand(tileId: string) {
    const index = this.hand.findIndex((tile) => tile.id === tileId);
    this.hand.splice(index, 1);
  }

  addTileToHand(div: HTMLDivElement) {
    // convert div back to Tile...
    const color = div.dataset.color as string;
    const value = div.dataset.value as string;
    const tile = new Tile(color, parseInt(value), div.id);
    this.hand.push(tile);
  }

  activateHand() {
    this.divsArray = this.hand.map((tile) => tile.div);
    this.divsArray.forEach((div) => toggleTileActive(div, this.divsArray));
  }

  getRandomTile(deck: Deck) {
    const getTile = deck.deal();

    toggleTileActive(getTile.div, this.divsArray);

    this.divsArray.push(getTile.div);
    this.hand.push(getTile);
    this.renderHandToScreen(this.divsArray);
  }

  renderHandToScreen(tileArr: Array<HTMLDivElement>) {
    activePlayerArea.innerHTML = "";

    if (tileArr.length > 30) {
      activePlayerArea.style.gridTemplateColumns = "repeat(20, 1fr)";
    }

    tileArr.forEach((div) => activePlayerArea.append(div));
  }

  async savePlayerToDB() {
    try {
      await fetch(`${playerAPI}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          hand: this.hand,
          _id: this.id,
          active: this.isActive,
        }),
      }).catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  }

  async updatePlayerInDB() {
    await fetch(`${playerAPI}/updatePlayer`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hand: this.hand,
        playerId: this.id,
        active: this.isActive,
      }),
    }).catch((error) => console.error(error));
  }
}

interface PlayerDB {
  _id: string;
  name: string;
  hand: [TileDB];
  active: boolean;
}
