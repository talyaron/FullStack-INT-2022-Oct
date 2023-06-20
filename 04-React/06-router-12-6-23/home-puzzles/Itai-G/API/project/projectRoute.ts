import {Router} from "express";
import { addProject , getProjects, getProjectsById} from "./projectControl";

const router = Router();


router
.post("/add-project",addProject)
.get("/get-projects",getProjects)
.get("/get-Projects-By-Id",getProjectsById)

export default router