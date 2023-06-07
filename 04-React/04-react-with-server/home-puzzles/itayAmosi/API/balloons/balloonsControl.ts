import BallonModel from "./balloonsModel";

export const creatBalloon = async (req: any, res: any) => {
  try {
    const { name, src } = req.body;

    const balloonDB = await BallonModel.create({
      name,
      src,
    });
    console.log(balloonDB);
    res.send({ balloonDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getBalloons = async (req: any, res: any) => {
  const balloonDB = await BallonModel.find({});
  console.log(balloonDB);
  res.send({ balloonDB });
};

export const deletBalloon = async (req: any, res: any) => {
  try {
    const { _id } = req.body;

    const balloonDB = await BallonModel.findByIdAndDelete({
      _id,
    });
    console.log(balloonDB);
    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
