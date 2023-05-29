import UserModel from "./userModel";
import jwt from "jwt-simple";
import { Error } from "mongoose";
const secret = process.env.JWT_SECRET;

export const getUsers = async (req: any, res: any) => {
  try {
    const users = await UserModel.find({});
    res.send({ users });
  } catch (error) {
    console.error(error);
    res.status(500).send({Error: Error.Messages})
  }
};

export const addUser = async (req: any, res: any) => {
  try {
    const { userName, password, email } = req.body;
    console.log(userName, password, email);

    const userDB = await UserModel.create({ userName, password, email });
    console.log(userDB);

    res.status(201).send({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({Error: Error.Messages})
  }
};


export const login = async (req: any, res: any) => {
  try {
    const { userName, password } = req.body;
    console.log(userName, password);
    const userDB = await UserModel.findOne({ userName, password });
    if (!userDB) {
      return res.status(401).json({ message: "Username or password are not correct" });
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("Missing JWT secret");

    const token = jwt.encode({ userId: userDB._id, role: "public" }, secret);
    console.log(token);
    res.cookie("user", token, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });



    res.status(201).send({ ok: true , userDB});
  } catch (error) {
    res.status(500).send({Error: Error.Messages})
    console.error(error);
    
  }
};


export const deleteUser = async (res: any, req: any) => {
  try {
    const { _id } = req.body;

    const deleteUser = await UserModel.deleteOne({ _id });
    const users = await UserModel.find({});
    res.status(201).send({ ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).send({Error: Error.Messages})
  }
};

export const updateUserType = async (req: any, res: any) => {
  try {
    const { userId, userType } = req.body;
    const userDB = await UserModel.findByIdAndUpdate(
      { _id: userId },
      { userType }
    );
    res.status(201).send({ ok: true, userDB });
  } catch (error) {
    console.error(error);
    res.status(500).send({Error: Error.Messages})
  }
};

export const getUser = async (req: any, res: any) => {
  try {
    const { user } = req.cookies;
    console.log(user);
    if (!secret) throw new Error("No secret");

    const decoded = jwt.decode(user, secret);
    console.log(decoded);

    const { userId, role } = decoded;

    if (role === "admin") console.log("Full access");

    const userDB = await UserModel.findById(userId);

    res.send({ ok: true, user: userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({Error: Error.Messages})
  }
};
