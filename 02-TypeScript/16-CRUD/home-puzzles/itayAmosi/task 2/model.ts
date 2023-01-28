class PopUpBalloons{
    uid: string;
    constructor(
        public name:string,
        public color:string 
    ){
        // this.uid = uid();
    }
}

const blackBalloon = new PopUpBalloons(`Black Balloon`, `black`);
const redBalloon = new PopUpBalloons(`Red Balloon`, `red`);
const blueBalloon = new PopUpBalloons(`Blue Balloon`, `blue`);
const greenBalloon = new PopUpBalloons(`Green Balloon`, `green`);
const yellowBalloon = new PopUpBalloons(`Yellow Balloon`, `yellow`);
const goldBalloon = new PopUpBalloons(`Gold Balloon`, `gold`);
const pinkBalloon = new PopUpBalloons(`Pink Balloon`, `ping`);


const balloonList:PopUpBalloons[] = [

];

// balloonList.push(new PopUpBalloons(`balloonBlack`, `black`))
console.log(balloonList)