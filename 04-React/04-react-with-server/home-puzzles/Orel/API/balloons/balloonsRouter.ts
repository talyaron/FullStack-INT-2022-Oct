import { Router } from "express";
import {
    createBalloon,
    getBalloons, 

} 
from './balloonsControl'

const BalloonsRouter = Router();

BalloonsRouter
.get('/get-balloons' , getBalloons)
.post('/create-balloon' , createBalloon)



export default BalloonsRouter