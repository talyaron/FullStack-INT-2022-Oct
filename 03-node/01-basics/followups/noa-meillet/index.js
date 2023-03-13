const fs= require('node:fs');
console.log (`Hi Noa`);

fs.readFile("./password.txt", 'utf8', (err, data) => {
  try {
    if (err) throw err;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});