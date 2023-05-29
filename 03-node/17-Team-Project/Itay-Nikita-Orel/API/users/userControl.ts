import UserModel from "./userModel";
import jwt from "jwt-simple";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config();

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export const getUsers = async (req: any, res: any) => {
  try {
    const users = await UserModel.find({});
    res.send({ ok: true, users });
  } catch (error) {
    res.status(500).send({ ok: false });
    console.error(error);
  }
};
export const getUsersScoer = async (req: any, res: any) => {
  try {
    const users = await UserModel.find(
      {},
      { highScore: 1, userName: 1, src: 1 }
    )
      .sort({ highScore: -1 })
      .limit(10);
    res.send({ ok: true, users });
  } catch (error) {
    res.status(500).send({ ok: false });
    console.error(error);
  }
};

export const restorePassword = async (req: any, res: any) => {
  try {
    const { userName, email } = req.body;
    const password = Math.random().toString(36).slice(-8);
    const passHash = await bcrypt.hash(password, 10);

    const existUser = await UserModel.findOneAndUpdate(
      { userName: userName, email: email },
      { password: passHash }
    );
    if (!existUser) throw new Error("Username or Email dosen't exist");

    const imagePath = path.join(
      __dirname + "../../../public/images/emailImages/emailBanner.png"
    );
    const emailText = `<div><p>Hello ${userName},<br><br>Here is your new password: ${password}</p><p style="border-bottom:1px solid black; width: fit-content;">Please login with this password and change it in the profile page!</p><p>Login: <a href="https://road-of-glory.onrender.com/login.html">Road Of Glory - Login</a><br><br>Best Regards,<br><br>Road Of Glory - Team 3</p></div>`;

    const emailDetails = {
      from: `"Road Of Glory - Team 3" <${process.env.GMAIL}>`,
      to: email,
      subject: `Road Of Glory - Team 3 | ${userName}'s Password Reset`,
      html: `<img src="cid:road.of.glory.team3@gmail.com"/>${emailText}`,
      attachments: [
        {
          filename: "Road Of Glory - Team 3.png",
          path: `${imagePath}`,
          cid: "road.of.glory.team3@gmail.com",
        },
      ],
    };

    mailTransporter.sendMail(emailDetails, (err) => {
      if (err) console.log(err);
      else {
        console.log(`Email sent to ${email}`);
        res.status(201).send({ ok: true });
      }
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createUser = async (req: any, res: any) => {
  try {
    const randomNumber = Math.ceil(Math.random() * 48);
    const srcRandom = `../images/PlayerIcons/${randomNumber}.png`;
    const { firstName, lastName, userName, email, password } = req.body;
    if(password.length < 4) throw new Error(`Password must be at least 4 characters`)
    const arr = [firstName, lastName, userName, email, password]
    const regex = /^[a-zA-Z0-9!@#$%\^&*)(+=._-]*$/;
    if (arr.some((ele) => !regex.test(ele))) {
     throw new  Error("Please check your input(Only English characters allowed)")
    }

    const salt = bcrypt.genSaltSync(10);
    const passHash = bcrypt.hashSync(password, salt);
    const existUser = await UserModel.findOne({
      $or: [{ userName }, { email }],
    });

    if (existUser) throw new Error("User already exist");

    const userDB = await UserModel.create({
      firstName,
      lastName,
      userName,
      email,
      password: passHash,
      src: srcRandom,
    });

    res.status(201).send({ ok: true, userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const adminCreateUser = async (req: any, res: any) => {
  try {
    const { firstName, lastName, userName, email, password, role } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const passHash = bcrypt.hashSync(password, salt);
    const existUser = await UserModel.findOne({
      $or: [{ userName }, { email }],
    });

    if (existUser) throw new Error("User already exist");
    const userDB = await UserModel.create({
      firstName,
      lastName,
      userName,
      email,
      password: passHash,
      ROLE: role,
    });

    res.status(201).send({ ok: true, userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const UpdateUserDetailById = async (req: any, res: any) => {
  try {
    const uid = req.body;
    if (!uid) throw new Error("no uID user");
    const updateUser = UserModel.findByIdAndUpdate(uid, {});
    res.status(201).send({ ok: true, user: updateUser });
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (req: any, res: any) => {
  try {
    const { uid } = req.body;

    const deleteUser = await UserModel.findByIdAndDelete(uid);
    if (!deleteUser) throw new Error("user no founded");
    res.status(201).send({ ok: true, user: deleteUser });
  } catch (error) {
    res.status(500).send({ ok: false });

    console.error(error);
  }
};
export const addUser = async (req: any, res: any) => {
  try {
  } catch (error) {
    console.error(error);
  }
};

export const login = async (req: any, res: any) => {
  try {
    const secret = process.env.JWT_SECRET;
    const { userName, password } = req.body;

    const userDB = await UserModel.findOne({ userName });

    if (!userDB) {
      res.status(401).send({
        error: "username or password are inncorect",
      });
      return;
    }
    if (!bcrypt.compareSync(password, userDB.password))
      throw new Error("wrong username or password");

    if (!secret) throw new Error("Server Error");
    const token = jwt.encode({ userId: userDB._id }, secret);
    res.cookie("currentUser", token, {
      maxAge: 999 * 999 * 999,
      httpOnly: true,
    });
    res.status(201).send({ ok: true, userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const UpdateUserDetails = async (req: any, res: any) => {
  try {
    const { _id, firstName, lastName, email, userName, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const passHash = bcrypt.hashSync(password, salt);

    const userDB = await UserModel.findByIdAndUpdate(_id, {
      firstName,
      lastName,
      email,
      userName,
      password: passHash,
    });
    if (!userDB) throw new Error("No userDB in array");
    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getUser = async (req: any, res: any) => {
  try {
    const secret = process.env.JWT_SECRET;
    const { currentUser } = req.cookies;
    if (!secret) throw new Error("No secret");
    const decoded = jwt.decode(currentUser, secret);

    const { userId } = decoded;

    const userDB = await UserModel.findById(userId);

    res.send({ ok: true, user: userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getUserResolution = async (req: any, res: any) => {
  try {
    const secret = process.env.JWT_SECRET;
    const { currentUser } = req.cookies;
    if (!secret) throw new Error("No secret");
    const decoded = jwt.decode(currentUser, secret);

    const { userId } = decoded;

    const userDB = await UserModel.findById(userId);

    res.send({ ok: true, userResolution: userDB?.resolution });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const setUserResolution = async (req: any, res: any) => {
  try {
    const { resolution } = req.body;
    const secret = process.env.JWT_SECRET;
    const { currentUser } = req.cookies;
    if (!secret) throw new Error("No secret");
    const decoded = jwt.decode(currentUser, secret);

    const { userId } = decoded;

    const userDB = await UserModel.findByIdAndUpdate(userId, {
      resolution: resolution,
    });

    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
export const logout = async (req: any, res: any) => {
  try {
    res.clearCookie("currentUser");
    res.send("Cookie deleted!");
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const changeUserIcon = async (req: any, res: any) => {
  try {
    const secret = process.env.JWT_SECRET;
    const { currentUser } = req.cookies;
    if (!secret) throw new Error("No secret");
    const decoded = jwt.decode(currentUser, secret);

    const { userId } = decoded;

    const userDB = await UserModel.findById(userId);
    if (!userDB) throw new Error("no found UserDB");
    const uID = userDB._id;
    const { src } = req.body;

    if (!src) throw new Error("no found src");
    const changeSrcUser = await UserModel.findByIdAndUpdate(uID, { src });
    if (!changeSrcUser) throw new Error("no found user DB");
    res.status(201).send({ ok: true, user: changeSrcUser });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
