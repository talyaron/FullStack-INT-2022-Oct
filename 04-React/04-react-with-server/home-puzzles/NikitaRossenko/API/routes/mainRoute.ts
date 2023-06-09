import {Router} from 'express'
import { getBalloons } from '../controllers/balloonController'

const router = Router()


router.get("/get-balloons", getBalloons)