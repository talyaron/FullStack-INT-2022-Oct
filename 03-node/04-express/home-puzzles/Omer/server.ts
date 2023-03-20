import express from "express"
import fs from "fs"
const app = express();

app.use(express.static(__dirname + `/public`));

app.get('/main', function (req, res) {
    const data = fs.readFileSync('./main.html',
        { encoding: 'utf8', flag: 'r' });
    res.send(data)
})

app.get('/second', function (req, res) {
    const data = fs.readFileSync('./second.html',
        { encoding: 'utf8', flag: 'r' });
    res.send(data)
})

app.listen(3000, () => console.log("server listens on port 3000/main")
)
