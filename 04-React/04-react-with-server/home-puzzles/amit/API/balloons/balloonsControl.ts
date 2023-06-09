import BalloonModel from "./balloonsModel";

export const addBalloons = async (req:any, res:any) => {
    try {
      const { length } = req.body
      
      for(let i=0; i<length; i++){
        const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16)
        const balloonDB = await BalloonModel.create({color: randomColor, status:"init"})
      }

      const balloons = await BalloonModel.find({})
      if (!balloons) throw new Error("No balloons found");
      
      res.status(201).send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };


export const getBalloons = async (req:any, res:any) => {
    try {
      const balloonsDB = await BalloonModel.find({});
  
      res.send({ ok: true, balloonsDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

export const getPoppedBalloons = async (req:any, res:any) => {
  try {
    const poppedBalloonsDB = await BalloonModel.find({status:"popped"});

    res.send({ ok: true, poppedBalloonsDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}



  
export const updateBalloonStatus = async (req:any, res:any) => {
    try {
      const { balloonId, balloonStatus } = req.body;
      if (!balloonId) throw new Error("No balloon Id in data");
      if (!balloonStatus) throw new Error("No balloon Status in data");
      console.log("balloonId", balloonId)
      console.log("balloonStatus", balloonStatus)

      const balloon = await BalloonModel.findById(balloonId);
      if(!balloon) throw new Error("no balloon found");
      
      const updatedStatusDB = await BalloonModel.updateOne({_id: balloonId}, {status: balloonStatus});
      console.log("balloon", balloon)

      await balloon.save();
      
      res.send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }



  export const deleteBalloon = async (req:any , res:any) => {
    try {
      // const article = articles.find(article => article.uid === req.params.uid);
      // const balloon = balloons.find(balloon => balloon._id === req.params.balloonId);
      const { balloonId } = req.params;
      if (!balloonId) throw new Error("No balloon Id in data");
      
      const deletedBalloon = await BalloonModel.findOneAndDelete({_id:balloonId})
      const balloons = await BalloonModel.find({})
     
      res.send({ ok: true, balloons });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }


  export const deleteAllBalloons = async (req:any , res:any) => {
    try {
      const deletedBalloons = await BalloonModel.deleteMany({})
    
      res.send({ ok: true, });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }



