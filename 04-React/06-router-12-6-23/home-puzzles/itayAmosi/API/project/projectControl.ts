import ProjectModel from "./projectModel";



export async function addProject (req: any, res: any) {
    try {
      const { name, src1, src2, src3, src4 } = req.body;
  
      const projectDB = await ProjectModel.create({ name, src1, src2, src3, src4 });
      res.send({ ok: true, Project: projectDB });
    } catch (error:any) {
      console.error(error);
      res.status(500).send({ ok: false, error });
    }
  }
  
  export async function getProjects (req: any, res: any){
    try {
        const projectDB = await ProjectModel.find({});

        res.send({ ok: true, Project: projectDB });
    } catch (error:any) {
        console.error("cant get projects");
      res.status(500).send({ ok: false, error });
    }
}