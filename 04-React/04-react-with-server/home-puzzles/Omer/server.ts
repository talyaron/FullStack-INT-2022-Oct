import express from "express";
const app = express();


//static file
app.use(express.static('./client'));

interface Balloon {
    width:number,
    height:number,
    color:string
}

const balloon1:Balloon = {width: 10, height:10, color:"blue"}
const balloon2:Balloon = {width: 6, height:10, color:"red"}
const balloon3:Balloon = {width: 8, height:10, color:"green"}
const balloon4:Balloon = {width: 12, height:10, color:"yellow"}

const balloons = [balloon1,balloon2,balloon3,balloon4]

app.get("/api/get-balloons", (req,res) => {
    try {
        res.status(200).send({balloons})
    } catch (error) {
        res.status(500).send({error:error})
    }
})


app.listen(3000, () => {
  console.log("server listen on port 3000");
});
