class User {
  constructor(public name: string) {}
}

class Bugs {
  constructor(public name: string, public positionX, public positionY, public display = 'flex') {
    // this.positionX = positionX
    // this.positionY = positionY

  }
  draw() {
    const mosquito = document.createElement("img");
    container.appendChild(mosquito);
    mosquito.setAttribute("class", "mosquito");
    mosquito.setAttribute(
      "src",
      "https://www.pngarts.com/files/4/Mosquito-Transparent-Background-PNG.png"
    );
    mosquito.style.position = "absolute";
    mosquito.style.top = `${this.positionY}px`;
    mosquito.style.left = `${this.positionX}px`;
    mosquito.style.display = this.display;
  }
  update(){
    this.draw();
    this.positionX = `${rndomX()}`
    this.positionY = `${rndomY()}`
  }
}
const rndomY = () => Math.random() * (contHeight - 100);
const rndomX = () => Math.random() * (contWidth - 100);


const mosquito = new Bugs("Vladi", rndomX(), rndomY());
// const vsfgb = new Bugs("drfg");
// mosquito.draw();
// vsfgb.draw();
