import GameModel from "./gameModel"
import jwt from "jwt-simple";
import { Error } from "mongoose";
const secret = process.env.JWT_SECRET;


export const getGames= async (req:any,res:any)=>{
    try {
        const games= await GameModel.find({})
        res.send({games});
    } catch (error) {
      console.error(error)  
    }
};

export const addGame = async(req:any,res:any)=>{
    try {
        const {Games,day} = req.body;
        console.log(Games,day);

        const gameDB = await GameModel.create({Games,day});
        console.log(gameDB);

        res.status(201).send({ok: true})
    } catch (error) {
        console.error(error)
    }
};

export const deleteGame = async (res:any,req:any)=>{
    try {
        const {_id}= req.body;
        const deleteGame= await GameModel.deleteOne({_id})
        const games = await GameModel.find({});
        res.status(201).send({ ok:true })
    } catch (error) {
        console.error(error)
   
    }
};

export const getGame = async (req: any, res: any) => {
    try {
      const { game } = req.cookies;
      console.log(game);
      if (!secret) throw new Error("No secret");
  
      const decoded = jwt.decode(game, secret);
      console.log(decoded);
  
      const { gameId, role } = decoded;
  
      if (role === "admin") console.log("Full access");
  
      const gameDB = await GameModel.findById(gameId);
  
      res.send({ ok: true, game: gameDB });
    } catch (error: any) {
      console.error(error);
    }
  };