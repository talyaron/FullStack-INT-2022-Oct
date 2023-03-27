import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide title"],
    trim: true,
  },
  body: {
    type: String,
    required: [true, "must provide body"],
    trim: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  posted: {
    type: Boolean,
    default: false,
  },
});

export const Article = mongoose.model("Article", ArticleSchema);
