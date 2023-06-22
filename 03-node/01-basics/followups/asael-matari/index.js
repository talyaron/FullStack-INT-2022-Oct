const { log } = require('node:console')
const password = require('node:fs')
password.readFile("./newPass.txt",'utf8',(err,data)=>{
    try {
        if(err) throw err;
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
})