"use strict";
class Tile {
    constructor(color, value, id = genRanHex()) {
        this.color = color;
        this.value = value;
        this.id = id;
        this.div = this.buildTileDiv(this.color, this.value);
    }
    buildTileDiv(color, value) {
        const tileDiv = document.createElement("div");
        tileDiv.classList.add("square");
        switch (color) {
            case "red":
                tileDiv.classList.add("tile");
                tileDiv.dataset.color = "red";
                tileDiv.dataset.value = `${value}`;
                tileDiv.innerHTML = value.toString();
                break;
            case "blue":
                tileDiv.classList.add("tile");
                tileDiv.dataset.color = "blue";
                tileDiv.dataset.value = `${value}`;
                tileDiv.innerHTML = value.toString();
                break;
            case "yellow":
                tileDiv.classList.add("tile");
                tileDiv.dataset.color = "yellow";
                tileDiv.dataset.value = `${value}`;
                tileDiv.innerHTML = value.toString();
                break;
            case "black":
                tileDiv.classList.add("tile");
                tileDiv.dataset.color = "black";
                tileDiv.dataset.value = `${value}`;
                tileDiv.innerHTML = value.toString();
                break;
            case "jocker":
                tileDiv.classList.add("tile");
                tileDiv.dataset.color = "jocker";
                tileDiv.innerHTML = `<i class="fa-regular fa-face-smile"></i>`;
                tileDiv.dataset.value = `0`;
                break;
            case "empty":
                // tileDiv.classList.add("tile");
                tileDiv.dataset.color = "empty";
                tileDiv.dataset.value = `${value}`;
                tileDiv.style.background = `url('../../img/tileBack.png')no-repeat center / cover`;
                break;
            default:
                console.error("Switch statement didn't work well.");
        }
        tileDiv.id = this.id;
        return tileDiv;
    }
}
