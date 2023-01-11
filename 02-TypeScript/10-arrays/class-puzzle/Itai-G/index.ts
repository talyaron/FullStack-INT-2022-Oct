class Pepole{
    constructor(private name:string){}
}

const lior = new Pepole ("lior oil");
const ori = new Pepole("ori shyui");
const yosi = new Pepole("yosi oriel");

const pepole:any [] = [lior,ori,yosi,44,34];


const oti = pepole.sort();
console.log(oti);