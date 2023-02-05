class User {
  constructor(public name: string, public age:string, public email:string) {}
}

class Animal {
  public positionX = randomX()
  public positionY = randomY()
  constructor(public name: string, public imageUrl: string, public display = 'flex') {
  }
  draw() {
    const animal = document.createElement("img");
    container.appendChild(animal);
    animal.setAttribute("class", this.name);
    animal.setAttribute(
      "src", this.imageUrl);
      // "https://www.pngarts.com/files/4/Mosquito-Transparent-Background-PNG.png"
      animal.style.position = "absolute";
      animal.style.top = `${this.positionY}px`;
      animal.style.left = `${this.positionX}px`;
      animal.style.display = this.display;
  }
  update(){
    this.draw();
    this.positionX = randomX()
    this.positionY = randomY()
  }
}
const randomY = () => Math.random() * (contHeight - 100);
const randomX = () => Math.random() * (contWidth - 100);


const mosquito = new Animal("mosquito", "https://www.pngarts.com/files/4/Mosquito-Transparent-Background-PNG.png");
const bee = new Animal("bee", "https://www.freepnglogos.com/uploads/bee-png/bee-the-economic-value-pollination-modern-agriculture-8.png");
// const vsfgb = new Bugs("drfg");
// mosquito.draw();

setTimeout (()=> console.log(mosquito.positionX, mosquito.positionY), 500 )
// vsfgb.draw();
