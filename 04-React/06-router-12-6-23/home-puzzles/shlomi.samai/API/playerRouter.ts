import {Router} from 'express'
import { addPlayer } from './playerControl'

const router=Router()
router.post("/add-player",addPlayer)
export default router