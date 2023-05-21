import PlayerModel from "../Players/playersModel";
import TeamModel from "../Teams/teamsModel";
import { playerTeamModel } from "./playersAndTeamsModel";

export const createPlayerAndTeam = async (req:any, res:any) => {
    try {
      const {playerID, teamID} = req.body;
        console.log(playerID)
      const playerDB = await PlayerModel.findById(playerID);
      if(!playerDB) throw new Error('Couldnt find player');

      const teamDB = await TeamModel.findById(teamID);
      if(!teamDB) throw new Error('Couldnt find team');

      const teamAndPlayerDB = await playerTeamModel.create({team:teamDB, player:playerDB})

    
      res.send({teamAndPlayer:teamAndPlayerDB})
    } catch (error:any) {
      console.error(error);
        res.status(500).send({ error: error.message });
    }
  };