import ProjectModel from "./projectModel";



export async function addProject (req: any, res: any) {
    try {
      const { name, src1, src2, src3, src4, description } = req.body;
      
      const projectDB = await ProjectModel.create({ name, src1, src2, src3, src4, description });
      res.send({ ok: true, Project: projectDB });
    } catch (error:any) {
      console.error(error);
      res.status(500).send({ ok: false, error });
    }
  }
  
  export async function getProjects (req: any, res: any){
    try {
        const projectDB = await ProjectModel.find({});
        res.send({ ok: true, projectDB });
    } catch (error:any) {
        console.error("cant get projects");
      res.status(500).send({ ok: false, error });
    }
  }
  export async function getProjectById (req: any, res: any){
    try {
      const {projectId} = req.query;
      if(!projectId) throw new Error("no project id!")
      const projectDB = await ProjectModel.findById(projectId);

        res.send({ ok: true, projectDB  });
    } catch (error:any) {
        console.error(error.message);
      res.status(500).send({ ok: false, error });
    }
}