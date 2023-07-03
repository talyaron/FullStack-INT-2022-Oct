import PlayerModel from "./playersModel";



export async function addPlayer(req: any, res: any) {
    try {
      const { name, src1, src2 } = req.body;
  
      const playerDB = await PlayerModel.create({ name, src1, src2 });
      res.send({ ok: true, player: playerDB });
    } catch (error:any) {
      console.error(error);
      res.status(500).send({ ok: false, error });
    }
  }
  
  export async function getPlayers(req: any, res: any) {
    try {
      const playersDB = await PlayerModel.find({});
      console.log(playersDB)
      res.send({ ok: true, players: playersDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ ok: false, error });
    }
  }