import express from "express";
import mongoose, { Schema } from "mongoose";


interface Player{
    userName: String,
    position:String,
}

export enum PositionType {
  SUBSTITUTE = "SUBSTITUTE",
  ATTACKER = "ATTACKER",
  MIDFIELDER = "MIDFIELDER",
  DEFENDER = "DEFENDER",
  GOALKEEPER = "GOALKEEPER",
}

export const PlayerSchema = new Schema({
  userName: {require: true, type:String},
  position: {require : true, type:String},
  positionType:{
    type: String,
    enum: PositionType,
    default: PositionType.SUBSTITUTE
  },
})

export const defenderPlayers= new Schema({
    PositionType: {type:PositionType},
})
export const attackerPlayers = new Schema({
  PositionType:{type:PositionType}
})
export const midfilderPlayers = new Schema({
  PositionType:{type:PositionType}
})
export const goalkeeperPlayers = new Schema({
  PositionType:{type:PositionType}
})

export const defenderPlayersModel = mongoose.model('defenderPlayers',defenderPlayers)

export const attackerPlayersModel = mongoose.model('attackerPlayers', attackerPlayers);

export const midfilderPlayersModel = mongoose.model("midfilderPlayers", midfilderPlayers);

export const goalkeeperPlayersModel = mongoose.model("goalkeeperPlayers", goalkeeperPlayers);


export const PlayerModel= mongoose.model("players",PlayerSchema)

export default PlayerModel;