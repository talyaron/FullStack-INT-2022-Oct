import { Router } from "express";
import {
    createBalloon,
    getBalloons,
    getScoreByIdAndUpdateByOne,
    resetScores, 

} 
from './balloonsControl'

const BalloonsRouter = Router();

BalloonsRouter
.get('/get-balloons' , getBalloons)
.post('/create-balloon' , createBalloon)
.post('/get-score-by-id-and-update-by-one' , getScoreByIdAndUpdateByOne)
.get('/reset-scores' , resetScores)


export default BalloonsRouter