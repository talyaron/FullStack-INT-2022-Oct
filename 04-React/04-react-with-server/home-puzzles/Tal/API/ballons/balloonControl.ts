import balloonModel from "./balloonModel";

export async function addballoon(req: any, res: any) {
  try {
    const { image } = req.body;

    const balloonDB = await balloonModel.create({ image });
    res.send({ ok: true, balloon: balloonDB });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
}

export async function getBalloons(req: any, res: any) {
  try {
    const balloonsDB = await balloonModel.find({});
    console.log(balloonsDB)
    res.send({ ok: true, balloons: balloonsDB });
  } catch (error) {
    console.log(error);
    res.status(500).send({ ok: false, error });
  }
}
