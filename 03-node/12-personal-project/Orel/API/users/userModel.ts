import mongoose, { Schema } from "mongoose";
import { ProductSchema } from "../products/productsModel";

export interface User {
    name: string,
    email: string,
    password: string,
    src?: string,
}

export enum UserType {
    USER = "user",
    ADMIN = "admin"
}

export const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
    ,
    userType: {
        type: String,
        enum: UserType,
        default: UserType.USER,
    },
})

export const UsersProductSchema = new Schema({
    user:{
        type:UserSchema,
        require:true
    },
    product:{
        type:ProductSchema,
        require:true
    },
    size:String
})

export const UsersProductModel = mongoose.model("userProduct", UsersProductSchema)
const UserModel = mongoose.model("user", UserSchema)

export default UserModel