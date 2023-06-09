import playerModel from "./playersModel";

export async function addPlayer(req: any, res: any) {
  try {
    const { image1, image2 } = req.body;
    const playerDB = await playerModel.create({ image1, image2 });
    res.send({ ok: true, player: playerDB });
  } catch (error: any) {
    res.status(500).send({ ok: false, error });
  }
}

export async function getPlayers(req:any, res:any) {
    try {
      const playerDB = await playerModel.find({});
      res.send({ ok: true, players: playerDB });
    } catch (error) {
      res.status(500).send({ ok: false, error });
    }
  }