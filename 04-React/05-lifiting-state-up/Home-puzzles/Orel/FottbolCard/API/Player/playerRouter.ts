import {Router} from 'express'
import { createPlayer, getPlayers } from './playerControl'

const router = Router()

router
.get("/get-players" , getPlayers)
.post("/create-player" , createPlayer)



export default router