// const fs = require('node:fs');

// // console.log("hi world")

// // console.log("Hi all....");

// // const x = {a:1, b:3};
// // const y = Math.random()*x.b;
// // console.log("Y is equal to ",y);

// fs.writeFile("./pwd.txt", 'itay is the best' , `utf8`, (err, data) => {
//     try {
//         if (err) throw err;
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     });



const express = require('express');
const app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/itay', function (req, res) {
  res.send('Hello new itay web link-!');
});