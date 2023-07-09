import jwt from "jwt-simple";

export const isConnected = (req: any, res: any, next: any) => {
	try {
		const { user } = req.cookies;

		const secret = process.env.JWT_SECRET;

		if (!secret) throw new Error("Missing jwt secret");

		const { userId, username } = jwt.decode(user, secret);

		req.user = { userId, username };

		next();
	} catch (err: any) {
		res.status(401).send({
			message: "Unauthorized",
		});
	}
};
