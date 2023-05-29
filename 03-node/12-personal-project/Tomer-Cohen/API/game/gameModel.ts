import express from "express";
import mongoose, { Schema } from "mongoose";

interface Game{
  Games: string,
  day:string,
}

const gameSchema= new Schema({
  Games: String,
  day: String,
})

const GameModel= mongoose.model("game",gameSchema);

export default GameModel