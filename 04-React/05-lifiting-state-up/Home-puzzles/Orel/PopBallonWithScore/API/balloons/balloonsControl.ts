import BalloonModel from './balloonsModel'


export const getBalloons = async (req: any, res: any) => {
    try {
        const balloons = await BalloonModel.find({})
        if (!balloons) return res.status(401)
        res.status(201).send({ ok: true, balloons })

    } catch (error) {
        console.error(error)
        res.status(500).send({ ok: false })
    }
}
export const createBalloon = async (req: any, res: any) => {
    try {
        const { name, src } = req.body
        if (!name) throw new Error("no found name")
        if (!src) throw new Error("no found src")
        console.log(name, src);
        const newBalloon = await BalloonModel.create({name, src})
        if (!newBalloon) return res.status(401)
        res.status(201).send({ ok: true, newBalloon })
        console.log(newBalloon);

    } catch (error) {
        console.error(error)
        res.status(500).send({ ok: false })
    }
}

export const getScoreByIdAndUpdateByOne = async (req: any, res: any) => {
    try {
      const { id } = req.body;
      if (!id) throw new Error("No balloon id");
      const balloon = await BalloonModel.findByIdAndUpdate(id, { $inc: { score: 1 } }, { new: true });
      if (!balloon) throw new Error("No balloon found with this id in the DB");
      res.status(200).send({ ok: true, scoreNow: balloon.score });
    } catch (error) {
      console.error(error);
      res.status(500).send({ ok: false });
    }
  };

  export const resetScores = async (req: any, res: any) => {
    try {
      const balloons = await BalloonModel.find({});
      if (!balloons || balloons.length === 0) {
        throw new Error("No balloons found");
      }
  console.log(balloons)
      const updatePromises = balloons.map(async (balloon: any) => {
        const { _id } = balloon;
        console.log(_id)
        const updatedBalloon = await BalloonModel.findByIdAndUpdate(_id, { score: 0 });
        return updatedBalloon;
      });
  
      await Promise.all(updatePromises);
  
      res.status(200).send({ ok: true, message: "Reset succeeded" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ ok: false });
    }
  };
  