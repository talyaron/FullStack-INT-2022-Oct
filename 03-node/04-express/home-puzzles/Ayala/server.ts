
import express from 'express'
import fs from 'fs'
const app = express()

app.use(express.static(__dirname + '/public'));

//routes
app.get('/', function (req, res) {
    const indexFile = fs.readFileSync('./index.html',
            {encoding:'utf8', flag:'r'});

  res.send(indexFile);
})


  
app.get('/', function (req, res) {
  const indexFile = fs.readFileSync('./app.html',
  {encoding:'utf8',flag:'r'});
  res.send(indexFile)
 
  
})





app.listen(3000)