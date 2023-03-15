
const fs = require('node:fs');
fs.writeFile("./psw.txt", '74y344785475huvhbhjfnv', (err, data) => { 
    
  try {
    if (err) throw err; 
    console.log('file saved')
  } catch (error) {
      console.error(error)
  }
  })

  
const express = require('express');
const app = express();

app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/itai/itay', function (req, res) {
  res.send('vbjdvjbhdbvhdbvhdsbvhdbsvh!');
});
