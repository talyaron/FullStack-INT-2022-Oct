import express from "express";
const router = express.Router();

import { addComment } from "./commentControl";

router
  .post("/add-comment", addComment)
//   .get("/get-projects", getProjects)

export default router;
