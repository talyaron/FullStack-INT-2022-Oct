import express from "express";
const app = express();


//static file
app.use(express.static('./client'));

interface Balloon {
    width:string,
    height:string,
    color:string
}

const balloon1:Balloon = {width: '30', height:'40', color:"blue"}
const balloon2:Balloon = {width: '20', height:'50', color:"red"}
const balloon3:Balloon = {width: '10', height:'30', color:"green"}
const balloon4:Balloon = {width: '25', height:'60', color:"yellow"}

const balloons = [balloon1,balloon2,balloon3,balloon4]

app.get("/api/get-balloons", (req,res) => {
    try {
        res.status(200).send({balloons})
    } catch (error) {
        res.status(500).send({error:error})
    }
})


app.listen(2000, () => {
  console.log("server listen on port 2000");
});
