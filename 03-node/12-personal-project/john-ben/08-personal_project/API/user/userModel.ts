import mongoose, { Schema } from "mongoose";

interface IUser {
	username: string;
	password: string;
}
//todo : render unique username
const UserSchema = new Schema<IUser>(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
            required: true
		},
	},
	{ timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
