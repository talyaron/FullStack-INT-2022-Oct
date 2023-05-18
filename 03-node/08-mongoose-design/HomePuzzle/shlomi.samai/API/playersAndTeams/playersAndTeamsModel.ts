import mongoose, {Schema}  from "mongoose";
import { PlayerSchema } from "../Players/playersModel";
import { TeamSchema } from "../Teams/teamsModel";


export const playerTeamShema= new Schema({
    team:TeamSchema,
    player:PlayerSchema,
  })

  export const playerTeamModel=mongoose.model("player-team",playerTeamShema)