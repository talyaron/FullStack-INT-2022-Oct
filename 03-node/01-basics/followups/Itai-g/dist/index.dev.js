"use strict";

var fs = require('node:fs');

fs.writeFile("./psw.txt", '74y344785475huvhbhjfnv', function (err, data) {
  try {
    if (err) throw err;
    console.log('file saved');
  } catch (error) {
    console.error(error);
  }
});

var express = require('express');

var app = express();
app.listen(5000, function () {
  console.log('Example app listening on port 3000!');
});
app.get('/itai/itay', function (req, res) {
  res.send('vbjdvjbhdbvhdbvhdsbvhdbsvh!');
});