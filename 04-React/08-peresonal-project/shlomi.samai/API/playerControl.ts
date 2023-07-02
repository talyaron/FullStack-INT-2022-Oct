
import playerModel from "./playerModel";

export async function addPlayer(req:any,res:any){
    try {
      const {image}=req.body 
      const playerDB= await playerModel.create({image})
      res.send({ok:true,player:playerDB})
      
    } catch (error) {
        console.log(error)
        res.status(500).send({ok:false,error})
    }
}

export async function getPlayer(req:any, res:any) {
  try {
    
    const playerDB= await playerModel.find({})
    res.send({ok:true,player:playerDB})
    
  } catch (error) {
      console.log(error)
      res.status(500).send({ok:false,error})
  }
}