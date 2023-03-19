import express from 'express'
import fs from 'fs'
const app = express()

app.get('/', function (req, res) {
    const data = fs.readFileSync('./index.html',
        { encoding: 'utf8', flag: 'r' });
        console.log(data);
    res.send(data)
})

app.get('/login', function (req, res) {
    
        
    res.send('Login')
})

app.listen(3000, () => console.log("server listens on port 3000")
)
