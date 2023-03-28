import express from "express";
const router = express.Router();
import { getAllStudents, createStudent } from "../controller/students";

router.route("/").get(getAllStudents).post(createStudent);
// router.route("/:id").get(getArticle).patch(updateArticle).delete(deleteArticle);

// module.exports = router;
export { router };
