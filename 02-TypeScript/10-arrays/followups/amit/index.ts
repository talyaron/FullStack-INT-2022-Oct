class Color {
    public constructor(public name: string) { }
}

const yellow = new Color("yellow");
const blue = new Color("blue");
const white = new Color("white");
const red = new Color("red");
const pink = new Color("pink");
const purple = new Color("purple");
const green = new Color("green");
const black = new Color("black");

const colorsArray: Color[] = [yellow, blue, white, red, pink, purple, green, black];

console.log(`the length of the array is ${colorsArray.length}`);
console.log(`in number 0 of the array we have ${colorsArray[0].name}`);
console.log(`in number 0 of the array we have ${colorsArray[-1]}`);
