import mongoose, { Schema } from "mongoose";
import { BoardSchema } from "./BoardModel";

interface ListInterface {
  listName: string;
  cardsArray: [string];
  _id: string;
}

export const ListSchema: Schema = new Schema(
  {
    listName: {
      type: String,
      required: true,
    },
    board: {
      type: BoardSchema,
      required: true,
    },
    cardsArray: {
      type: [String],
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<ListInterface>("List", ListSchema);
