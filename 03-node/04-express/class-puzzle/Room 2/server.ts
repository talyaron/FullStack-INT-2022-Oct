import express from 'express'
import fs from 'fs'
const app = express()

app.get('/style.css', function (req, res) {

    const style = fs.readFileSync('./style.css',
    {encoding:'utf8', flag:'r'})
    
      res.send(style)

    })
    
app.get('/', function (req, res) {

    const webPage = fs.readFileSync('./index.html',
    {encoding:'utf8', flag:'r'})

    res.send(webPage)

  })

  app.listen(5000)
 