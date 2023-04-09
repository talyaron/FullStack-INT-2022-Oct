import mongoose, { Schema } from "mongoose";

//schema
const UserSchema = new Schema({
    name: String,
    src: String,
  });
  
  const UserModel = mongoose.model("users", UserSchema);

export default UserModel;