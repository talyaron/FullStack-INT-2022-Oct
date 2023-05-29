import { NextFunction } from "express"
import UserModel from "../API/User/userModel"
import verifyToken from "../utils/verifyToken"

const isUserLogin = async (req:any, res:any, next:NextFunction) => {
    //Get token from header
    const token = req?.headers?.authorization
    //Verify token
    const verify = verifyToken(token)
    if(verify){
        //Find the user in DB
        const user = await UserModel.findById(verify.id)
        //Save the user into req.object
        req.userAuth = user
        next()
    }else{
        const err = new Error("Token expired/invalid")
        next(err)
    }
}
export default isUserLogin