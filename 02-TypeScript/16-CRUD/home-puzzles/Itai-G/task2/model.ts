class Balloons{
    style: any;
    constructor(
        public color : string,
        public img : string,
        public exploded : boolean
    ){}
}
const balloons: Balloons [] = [];

let xVel = 1;
let yVel = 2;
let score = 0;
let xPos: number;
let yPos : number;