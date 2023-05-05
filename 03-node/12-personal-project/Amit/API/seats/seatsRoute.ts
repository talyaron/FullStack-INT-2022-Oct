import express from "express";
const router = express.Router();

import {
  getSeats,
  pickOneSeat,
  getPickedSeats,
  getMovieSeats, 
} from "./seatsControl"

router
  .get("/get-seats", getSeats)
  .post("/pick-one-seat",pickOneSeat)
  .get("/get-picked-seats",getPickedSeats)
  .post("/get-movie-seats",getMovieSeats)
 

export default router;