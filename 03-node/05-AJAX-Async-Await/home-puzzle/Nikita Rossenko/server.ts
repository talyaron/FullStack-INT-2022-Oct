import express from 'express';
import fs from 'fs'
const app = express();

app.use(express.static('./public'))

app.get('/', (req,res) => {

    const index = fs.readFileSync('index.html', {encoding:'utf8', flag:'r'})
    res.send(index)
})
app.listen(5000, () => {
    console.log("Server is running on port 5000")
})