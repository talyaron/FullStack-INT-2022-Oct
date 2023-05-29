import { NextFunction } from "express"
import AdminModel from "../API/Admin/adminModel"
import verifyToken from "../utils/verifyToken"

const isAdminLogin = async (req:any, res:any, next:NextFunction) => {
    //Get token from header
    const token = req?.headers?.authorization
    //Verify token
    const verify = verifyToken(token)
    if(verify){
        //Find the user in DB
        const user = await AdminModel.findById(verify.id)
        //Save the user into req.object
        req.userAuth = user
        next()
    }else{
        const err = new Error("Token expired/invalid")
        next(err)
    }
}
export default isAdminLogin