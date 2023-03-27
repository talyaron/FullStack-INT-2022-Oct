import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const app = express();

app.use(express.static(`./public`));

class Joke{
    public uid:string = uuidv4()
    constructor(
        public titel:string,
        public subtext:string
    ){}
}
const jokes:Joke []=[
    new Joke(
        "Son of a programmer","son asks his programmer father son: Dad, why does the sun rise in the east and set in the west? Father: If it works, don't touch it"
    ),
    new Joke(
        "nak nak joke",'Knock knock!.who is there?. The stay is very long…. JAVA.'
    ),
    new Joke("Question","How many Microsoft programmers does it take to change a light bulb? Answer: Not one. They will make darkness the standard and force everyone to work according to it."
    ),
    new Joke("lights bulb","How many developers do you need to change a bulb, none of this is a hardware problem"),

]



app.get(`/random-joke`, (req: any, res: any) => {
    // res.send({randomjokes: Math.floor(Math.random()*16777215).toString(16)});
});

app.listen(3000, () => {
    console.log("server listen on port 3000");
  });