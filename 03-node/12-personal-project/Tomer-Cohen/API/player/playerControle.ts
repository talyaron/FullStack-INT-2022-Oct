import PlayerModel from "./playerModel";
import jwt from "jwt-simple";
import { Error } from "mongoose";
const secret = process.env.JWT_SECRET;


export const getPlayers = async (req: any, res: any) => {
    try {
      const Players = await PlayerModel.find({});
      res.send({ Players });
    } catch (error) {
      console.error(error);
      res.status(500).send({Error: Error.Messages})
    }
  };


  export const addPlayer = async (req: any, res: any) => {
    try {
      const { userName, position ,positionType } = req.body;
      console.log(userName, position, positionType );
  
      const playerDB = await PlayerModel.create({ userName, position ,positionType });
      console.log(playerDB);
  
      res.status(201).send({ ok: true });
    } catch (error) {
      console.error(error);
      res.status(500).send({Error: Error.Messages})
    }
  };

  export const deletePlayer = async (res: any, req: any) => {
    try {
      const { _id } = req.body;
  
      const deleteplayer = await PlayerModel.deleteOne({ _id });
      const Players = await PlayerModel.find({});
      res.status(201).send({ ok: true });
    } catch (error) {
      console.error(error);
      res.status(500).send({Error: Error.Messages})
    }
  };



  export const updatePlayerType = async (req: any, res: any) => {
    try {
      const { playerId, PositionType } = req.body;
      const playerDB = await PlayerModel.updateOne(
        { PositionType }
      );
      res.status(201).send({ ok: true, playerDB });
    } catch (error) {
      console.error(error);
      res.status(500).send({Error: Error.Messages})
    }
  };

  export const getPlayer = async (req: any, res: any) => {
    try {
      const { player } = req.cookies;
      console.log(player);
      if (!secret) throw new Error("No secret");
  
      const decoded = jwt.decode(player, secret);
      console.log(decoded);
  
      const { playerId, role } = decoded;
  
      if (role === "admin") console.log("Full access");
  
      const playerDB = await PlayerModel.findById(playerId);
  
      res.send({ ok: true, player: playerDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({Error: Error.Messages})
    }
  };