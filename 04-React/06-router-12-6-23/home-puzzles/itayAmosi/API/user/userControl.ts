import UserModel from "./userModel";
import jwt from "jwt-simple";
import bcrypt from "bcryptjs";
// import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();


export async function addUser (req: any, res: any) {
    try {
      const { name, username, email, phone, password, cpassword, gender } = req.body;
      if(password.length < 4) throw new Error(`Password must be at least 4 characters`)
    const arr = [name, username, phone, email, password, gender]
    const regex = /^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/;
    if (arr.some((ele) => !regex.test(ele))) {
     throw new  Error("Please check your input(Only English characters allowed)")
    }
      const userDB = await UserModel.create({ name, username, email, phone, password, cpassword, gender });

      res.send({ ok: true, user: userDB });
    } catch (error:any) {
      console.error(error);
      res.status(500).send({ ok: false, error });
    }
  }
  

export const login = async (req: any, res: any) => {
  try {
    const JWT_SECRET="sdsdgffdgdfasSFDFBDF"
    const secret = process.env.JWT_SECRET;

    const { username, password } = req.body;
console.log(username, password);
    const userDB = await UserModel.findOne({ username });
console.log(userDB);
    if (!userDB) {
      res.status(401).send({
        error: "username or password are inncorect",
      });
      return;
    }
    // if (!bcrypt.compareSync(password, userDB.password))
    //   throw new Error("wrong username or password");

    // if (!secret) throw new Error("Server Error");
    // const token = jwt.encode({ userId: userDB._id }, secret);
    res.cookie("currentUser", JSON.stringify( {userId: userDB._id }), {
      maxAge: 999 * 999 * 999,
      httpOnly: true,
    });
    res.status(201).send({ ok: true, userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};