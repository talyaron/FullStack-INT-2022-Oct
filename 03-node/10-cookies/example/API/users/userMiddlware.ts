import UserModel from "./usersModel";
import { UserType } from "./usersModel";

export async function isAdmin(req: any, res: any, next: any) {
  try {
    const { user } = req.cookies;

    const userDB: any = await UserModel.findById(user);

    const { userType } = userDB;

    if (userType !== UserType.ADMIN) {
      throw new Error("user is not allowed");
    }

    next();
  } catch (error: any) {
    console.error(error);
    res.status(401).send({ error: error.message });
  }
}

export async function userDetails(req: any, res: any, next: any) {
  try {
    const { user } = req.cookies;

    const userDB: any = await UserModel.findById(user);

    req.user = userDB;

    next();
  } catch (error: any) {
    console.error(error);
    res.status(401).send({ error: error.message });
  }
}
