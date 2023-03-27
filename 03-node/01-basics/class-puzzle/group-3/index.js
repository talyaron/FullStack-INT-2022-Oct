const fs = require('node:fs');

fs.readFile("./pwd.txt", 'utf8', (err, data) => {
    try {
        if (err) throw err;
        console.log(data)
    } catch (error) {
        console.log(error)
    }
})


fs.writeFile(`./testing.txt`, 'whyyyyy', (err) => {
    if (err) throw err;
    fs.readFile("./testing.txt", 'utf8', (err, data) => {
        try {
            if (err) throw err;
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    })
});
