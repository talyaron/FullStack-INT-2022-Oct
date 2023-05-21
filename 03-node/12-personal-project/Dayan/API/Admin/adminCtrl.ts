import AsyncHandler from "express-async-handler"

import AdminModel from "./adminModel"

import generateToken from "../../utils/generateToken"

import { hashPassword, isPasswordMatched} from "../../utils/helpers"

//-----Admin register
export const registerAdmin = AsyncHandler(async (req:any, res:any) => {
    const { fullname, email, password } = req.body

    //Check if email exists in DB:
    const adminFound = await AdminModel.findOne({ email })
    if(adminFound){
        throw new Error("Admin already Exists")
    }

    //Register (Add user to DB):
    const user = await AdminModel.create({
        fullname,
        email,
        password: await hashPassword(password)
    })

    res.status(201).json({
        status: "success",
        message:"The admin has successfully registered",
        data: user
    })
})
//-------------------------------------------

//-----Admin login
export const loginAdmin = AsyncHandler (async (req:any, res:any) => {
    const { email, password } = req.body

    //Find user in DB:
    const userFound = await AdminModel.findOne({ email })
    if(!userFound){
        return res.json({ message: "Invlid login details"})
    }

    /*
        ככל והמשתמש נמצא במסד הנתונים, מופעלת פונקציית הקוקי.
        user פונקציה זו יוצרת עוגיה חדשה בשם
        id והערך של העוגייה יהיה ה
        של המשתמש שהתקבל מהמסד הנתונים.
        כמו כן, הפונקציה קובעת את תוקף העוגיה וקובעת כי העוגיה תהיה נגישה
        רק ע"י השרת.
    */ 
    res.cookie('user', userFound._id, { maxAge: 50000000, httpOnly: true })
    
    //Verify password
    const isMatched = await isPasswordMatched(password, userFound.password.toString())
    if(!isMatched){
        return res.json({ message: "Invlid login crendentials"})
    }else{
        return res.json({ 
            status: "success",
            message:`${userFound.fullname} has successfully logged in`,
            token: generateToken(userFound._id)
        })
    }
})
//-------------------------------------------

//-----Get single admin profile
export const getAdminProfile = AsyncHandler (async (req:any, res:any) => {
    //הצגת הפרופיל ללא נתונים נבחרים, כגון סיסמא
    const admin = await AdminModel.findById(req.userAuth._id).select('-password -createdAt -updatedAt')
    if(!admin){
        throw new Error('Admin not found')
    }else{
        res.status(200).json({
            status: "success",
            message:"Admin Profile fetched succesfully",
            data: admin
        })
    }
})
//-------------------------------------------