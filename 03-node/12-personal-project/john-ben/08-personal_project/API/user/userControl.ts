import UserModel from "./userModel";
import jwt from "jwt-simple";

export const getUser = async (req: any, res: any) => {
	try {
		const { user } = req.cookies;

		const secret = process.env.JWT_SECRET

        if(!secret) throw new Error("Missing jwt secret");

		const { userId } = jwt.decode(user, secret)

		const userDB = await UserModel.findById({ _id: userId });

		res.status(200).send({ userDB });
	} catch (error: any) {
		console.error(error);
		res.status(500).send({ error: error.message });
	}
};

export const getUsers = async (req: any, res: any) => {
	try {
		const users = await UserModel.find();
		res.status(200).send({ users });
	} catch (error: any) {
		console.error(error);
		res.status(500).send({ error: error.message });
	}
};

export const updateUser = async (req: any, res: any) => {
	try {
		const { userId } = req.params;

		const prevUser = await UserModel.findById({ _id: userId });

		await UserModel.findOneAndUpdate(
			{ _id: userId },
			{
				name: req.body?.username || prevUser?.username,
				password: req.body?.password || prevUser?.password,
			}
		);

		const newUser = await UserModel.findById({ _id: userId });

		res.status(200).send({ user: newUser, message: "updated" });
	} catch (error: any) {
		console.error(error);
		res.status(500).send({ error: error.message });
	}
};

export const deleteUser = async (req: any, res: any) => {
	try {
		const { userId } = req.params;
		const user = await UserModel.deleteOne({ _id: userId });
		res.status(201).send({ message: "deleted" });
	} catch (error: any) {
		console.error(error);
		res.status(500).send({ error: error.message });
	}
};
