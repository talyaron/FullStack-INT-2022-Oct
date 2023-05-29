import {Router} from "express";
import { createEnemy, deleteEnemy, getEnemies } from "./enemyControl";
import { adminAccess } from "../users/userMiddlwares";


const enemyRouter = Router()

enemyRouter
.get("/get-enemies",adminAccess ,getEnemies )
.post("/create-enemy",adminAccess,createEnemy)
.delete("/delete-enemy",adminAccess,deleteEnemy)

export default enemyRouter