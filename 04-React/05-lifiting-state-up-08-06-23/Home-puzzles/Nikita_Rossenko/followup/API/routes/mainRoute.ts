import {Router} from 'express'
import { addBalloons, getBalloons } from '../controllers/balloonController'

const router = Router()


router.get("/get-balloons", getBalloons)
router.post("/add-balloon", addBalloons)

export default router