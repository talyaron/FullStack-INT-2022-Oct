"use strict";

var fs = require('fs'); // fs.writeFile('text.txt' , "OrelKarakoSADsadqwd" , (err) => {
//     if(err) throw err ;
//     console.log("saved!");
// });


fs.appendFile('text.txt', ' asdasdasdasdasd new One.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
fs.open('mynewfile2.ts', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
  console.log(file);
});