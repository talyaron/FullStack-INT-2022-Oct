
const fs = require('node:fs');


console.log("password");

// // Generate a new password
const password = 'myNewPassword123';

// Create a new file with the password as the contents
fs.readFile("./password.txt", 'utf8', (err) => {
    try {
        if (err) throw err;
  console.log('Password saved to password.txt');
    } catch (error) {
        
    }
  
});

