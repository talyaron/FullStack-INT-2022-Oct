import PlayerModel from "./playersModel"



export const addPlayer= async (req:any,res:any)=>{
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
}

export const deletePlayer= async (req:any,res:any) => {
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
  }

  export const getPlayer= async (req:any,res:any)=>{
    try {
      const players=await PlayerModel.find({})
       res.send({players})
       console.log(players)   
    } catch (error:any) {
        console.error(error)
        res.status(500).send({error:error.message})
    }
  
}

export const updatePlayerName=  async (req:any,res:any) => {
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
}