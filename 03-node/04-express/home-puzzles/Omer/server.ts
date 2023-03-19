import express from 'express'
import fs from 'fs'
const app = express()

app.get('/main', function (req, res) {
    const data = fs.readFileSync('./main.html',
        { encoding: 'utf8', flag: 'r' });
        console.log(data);
    res.send(data)
})

app.get('/second', function (req, res) {
    const data = fs.readFileSync('./second.html',
        { encoding: 'utf8', flag: 'r' });
        console.log(data);
    res.send(data)
})

app.listen(3000, () => console.log("server listens on port 3000")
)
