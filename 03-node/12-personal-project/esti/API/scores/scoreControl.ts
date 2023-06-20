
import { ScoreModel } from './scoreModel';

export const getScores = async (req: any, res: any) => {
    try {
      console.log(req.body)
      const { name, score, competitionPlace } = req.body;
      console.log( name, score, competitionPlace );
      const scoreDB = await ScoreModel.find();
      if(!scoreDB) throw new Error ("no scoreDB from get")
      console.log(scoreDB)
      res.status(201).send({ ok: true, scoreDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
      
    }
  };
  
  export const addScore = async (req: any, res: any) => {
    try {
      const { userId, playerName, score, competitionPlace } = req.body;
      // console.log(name, password);
      
      console.log(req.body);
             
      // add users to DB;
      const scoreDB = await ScoreModel.create({ userId, playerName, score, competitionPlace });
  
      console.log(scoreDB);
      // console.log(UserModel);
      // console.log("userDB");
  
      res.status(201).send({ ok: true, score:scoreDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };
  

  export const updateScore = async (req: any, res: any) => {

    try {
      // const user = req.user;
      console.log(req.body)
      let { userId, score } = req.body;
      userId = userId.trim();
      console.log(userId)
      console.log(score)
  
      const scoreDB = await ScoreModel.findOneAndUpdate({userId:userId},{score})
      console.log(scoreDB)
      
     if(!scoreDB) throw new Error ("no scoreDB")
  
      res.send({ ok: true,scoreDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  };

