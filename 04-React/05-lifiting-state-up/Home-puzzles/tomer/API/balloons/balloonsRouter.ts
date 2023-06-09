import { Router } from "express";
import { addballoon,getBalloons } from "./balloonsControle";

const router= Router();

router.post("/add-balloon",addballoon).get("/get-balloons",getBalloons)

export default router;