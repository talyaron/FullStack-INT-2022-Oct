import ProjectModel from "./projectModel";


export async function addProject (req: any , res:any){
    try {
        const {name ,img ,description} = req.body;

        const projectDB = await ProjectModel.create({name,img,description});
        res.send({ok:true,projectDB})
    } catch (error:any) {
        console.error("cant add a project");
        res.status(500).send({ ok: false, error });
    }
}


export async function getProjects (req:any,res:any){
    try {
        const projectDB = await ProjectModel.find({});
        res.send(projectDB)

    } catch (error:any) {
        console.error("cant get projects");
      res.status(500).send({ ok: false, error });
    }
}

export async function getProjectsById (req:any,res:any){
    try {
        const {projectId} = req.query;
        console.log(req.query);
        if(!projectId) throw new Error("no project id!")
        const projectDB = await ProjectModel.findById(projectId);
        res.send(projectDB)
        
    } catch (error:any) {
        console.error(error);
      res.status(500).send({ ok: false, error });
    }
}