import express from "express";
const router = express.Router();

import { addProject, getProjects } from "./projectControl";

router
    .post("/add-project", addProject)
    .get("/get-projects", getProjects)

export default router;
