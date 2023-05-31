import { NextFunction, Response, Request } from "express";
import User, { UserInterface } from "../model/userModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;



export const isAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { userId } = req.cookies;
        if (!secret) throw new Error("No secret")
        if (!userId) throw new Error("No user id found")
    
        const decoded = jwt.decode(userId, secret)

        const user = await User.findById(decoded)
        if (!user) throw new Error("No user found")

        if(user.userRole === "admin"){
            next()
        }
    } catch (error: any) {
        console.error(error);
        res.status(401).send({ error: error.message });
    }
};