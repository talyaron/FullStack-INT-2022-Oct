import {Router} from 'express'
import { createPlayer } from './playerControl'

const router = Router()

router
.post("create-player" , createPlayer)


export default router