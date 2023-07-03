import footballPlayerModel from "./footballPlayersModule";

export async function addfootballPlayer(req: any, res: any) {
  try {
    const { image } = req.body;

    const footballPlayerDB = await footballPlayerModel.create({ image });
    res.send({ ok: true, footballPlayer: footballPlayerDB });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
}

export async function getFootballPlayers(req: any, res: any) {
  try {
    const footballPlayersDB = await footballPlayerModel.find({});
    console.log(footballPlayersDB)
    res.send({ ok: true, footballPlayers: footballPlayersDB });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
}
