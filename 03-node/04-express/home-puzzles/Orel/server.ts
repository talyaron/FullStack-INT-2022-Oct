import express from "express";


const app = express()
const port = 3000;


app.use(express.static("public"))
app.use(express.json())

app.get('/style.css', (req, res)=>{
    res.sendFile(__dirname + "/public/dist/style.css");
  });

app.get('/index.html' , (req ,res)=>{
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/project1.html' , (req ,res)=>{
    res.sendFile(__dirname + "/public//projects/" + "Prolist/index.html");
})



app.listen(port , ()=>{
    console.log(`Port On ${port}`);
})