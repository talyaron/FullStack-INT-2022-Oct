import mongoose, { Schema } from "mongoose";
import { TileInterface } from "./deckModel";

export interface BoardInterface {
  board: TileInterface[];
  _id: string;
}

export const BoardSchema: Schema = new Schema(
  {
    tileArr: {
      type: [{}],
      required: true,
    },
    _id: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<BoardInterface>("Board", BoardSchema);
