import express from "express";
const app = express();


//static file
app.use(express.static('./client'));

app.get("/api/get-word",(req, res)=>{
    res.send({ok:true})
})

app.listen(3000, () => {
  console.log("server listen on port 3000");
});
