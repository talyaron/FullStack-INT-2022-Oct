import { Router } from "express";
import { addProject, getProjects } from "./projectsControle";

const router = Router();

router.post("/add-project", addProject).get("/get-projects", getProjects);

export default router;
