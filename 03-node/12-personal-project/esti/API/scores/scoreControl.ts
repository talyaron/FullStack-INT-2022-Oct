// import { getScore } from './scoreControl';
// import UserModel from "../users/userModel";
import ScoreModel from "./scoreModel";


export const getScores = async (req: any, res: any) => {
    try {
      const { name, score, competitionPlace } = req.body;
      console.log( name, score, competitionPlace );
      let scoreDBArray = []
      for (let i = 1; i < 10; i++ ){
          const scoreDB = await ScoreModel.findOne({ i });
          console.log(scoreDB)
          console.log("scoreDB")
          // scoreDBArray.push(scoreDB)
        };

      interface CustomError {
        code: number;
        message: string;
      }
  
      if (!scoreDBArray) throw new Error("Username or password are inncorect");
      if (!scoreDBArray){
          // If an error occurs
          const error: CustomError = {
            code: 1001,
            message: "No play user"
          };
          res.status(1001).send({ error });
        };
        
    //   if (!secret) throw new Error("Missing jwt secret");
//   
    //   const token = jwt.encode({ userId: userDB._id, role: "public" }, secret);
    //   console.log(token);
    //   console.log("token");
  
    //   res.cookie("user", userDB._id , { maxAge: 5000000, httpOnly: true });
  
    //   res.status(201).send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
      
    }
  };
  
  export const addScore = async (req: any, res: any) => {
    try {
    //   res.status(201).send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
      
    }
  };
  export const updateScore = async (req: any, res: any) => {
    try {
    //   res.status(201).send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
      
    }
  };
