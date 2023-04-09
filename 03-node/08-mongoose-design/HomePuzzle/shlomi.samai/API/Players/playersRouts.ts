import express from "express";
const router = express.Router();
import PlayerModel from "./playersModel"; 

router.post("/add-players", async (req,res)=>{
    try {
        const {name, url}=req.body
//add player to db
      const playerDB= await PlayerModel.create({name,url})
      console.log(playerDB)
        res.status(201).send({ ok: true });
      

    } catch (error:any) {
        console.error(error)
        res.status(500).send({ error: error.message });
    }
})

router.delete("/delete-player",async (req, res) => {
    try {
      const { _id } = req.body;
      if (!_id) throw new Error("no uid in data");
      
      await PlayerModel.deleteOne({_id})
      const players=await PlayerModel.find({})
      res.send({ ok: true,players});
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  });

  router.get("/get-players",async (req,res)=>{
    try {
      const players=await PlayerModel.find({})
       res.send({players})
       console.log(players)   
    } catch (error:any) {
        console.error(error)
        res.status(500).send({error:error.message})
    }
  
})

router.patch("/update-player-name",async (req, res) => {
  try {
    const { name, _id } = req.body;

    if (!name) throw new Error("No name in data");
    if (!_id) throw new Error("No uid in data");

    const doc = await PlayerModel.findById(_id)
    if (!doc) throw new Error("model");
    doc.name = name;
    await doc.save();
const players=await PlayerModel.find({})

    res.send({ok:true,players})
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}); 

export default router;