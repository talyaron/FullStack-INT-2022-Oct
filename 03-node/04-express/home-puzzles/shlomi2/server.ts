// cmd
// nodemon Server.ts

console.log("read")
console.log(__dirname)
import fs from 'fs'

import express from 'express'

const app = express()
app.use(express.static(__dirname+'/public'))
app.get('/', function (req, res) {
    const htmlFile = fs.readFileSync('./index.html',
    {encoding:'utf8', flag:'r'});

  res.send(htmlFile)
})

app.get('/login', function (req, res) {

  res.send("shlomiLogin")
})

app.listen(3000)

