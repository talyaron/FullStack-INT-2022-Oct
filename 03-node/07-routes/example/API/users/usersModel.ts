import mongoose, {Schema} from "mongoose";
//schema

interface User {
  // public uid: string = uuid();
  name: string;
  src: string;
}

const UserSchema = new Schema({
    name: String,
    src: String,
  });
  
  const UserModel = mongoose.model("users", UserSchema);

  export default UserModel;