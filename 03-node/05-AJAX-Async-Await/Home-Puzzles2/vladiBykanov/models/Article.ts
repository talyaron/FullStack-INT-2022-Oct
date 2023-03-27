import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide title"],
    trim: true,
    maxlength: [20, "title cannot be more than 20 characters"],
  },
  body: {
    type: String,
    required: [true, "must provide body"],
    trim: true,
    maxlength: [30, "body cannot be more than 20 characters"],
  },
  imgURL:{
    type:String,
    required: true,
  },
  posted: {
    type: Boolean,
    default: false,
  },
});

export const Article = mongoose.model("Article", ArticleSchema);
