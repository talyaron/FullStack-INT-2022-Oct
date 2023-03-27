// cmd
// nodemon Server.ts

console.log("read")
console.log(__dirname)


import express from 'express'

const app = express()
app.use(express.static(__dirname+'/public'))
app.get('/', function (req, res) {



})

app.get('/login', function (req, res) {

  res.send("shlomiLogin")
})

app.listen(3000)

