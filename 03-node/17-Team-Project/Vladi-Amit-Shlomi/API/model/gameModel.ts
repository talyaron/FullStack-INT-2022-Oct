import mongoose, { Schema } from "mongoose";
import { TileInterface, DeckSchema, DeckInterface } from "./deckModel";
import { PlayerInterface, PlayerSchema } from "./playerModel";
import { UserSchema } from "./userModel";
import { BoardSchema } from "./boardModel";

//a game is relevant only during a game

export interface GameInterface {
  players: PlayerInterface[];
  board: TileInterface[];
  deck: TileInterface[];
  _id: string;
}

export const GameSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId, ref: "User",
      required: true,
    },
    players: {
      type: [{ type: Schema.Types.ObjectId, ref: "Player" }],
      required: true,
    },
    board: {
      type: Schema.Types.ObjectId, ref: "Board",
      required: true,
    },
    deck: {
      type: Schema.Types.ObjectId, ref: "Deck",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<GameInterface>("Game", GameSchema);
