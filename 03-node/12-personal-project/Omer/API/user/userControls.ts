import logInModel from "./userModel";
import jwt from "jwt-simple";
const secret = process.env.SECRET_TOKEN;

export const addUser = async (req: any, res: any) => {
    try {
        const { name, password, role } = req.body;
        await logInModel.create({ name, password,role });
        res.status(201).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const logIn = async (req: any, res: any) => {
    try {
        const { name, password } = req.body;
        const user = await logInModel.findOne({ name, password });
        if (!user) {
            res.status(200).send(false)
        } else {
            if(!secret) throw new Error("No token found");
            const token = jwt.encode(user._id, secret);
            res.cookie("userId", token, { maxAge: 50000000, httpOnly: true });
            res.status(200).send(user)
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const getUserFromCokkie = async (req:any, res:any) => {
    try {
        const {userId} = req.cookies;
        
        if(!secret) throw new Error("No token found");
        const decoded = jwt.decode(userId, secret);
        const user = await logInModel.findById(decoded);
        if(!user) throw new Error("No user found");
        
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}