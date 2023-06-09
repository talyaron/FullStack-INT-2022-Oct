import mongoose, { Schema } from "mongoose";

export interface TileInterface {
  value: number;
  color: string;
  _id: string;
}

export interface DeckInterface {
  deck: TileInterface[];
  _id: string;
}

export const DeckSchema: Schema = new Schema(
  {
    deck: {
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

export default mongoose.model<DeckInterface>("Deck", DeckSchema);
