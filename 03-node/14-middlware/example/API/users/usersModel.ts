import mongoose, {Schema} from "mongoose";
//schema

interface User {
  // public uid: string = uuid();
  name: string;
  src: string;
}

export enum Role{
  ADMIN='admin',
  SIMPLE='simple'
}

const UserSchema = new Schema({
    name: String,
    src: String,
    role:{
      type:String,
      enum:[Role],
      default:Role.SIMPLE
    }
  });
  
  const UserModel = mongoose.model("users", UserSchema);

  export default UserModel;