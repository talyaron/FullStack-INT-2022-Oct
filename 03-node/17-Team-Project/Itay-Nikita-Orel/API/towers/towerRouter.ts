import {Router} from "express";
import { createTower, deleteTower, getTowers } from "./towerControl";
import { adminAccess } from "../users/userMiddlwares";


const towerRouter = Router()

towerRouter
.get("/get-towers",adminAccess ,getTowers )
.post("/create-tower",adminAccess,createTower)
.delete("/delete-tower",adminAccess,deleteTower)

export default towerRouter