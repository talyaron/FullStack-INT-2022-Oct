class Balloons{
    style: any;
    constructor(
        public color : string,
        public img : string,
        public exploded : boolean
    ){}
}
const balloons: Balloons [] = [];

let xPos;
let yPos;

let xVel = 1;
let yVel = 2;
