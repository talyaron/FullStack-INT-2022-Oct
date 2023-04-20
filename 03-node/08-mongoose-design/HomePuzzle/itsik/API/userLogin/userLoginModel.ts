import mongoose, {Schema}  from "mongoose";


export const userLoginSchema = new Schema({
    name: String,
    password: String,
    email: String,
});

const userRegister = mongoose.model("userlogins", userLoginSchema);

export default userRegister;