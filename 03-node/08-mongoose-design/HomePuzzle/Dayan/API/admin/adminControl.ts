import AsyncHandler from "express-async-handler"

import AdminModel from "./adminModel"

import generateToken from "../../utils/generateToken"

import { hashPassword, isPasswordMatched} from "../../utils/helpers"

//-----Admin register
export const register = AsyncHandler(async (req:any, res:any) => {
        const { name, email, password } = req.body

        //Check if email exists in DB:
        const adminFound = await AdminModel.findOne({ email })
        if(adminFound){
            throw new Error("Admin Exists")
        }

        //Register (Add user to DB):
        const user = await AdminModel.create({
            name,
            email,
            password: await hashPassword(password)
        })

        res.status(201).json({
            status: "success",
            data: user,
            message:"Admin registered succesfully"
        })
})
//-------------------------------------------

//-----Admin login
export const login = AsyncHandler (async (req:any, res:any) => {
        const { email, password } = req.body

        //Find user in DB:
        const user = await AdminModel.findOne({ email })
        if(!user){
            return res.json({ message: "Invlid login crendentials"})
        }
        //Verify password
        const isMatched = await isPasswordMatched(password, user.password.toString())
        if(!isMatched){
            return res.json({ message: "Invlid login crendentials"})
        }else{
            return res.json({ 
                data: generateToken(user._id),
                message:"Admin logged in succesfully"
            })
        }
})
//-------------------------------------------

//-----Get all admins
export const getAllAdmins = AsyncHandler (async (req:any, res:any) => {
    const admins = await AdminModel.find()
    res.status(200).json({
        status: "success",
        message:"All admins fetched succesfully",
        data: admins
    })
})
//-------------------------------------------

//-----Get single admin profile
export const getAdminProfile = AsyncHandler (async (req:any, res:any) => {
    const admin = await AdminModel.findById(req.userAuth._id).select('-password -createdAt -updatedAt')
    if(!admin){
        throw new Error('Admin not found')
    }else{
        res.status(200).json({
            status: "success",
            data: admin,
            message:"Admin Profile fetched succesfully"

        })
    }
})
//-------------------------------------------

//-----Update admin
export const updateAdmin = AsyncHandler (async (req:any, res:any) => {
    const {email, name, password} = req.body

    //If email is taken
    const emailExist = await AdminModel.findOne({email})
    if(emailExist){
        throw new Error('This email is taken/exist')
    }

    //check if user is updating password
    if(password){
        //update
        const admin = await AdminModel.findByIdAndUpdate(
            req.userAuth._id, 
            {
                email,
                password: await hashPassword(password),
                name
            },
            {
                new: true,
                runValidators: true
            }
        )
        res.status(201).json({
            status: "success",
            data: admin,
            message: "Admin update succesfully"
        })
    }else{
        //update
        const admin = await AdminModel.findByIdAndUpdate(
            req.userAuth._id, 
            {
                email, 
                name
            },
            {
                new: true,
                runValidators: true
            }
        )
        res.status(200).json({
            status: "success",
            data: admin,
            message: "Admin update succesfully"
        })
    }
})
//-------------------------------------------

//-----Delete admin
export const deleteAdmin = async (req:any, res:any) => {
    try {
        res.status(201).json({
            status: "success",
            data:"Admin has been deleted"
        })

    } catch (error: any) {
        res.json({
            status: "failed",
            error: error.message
        })
    } 
}
//-------------------------------------------

//-----Admin publish exam results
export const publishExamResults = async (req:any, res:any) => {
    try {
        res.status(201).json({
            status: "success",
            data:"Admin has been published the exam results"
        })

    } catch (error: any) {
        res.json({
            status: "failed",
            error: error.message
        })
    } 
}
//-------------------------------------------

//-----Admin unpublish exam results
export const unpublishExamResults = async (req:any, res:any) => {
    try {
        res.status(201).json({
            status: "success",
            data:"Admin did not publish the exam results"
        })

    } catch (error: any) {
        res.json({
            status: "failed",
            error: error.message
        })
    } 
}
//-------------------------------------------