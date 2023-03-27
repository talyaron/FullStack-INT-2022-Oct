const fs = require('fs');

const text = 'INT - MATANEL HARUSH'; // the text you want to write to the file

fs.writeFile('ProjectM.txt', text, (err) => {
  if (err) throw err;
  console.log('Saved!');
});
