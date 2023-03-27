import mongoose from "mongoose";

export const connectDB = (url:string) =>
  mongoose
    .connect(url)


