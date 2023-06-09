import { UserModel } from "../../models/userModel"
import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jwt-simple"

export const login = async (req:any, res:any) => {
    try {
        const loginCookieName = process.env.LOGIN_COOKIE_NAME
        const jwtSecret = process.env.JWT_SECRET
        const {username, password} = req.body;
        if (!username || !password) throw new Error("Missing username or password")

        const existingUser = await UserModel.findOne({username, password})
        if (!jwtSecret) throw new Error("Server Error!")
        if (!existingUser) throw new Error("User dosen't exist!")
        const token = jwt.encode(existingUser._id, jwtSecret)
        console.log("User", username, "exist, creating cookie!")
        res.cookie(loginCookieName, token, { maxAge: 60000000, httpOnly: true })
        res.status(201).send({ok:true})

    } catch (error:any) {
        console.log(error)
        res.status(500).send({ok:false, error: error.message})
    }
}


export const loggedIn = async (req:any, res:any) => {
    try {
        const jwtSecret = process.env.JWT_SECRET
        const {isLoggedIn} = req.cookies;

        if (!jwtSecret) throw new Error("Cookie Error!")
        
        if (isLoggedIn){
            const userId = jwt.decode(isLoggedIn, jwtSecret)
            const existingUser = await UserModel.findById(userId)
            if (!existingUser) throw new Error("Couldn't find user!")
            res.status(200).send({ok:true, user:existingUser.username})
        } else {
            res.send({ok:false})
        }
    } catch (error:any) {
        console.log(error)
        res.status(500).send({ok:false, error: error.message})
    }
}

export const logout = async (req:any, res:any) => {
    try {
        const jwtSecret = process.env.JWT_SECRET
        const {isLoggedIn} = req.cookies;

        if (!jwtSecret) throw new Error("Cookie Error!")
        
        if (isLoggedIn){
            const loginCookieName = process.env.LOGIN_COOKIE_NAME
            res.cookie(loginCookieName, "deleted", { maxAge: 1, httpOnly: true })
            res.status(200).send({ok:true})
        } else {
            res.send({ok:false})
        }
    } catch (error:any) {
        console.log(error)
        res.status(500).send({ok:false, error: error.message})
    }
}