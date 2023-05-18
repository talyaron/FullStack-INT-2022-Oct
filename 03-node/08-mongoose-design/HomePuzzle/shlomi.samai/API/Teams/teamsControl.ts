import TeamModel from "./teamsModel"
import PlayerModel from "../Players/playersModel";

export const createTeam = async (req:any, res:any) => {
  try {
    const {name} = req.body;
    const courseDB = await TeamModel.create({name});
    res.send({course:courseDB})
  } catch (error:any) {
    console.error(error);
      res.status(500).send({ error: error.message });
  }
};