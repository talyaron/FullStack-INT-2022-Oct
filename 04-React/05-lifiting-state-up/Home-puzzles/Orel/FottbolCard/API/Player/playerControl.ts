import PlayerModel from "./playerModel";




export const createPlayer = async (req:any, res:any) => {
    try {
      const { name, srcHappy, srcAngry} = req.body;
      if (!name || !srcHappy || !srcAngry ) {
        throw new Error("Invalid input");
      }
      const newPlayer = await PlayerModel.create({ name, srcHappy, srcAngry });
      if (!newPlayer) {
        throw new Error("Failed to create player");
      }
      res.status(200).send({ success: true, player: newPlayer });
    } catch (error) {
      console.error(error)
      res.status(500).send({ success: false  , error});
    }
  };

  export const getPlayers = async (req:any, res:any) =>{
    try {
            const players = await PlayerModel.find({})
            if(!players) throw new Error("no found players on DB")
            res.status(200).send({success:true , players})       
    } catch (error) {
        console.error(error)
        res.status(500).send({success:false})       
    }
  }