import express from "express";
const router = express.Router();
import {
    addUser,
    login,
    getUsers,
}
from"./usersControl";

router
    .post("/add-user",addUser)
    .post("/login",login)
    .get("/get-users",getUsers);

    export default router