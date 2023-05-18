import express from 'express'
const router = express.Router();
import {createPlayerAndTeam} from './playersAndTeamsControl'
    
router.get('/create-Player-And-Team',createPlayerAndTeam)

export default router;