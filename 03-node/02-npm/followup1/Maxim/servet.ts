// import{v4} from 'uuid';
// console.log("hello ", v4());

import express from 'express';
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
console.log("Start listening at PORT 3000");

