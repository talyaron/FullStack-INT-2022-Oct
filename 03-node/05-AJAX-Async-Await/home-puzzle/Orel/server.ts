import express from 'express'
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3000;

app.use(express.static("public"))

app.get('/randomPic' , (req , res)=>{
    res.send(uuidv4())
})
app.listen(PORT, ()=>{
    console.log(`The Server Run on PORT:${PORT}`);
})