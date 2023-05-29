import generateToken from "../../utils/generateToken"
import { hashPassword, isPasswordMatched } from "../../utils/helpers"
import UserModel from "./userModel"

import AsyncHandler from "express-async-handler"

//-----User register
export const registerUser = AsyncHandler(async (req:any, res:any) => {
    const { fullname, email, password } = req.body

    //Check if email exists in DB:
    const userFound = await UserModel.findOne({ email })
    if(userFound){
        throw new Error("The user already exists")
    }

    //Register (Add user to DB):
    const user = await UserModel.create(
        {
            fullname,
            email,
            password: await hashPassword(password)
        }
    )

    res.status(201).json({
        status: "success",
        message:"The user has successfully registered",
        user
    })
})
//-------------------------------------------

//-----User login
export const loginUser = AsyncHandler(async (req:any, res:any) => {
    const { email, password } = req.body

    //Find user in DB:
    const userFound = await UserModel.findOne({ email })
    if(!userFound){
        return res.json({ message: "Invlid login details" })
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
        return res.json({ message: "Invalid password" })
    }else{
        res.status(200).json({
            status: "success",
            message:`${userFound.fullname} has successfully logged in`,
            token: generateToken(userFound._id),
        })
    }
})
//-------------------------------------------

//-----Get user profile
export const getUserProfile = AsyncHandler(async (req:any, res:any) => {

    /*
        .select('-password -createdAt -updatedAt'):
        הצגת הפרופיל ללא נתונים נברים, כגון סיסמא.
        .populate("orders"):
        הצגת מידע מלא על ההזמנות שביצע היוזר (ולא רק מספר מזהה של ההזמנות).
    */
    const user = await UserModel.findById(req.userAuth._id).select('-password -createdAt -updatedAt').populate("orders")
    if(!user){
        throw new Error("User not found")
    }else{
        res.status(200).json({
            message:"Welcome to the profile page",
            user
        })
    }
})
//-------------------------------------------

//-----Update shipping address
export const updateShippingAdress = AsyncHandler(async (req:any, res:any) => {
    const { firstName, lastName, address, city, postalCode, country, phone } = req.body

    const user = await UserModel.findByIdAndUpdate(
        req.userAuth._id,
        {
            shippingAddress: {
                firstName,
                lastName,
                address,
                city,
                postalCode,
                country,
                phone
            },
            hasShippingAddress: true,
        },
        {
            new: true
        }
    )

    res.status(200).json({
        status: "success",
        message:"The user has successfully updated the shipping address",
        user

    })

})
//-------------------------------------------

