import { NextFunction } from "express";

import AdminModel from "../API/Admin/adminModel"

const isAdmin = async (req:any, res:any, next:NextFunction) => {
    //find the user
    const userId = req?.userAuth?._id
    const adminFound = await AdminModel.findById(userId)
    //check if admim
    if(adminFound?.role.toString() === "admin"){
        next()
    }else{
        const err = new Error('Access Denied, Admin Only')
        next(err)
    }
}
export default isAdmin