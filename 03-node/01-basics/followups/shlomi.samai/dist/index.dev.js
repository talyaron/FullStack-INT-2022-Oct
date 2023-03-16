"use strict";

var fs = require('fs');

var content = 'Some content!';
fs.writeFile('./test.txt', content, function (err) {
  if (err) {
    console.error(err);
  } // file written successfully

});