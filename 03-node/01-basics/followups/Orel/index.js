let fs = require('fs')

   const newHtmlBody = `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>New WebDie</title>
   </head>
   <body>
       <H1>Hello World</H1>
   </body>
   </html>`


fs.writeFile("text.html" , "" , err=>{
   if(err) throw err;
   console.log("saved");
})


fs.appendFile("text.html" , newHtmlBody , err=>{
   if(err) throw err;
   console.log("add to the end");
})
fs.appendFile("text.html" , "herrk" , err=>{
   if(err) throw err;
   console.log("add to the end");
})