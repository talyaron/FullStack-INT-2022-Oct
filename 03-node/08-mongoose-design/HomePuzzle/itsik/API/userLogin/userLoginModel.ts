import mongoose, {Schema}  from "mongoose";

interface userLogin {

    name:string;
    password:string | number;
}


const userLoginSchema = new Schema({
    name: String,
    password: Number,
});

const userRegister = mongoose.model("userLogin", userLoginSchema);

export default userRegister;