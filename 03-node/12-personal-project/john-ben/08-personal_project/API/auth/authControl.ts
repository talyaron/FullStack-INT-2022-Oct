import UserModel from "../user/userModel";
import jwt from "jwt-simple";
import bcrypt from 'bcryptjs';

export const login = async (req: any, res: any) => {
    try {
        const { username, password } = req.body;

        const user = await UserModel.findOne({ username });

        if(!user) throw new Error("Username or password are incorrect");

        const isCorrectPassword = bcrypt.compareSync(password, user.password)
        console.log(password, user.password, isCorrectPassword)

        if(!isCorrectPassword) throw new Error("Username or password are incorrect");

        const secret = process.env.JWT_SECRET

        if(!secret) throw new Error("Missing jwt secret");

        const token = jwt.encode({ userId: user._id, username: user.username }, secret)
        
        res.cookie("user", token, { maxAge: 50000000, httpOnly: true });

        res.status(200).send({ ok: true, message: "connected" })
    } catch (err: any) {
        res.status(500).send({ err: err.message })
    }
}

export const register = async (req: any, res: any) => {
	try {
		const { username, password } = req.body;

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt)

        console.log({ password, salt, hashPassword })

		const newUser = await UserModel.create({  username, password: hashPassword });

		res.status(201).send({ user: newUser });
	} catch (error: any) {
		console.error(error);
		res.status(500).send({ error: error.message });
	}
};
