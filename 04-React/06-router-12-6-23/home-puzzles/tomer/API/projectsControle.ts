import projectModel from "./projectsModel";

export async function addProject(req: any, res: any) {
  try {
    const { name, work } = req.body;

    const projectDB = await projectModel.create({ name, work });
    res.send({ ok: true, project: projectDB });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
}

export async function getProjects(req: any, res: any) {
  try {
    const projectDB = await projectModel.find({});
    res.send({ ok: true, project: projectDB });
  } catch (error) {
    res.status(500).send({ ok: false, error });
  }
}
