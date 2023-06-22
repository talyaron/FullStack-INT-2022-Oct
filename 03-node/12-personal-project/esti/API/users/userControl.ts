// import { getUser } from './userControl';
import UserModel from "./userModel";
import jwt from "jwt-simple";


const secret = process.env.JWT_SECRET;

export const getUsers = async (req: any, res: any) => {
  try {
    const users = await UserModel.find({});

    res.send({ users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const addUser = async (req: any, res: any) => {
  try {

    const { name, password } = req.body;
    console.log(name, password);
    
    console.log(req.body);
     
    //add users to DB;
    const userDB = await UserModel.create({ name, password });

    console.log(userDB);
    console.log(UserModel);
    console.log("userDB");

    res.status(201).send({ ok: true, user:userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { name, password } = req.body;
    console.log(name, password);
    const userDB = await UserModel.findOne({ name, password });
    // console.log(userDB)
    interface CustomError {
      code: number;
      message: string;
    }

    if (!userDB) throw new Error("Username or password are inncorect");
    if (!userDB){
        // If an error occurs
        const error: CustomError = {
          code: 1000,
          message: "Username or password are inncorect"
        };
        res.status(1000).send({ error });
      };

    if (!secret) throw new Error("Missing jwt secret");

    // if(userDB) res.json(userDB)  
 
    const token = jwt.encode({ userId: userDB._id, role: "public" }, secret);
    // console.log(token);
    // console.log("token");

    res.cookie("user", userDB._id , { maxAge: 5000000, httpOnly: true });
    
    res.status(201).send({ ok: true, user:userDB });
    
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
    
  }
};

export const updateUser = (req: any, res: any) => {
  try {
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

// export const getUserName = async (req: any, res: any) => {
//   try {
//     console.log(req.body)
//     let { userId } = req.body
//      userId = userId.trim();
//       console.log(userId)

  
//       const userDB = await UserModel.findOne({userId:userId})
//       console.log(userDB)
      
//      if(!userDB) throw new Error ("no scoreDB")
  
//       res.send({ ok: true,userDB });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// };

export const deleteUser = async (req: any, res: any) => {
  try {
    const { _id } = req.body;

    const deleteUser = await UserModel.deleteOne({ _id });
    const users = await UserModel.find({});

    res.send({ ok: true, users });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const getUser = async (req: any, res: any) => {
  try {
    const { user } = req.cookies;
    console.log(user);
    if (!secret) throw new Error("No secret");
    
    const decoded = jwt.decode(user, secret);
    console.log(decoded);
    
    const { userId, role} = decoded;

    if(role === 'admin') console.log("Give all avilable data")

    const userDB = await UserModel.findById(userId);

    res.send({ ok: true, user: userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

