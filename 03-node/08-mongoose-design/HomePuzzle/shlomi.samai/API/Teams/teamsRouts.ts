import express from "express";
const router = express.Router();
import {createTeam} from './teamsControl'

router.post('/create-team',createTeam)

export default router; 

