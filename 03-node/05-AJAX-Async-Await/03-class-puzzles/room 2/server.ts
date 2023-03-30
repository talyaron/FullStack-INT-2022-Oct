import express from 'express'
import { uuid } from 'uuidv4';

const app = express()
const PORT = 3000;


app.use(express.json())
app.use(express.static("public"))


class Joke {
    uid:string = uuid()
    constructor(
        public joke:string,
    ){}
}

const jokes:Joke[] = [];

jokes.push(new Joke("Why don't scientists trust atoms? Because they make up everything."))
jokes.push(new Joke("Why did the tomato turn red? Because it saw the salad dressing!."))
jokes.push(new Joke("Why did the coffee file a police report? It got mugged."))
jokes.push(new Joke("Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels."))
jokes.push(new Joke("What do you call an alligator wearing a vest? An investigator."))
jokes.push(new Joke("Why don't scientists trust atoms? Because they make up everything."))



app.get('/api/jokes',(req , res)=>{
    try {
        res.status(200).send({ succuss: true, jokes });
    } catch (error) {
        console.error(error)
    }
})

app.listen(PORT ,()=>{
    console.log(`the server on PORT :${PORT}`);
})