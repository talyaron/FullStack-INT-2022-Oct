import { NextFunction, Response, Request } from "express";
import User, { UserInterface } from "../model/userModel";
import jwt from "jwt-simple";
const secret = process.env.JWT_SECRET;
const bcrypt = require("bcryptjs");

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getAllSimpleUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find({ userRole: "simple" });
    res.status(200).json({ users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      userName,
      password,
      email,
      adminToken,
    } = req.body;

    if (!firstName) throw new Error("No first name found");
    if (!lastName) throw new Error("No last name found");
    if (!gender) throw new Error("No gender found");
    if (!userName) throw new Error("No user name found");
    if (!password) throw new Error("No password found");
    if (!email) throw new Error("No email found");

    const takenEmail = await User.findOne({ email });

    //bcryption//
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    if (takenEmail) {
      res.status(500).json({
        ok: false,
        errorMessage: `Email already exists in the system`,
      });
    } else {
      const user = await User.create({
        firstName: firstName.toLowerCase(),
        lastName: lastName.toLowerCase(),
        gender: gender.toLowerCase(),
        userName,
        password: hash,
        email: email.toLowerCase(),
      });

      if (adminToken === "amit" && user.userRole === "simple") {
        user.userRole = "admin";
        user.save();
      }

      if (!secret) throw new Error("Missing jwt secret");

      const token = jwt.encode(user._id, secret);

      res.cookie("userId", token, {
        expires: new Date(Date.now() + 7200000), //2 hours
        httpOnly: true,
      });

      res.redirect("/signIn");
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.cookies;

    if (!secret) throw new Error("No secret");
    if (!userId) throw new Error("No user found");

    const decoded = jwt.decode(userId, secret);

    const user = await User.findById(decoded);

    res.send({ ok: true, user });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: "error.message" });
  }
};

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found on userLogin function");

    if (!secret) throw new Error("Missing jwt secret");

    const hash = user.password;
    const isValidPassword = bcrypt.compareSync(password, hash); //1:password from user, 2:hashed password from db

    if (isValidPassword === false) return res.json("Not valid password.");

    const token = jwt.encode(user._id, secret);

    res.cookie("userId", token, {
      expires: new Date(Date.now() + 7200000), //2 hours
      httpOnly: true,
    });

    res.redirect("/profile");
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const userLogout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.clearCookie("userId");

    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const passwordRecovery = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { firstName, lastName, userName, email } = req.body;
    const user = await User.findOne({
      firstName,
      lastName,
      userName,
      email,
    });

    if (!user) throw new Error("User not found, check entered data");

    res.status(200).send({ user });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deleteUsers = await User.deleteMany({});
    res.status(200).send({ deleteUsers });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.body;

    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser)
      throw new Error("User  was not found in delete user route");

    const users = await User.find({ userRole: "simple" });

    res.status(200).send({ users });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, firstName, lastName, gender, userName, email } = req.body;

    const takenEmailUser = await User.findOne({ email });

    if (takenEmailUser) {
      if (takenEmailUser.email !== email) {
        res.status(500).json({
          ok: false,
          errorMessage: `Email already exists in the system`,
        });
      } else if (takenEmailUser.email === email) {
        updatedUser(userId, firstName, lastName, gender, userName, email, res);
      }
    } else {
      updatedUser(userId, firstName, lastName, gender, userName, email, res);
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

async function updatedUser(
  userId: any,
  firstName: any,
  lastName: any,
  gender: any,
  userName: any,
  email: any,
  res: Response
) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      {
        firstName,
        lastName,
        gender,
        userName,
        email,
      }
    );

    const user = await User.findById(userId);

    res.status(201).json({ ok: true, user });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

//////////////////////////

export const updateUserByAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, firstName, lastName, gender, userName, email } = req.body;

    const takenEmailUser = await User.findOne({ email });

    if (takenEmailUser) {
      if (takenEmailUser.email !== email) {
        res.status(500).json({
          ok: false,
          errorMessage: `Email already exists in the system`,
        });
      } else if (takenEmailUser.email === email) {
        updatedUserByAdmin(
          userId,
          firstName,
          lastName,
          gender,
          userName,
          email,
          res
        );
      }
    } else {
      updatedUserByAdmin(
        userId,
        firstName,
        lastName,
        gender,
        userName,
        email,
        res
      );
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

async function updatedUserByAdmin(
  userId: any,
  firstName: any,
  lastName: any,
  gender: any,
  userName: any,
  email: any,
  res: Response
) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      {
        firstName,
        lastName,
        gender,
        userName,
        email,
      }
    );

    const user = await User.findById(userId);

    res.status(201).json({ ok: true, user });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

export const searchUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userInputValue } = req.body;

    const users = await User.find({
      userRole: "simple",
      $or: [
        { firstName: userInputValue },
        { lastName: userInputValue },
        { userName: userInputValue },
        { gender: userInputValue },
        { email: userInputValue },
      ],
    });
    res.status(200).json({ ok: true, users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};
