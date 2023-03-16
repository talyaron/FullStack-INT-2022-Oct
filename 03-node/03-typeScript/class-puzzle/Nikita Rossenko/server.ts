import express from 'express'
const app = express()

app.get('/', function (req, res) {
    res.send('<h1 class="test_class" style="background-color:green">Test</h1> <ul><li style="color:green">1</li><li style="color:red">2</li><li style="color:blue">3</li><li style="color:aqua">4</li></ul>')
  })

  app.listen(5000)
 