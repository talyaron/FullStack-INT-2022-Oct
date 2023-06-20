import CommentModel from "./commentModel";
import jwt from "jwt-simple";
import ProjectModel from "../project/projectModel";



export async function addComment (req: any, res: any) {
    try {
      const { comment } = req.body;
      const { currentUser } = req.cookies;

  console.log(currentUser);

  
      const commentDB = await CommentModel.create({ userId: currentUser, comment });

      res.send({ ok: true, commentDB });
    } catch (error:any) {
      console.error(error);
      res.status(500).send({ ok: false, error });
    }
  }
  
//   export async function getProjects (req: any, res: any){
//     try {
//         const projectDB = await ProjectModel.find({});
        
//         res.send({ ok: true, projectDB });
//     } catch (error:any) {
//         console.error("cant get projects");
//       res.status(500).send({ ok: false, error });
//     }
//   }
//   export async function getProjectById (req: any, res: any){
//     try {
//       const {projectId} = req.query;
//       console.log(projectId);
//       if(!projectId) throw new Error("no project id!")
//       const projectDB = await ProjectModel.findById(projectId);

//         res.send({ ok: true, projectDB  });
//     } catch (error:any) {
//         console.error(error.message);
//       res.status(500).send({ ok: false, error });
//     }
// }