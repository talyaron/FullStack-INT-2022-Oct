import express from "express";
import path from "path";


const app = express()
const port = 3000;


app.use(express.static("./public"))
app.use(express.json())

app.get('/style.css', (req, res)=>{
    res.sendFile(path.resolve(__dirname + "/public/dist/style.css"));
  });

app.get('/index.html' , (req ,res)=>{
    res.sendFile(__dirname + "/" + "index.html");
    
})

app.get('/project1.html' , (req ,res)=>{
    res.sendFile(__dirname + "/public/projects/" + "Prolist/index.html");
})

app.get('/project2.html' , (req ,res)=>{
    res.sendFile(__dirname + "/public/projects/" + "Ballon Games/Ballon Games/public/ballon.html");
})

app.get('/project3.html' , (req ,res)=>{
    res.sendFile(__dirname + "/public/projects/" + "Bite-Away-group2-orel-amit-dor/intro/intro.html");
})


app.listen(port , ()=>{
    console.log(`Port On ${port}`);
})