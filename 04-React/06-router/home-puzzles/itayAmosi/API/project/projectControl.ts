import ProjectModel from "./projectModel";



export async function addProject(req: any, res: any) {
    try {
      const { name, src1, src2, src3, src4, src5 } = req.body;
  
      const projectDB = await ProjectModel.create({ name, src1, src2, src3, src4, src5 });
      res.send({ ok: true, Project: projectDB });
    } catch (error:any) {
      console.error(error);
      res.status(500).send({ ok: false, error });
    }
  }
  
//   export async function getPlayers(req: any, res: any) {
//     try {
//       const playersDB = await PlayerModel.find({});
//       console.log(playersDB)
//       res.send({ ok: true, players: playersDB });
//     } catch (error: any) {
//       console.error(error);
//       res.status(500).send({ ok: false, error });
//     }
//   }