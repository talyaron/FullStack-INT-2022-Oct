import logInModel from "./userModel";
import jwt from "jwt-simple";
const secretToken = process.env.SECRET_TOKEN;

export const addUser = async (req: any, res: any) => {
    try {
        const { name, password } = req.body;
        await logInModel.create({ name, password })
        res.status(201).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const logIn = async (req: any, res: any) => {
    try {
        const { name, password } = req.body;
        const user = await logInModel.findOne({ name, password });

        if (!user) throw new Error("Username or password are inncorect");

        if (!secretToken) throw new Error("Missing jwt secret");

        const token = jwt.encode(user._id, secretToken);

        res.cookie("id", token, { maxAge: 50000000, httpOnly: true });

        res.status(201).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const userFromcookies = async (req:any, res:any) => {
    try {
        const {id} = req.cookies;
        if (!secretToken) throw new Error("Missing jwt secret");
        const _id = jwt.decode(id, secretToken);
        
        const user = await logInModel.findById(_id);
        res.status(201).send(user)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}