import express from "express";
const router = express.Router();
import { Response, Request } from "express";

import {
    getUsers,
    addUser,
    updateUser,
    updateUserName,
    deleteUser,
} from "../Controller/controller";

router
    .get("/get-users", getUsers)
    .post("/add-user", addUser)
    .put("/update-user", updateUser)
    .patch("/update-user-name", updateUserName)
    .delete("/delete-user", deleteUser);

export default router;
