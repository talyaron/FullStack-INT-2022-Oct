import express from "express";
const router = express.Router();
import {
  getAllArticles,
  createArticle,
  getArticle,
  updateArticle,
  deleteArticle,
} from "../controller/articles";

router.route("/").get(getAllArticles).post(createArticle);
router.route("/:id").get(getArticle).patch(updateArticle).delete(deleteArticle);

// module.exports = router;
export { router };
