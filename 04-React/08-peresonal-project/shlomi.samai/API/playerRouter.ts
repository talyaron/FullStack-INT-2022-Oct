import {Router} from 'express'
import { addPlayer, getPlayer } from './playerControl'

const router=Router()
router.
post("/add-player",addPlayer)
.get("/get-player",getPlayer)
export default router 