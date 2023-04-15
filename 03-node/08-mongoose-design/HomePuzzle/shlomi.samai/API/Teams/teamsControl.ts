import teamsModel from "./teamsModel";
import PlayerModel from "./teamsModel"; 

export const getTeam= async (req:any,res:any)=>{
    try { 
      const teams=await teamsModel.find({})
       res.send({teams})
       console.log(teams)
    } catch (error:any) {
        console.error(error)
        res.status(500).send({error:error.message})
    }
}

export const addTeam= async (req:any,res:any)=>{
    try {
        const {name, src}=req.body
//add player to db
      await PlayerModel.create({pastTeamsName:name,src:src})
        res.status(201).send({ ok: true});
      

    } catch (error:any) {
        console.error(error)
        res.status(500).send({ error: error.message });
    }
} 

export const deletTeam= async (req:any,res:any) => {
    try {
      const { _id } = req.body;
      if (!_id) throw new Error("no uid in data");
      
      await teamsModel.deleteOne({_id})
      const teams=await teamsModel.find({})
      res.send({ ok: true,teams});
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }



export const updateTeam= async (req:any,res:any) => {
    try {
      const { name, _id } = req.body;
  
      if (!name) throw new Error("No name in data");
      if (!_id) throw new Error("No uid in data");
  
      const doc = await teamsModel.findById(_id)
      if (!doc) throw new Error("model");
      doc.pastTeamsName = name;
      await doc.save();
  const teams=await teamsModel.find({})
  
      res.send({ok:true,teams})
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }