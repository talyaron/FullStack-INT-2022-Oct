import express from "express";
const app = express();


//static file
app.use(express.static('./client'));

app.get("/api/get-users", (req,res) => {
    try {
        res.status(200).send({ok:true})
    } catch (error) {
        res.status(500).send({error:error})
    }
})


app.listen(3000, () => {
  console.log("server listen on port 3000");
});
