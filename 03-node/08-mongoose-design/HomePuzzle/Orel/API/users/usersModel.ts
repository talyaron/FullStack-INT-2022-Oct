import mongoose , { Schema } from "mongoose";



export interface User {
    Fname:string ,
    Lname:string ,
    email:string ,
    password:string ,

}

export enum UserType {
    STUDENT = "student",
    TEACHER = "teacher",
    ADMIN = "admin",
}

export const UserSchema = new Schema({
    Fname:String ,
    Lname:String ,
    email:{
        type:String , 
        require:true
    },
    password:{
        type:String , 
        require:true
    } ,
    userType: {
        require:true,
        type: String,
        enum: UserType,
        default: UserType.STUDENT,
      },

})

const userModel = mongoose.model("users" , UserSchema) 

export default userModel