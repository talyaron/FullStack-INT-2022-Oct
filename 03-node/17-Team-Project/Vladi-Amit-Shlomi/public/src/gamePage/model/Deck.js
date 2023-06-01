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
class Deck {
    constructor(deck = [], id = genRanHex()) {
        this.deck = deck;
        this.id = id;
    }
    deal() {
        const randomDeckIndex = Math.floor(Math.random() * this.deck.length);
        const tile = this.deck.splice(randomDeckIndex, 1)[0];
        return tile;
    }
    createDeck() {
        try {
            const colors = ["black", "red", "blue", "yellow"];
            const deck = [];
            for (let j = 1; j < 3; j++) {
                const jocker = new Tile("jocker", 0);
                colors.forEach((color) => {
                    for (let i = 1; i <= 13; i++) {
                        const tile = new Tile(color, i);
                        deck.push(tile);
                    }
                });
                deck.push(jocker);
            }
            this.deck = deck;
        }
        catch (error) {
            console.error(error);
        }
    }
    saveDeckToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fetch(`${deckAPI}`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ _id: this.id, deck: this.deck }),
                }).catch((error) => console.error(error));
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    updateDeckInDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fetch(`${deckAPI}/updateDeck`, {
                    method: "PATCH",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ deck: this.deck, deckId: this.id }),
                }).catch((error) => console.error(error));
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
