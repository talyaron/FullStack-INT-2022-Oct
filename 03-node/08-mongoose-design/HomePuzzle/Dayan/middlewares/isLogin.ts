import { NextFunction } from "express";
import verifyToken from "../utils/verifyToken";

import AdminModel from "../API/admin/adminModel"

const isLogin = async (req:any, res:any, next:NextFunction) => {
    //get token from header
    const headerObj = req.headers
    const token = headerObj?.authorization?.split(" ")[1]
    //verify token
    const verify = verifyToken(token)
    if(verify){
        //find the admin in DB
        const user = await AdminModel.findById(verify.id).select('name email role')
        //save the user into req.object
        req.userAuth = user
        next()
    }else{
        const err = new Error('Token expired/invalid')
        next(err)
    }
}
export default isLogin