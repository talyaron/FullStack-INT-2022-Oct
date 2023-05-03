import mongoose, { Schema } from "mongoose";


interface User {
    name: string;
    password:string;
    email:string;
    userType:UserType;
}



export enum UserType{
    ADMIN = "admin",
    PUBLIC = "public",
}

export const UserSchema = new Schema<User>({
    name:{require:true, type:String},
    password:{require:true, type:String},
    email:{type:String},
    userType:{
        type:String,
        enum:UserType,
        default:UserType.PUBLIC
    },
})


const UserModel = mongoose.model("users",UserSchema);


export default UserModel;