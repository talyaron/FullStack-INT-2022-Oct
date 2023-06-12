import BallonModel from "./balloonsModel";

export const creatBalloon = async (req: any, res: any) => {
  try {
    const { name, src, score } = req.body;

    const balloonDB = await BallonModel.create({
      name,
      src,
      score,
    });
    res.send({ balloonDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getBalloons = async (req: any, res: any) => {
  const balloonDB = await BallonModel.find({});
  res.send({ balloonDB });
};