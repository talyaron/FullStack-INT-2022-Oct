"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Player {
    constructor(name, divsArray = [], id = genRanHex(), hand = [], isActive = false) {
        this.name = name;
        this.divsArray = divsArray;
        this.id = id;
        this.hand = hand;
        this.isActive = isActive;
        this.startingTurnDivs = [];
    }
    initializeStartHend() {
        this.startingTurnDivs = [...this.divsArray];
    }
    getNewHand(deck) {
        for (let i = 1; i <= 20; i++) {
            this.getRandomTile(deck);
        }
    }
    removeTileFromHand(tileId) {
        const index = this.hand.findIndex((tile) => tile.id === tileId);
        this.hand.splice(index, 1);
    }
    addTileToHand(div) {
        // convert div back to Tile...
        const color = div.dataset.color;
        const value = div.dataset.value;
        const tile = new Tile(color, parseInt(value), div.id);
        this.hand.push(tile);
    }
    activateHand() {
        this.divsArray = this.hand.map((tile) => tile.div);
        this.divsArray.forEach((div) => toggleTileActive(div, this.divsArray));
    }
    getRandomTile(deck) {
        const getTile = deck.deal();
        toggleTileActive(getTile.div, this.divsArray);
        this.divsArray.push(getTile.div);
        this.hand.push(getTile);
        this.renderHandToScreen(this.divsArray);
    }
    renderHandToScreen(tileArr) {
        activePlayerArea.innerHTML = "";
        if (tileArr.length > 30) {
            activePlayerArea.style.gridTemplateColumns = "repeat(20, 1fr)";
        }
        tileArr.forEach((div) => activePlayerArea.append(div));
    }
    savePlayerToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fetch(`${playerAPI}`, {
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
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    updatePlayerInDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fetch(`${playerAPI}/updatePlayer`, {
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
        });
    }
}
