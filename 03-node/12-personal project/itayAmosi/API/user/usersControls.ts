import UserModel from "./usersModel";
var jwt = require('jwt-simple');
const secret = process.env.JWT_SECRET;

export const login = async (req:any, res:any) => {
  try {
    const { email, password } = req.body;

    const userDB = await UserModel.findOne({ email, password });

    if(!userDB){
      res.status(401).send({ error: "email or password are inncorect" });
      return
    } 
    const token = jwt.encode({ userId: userDB._id,role:"public"},secret);
    res.cookie('currentUser', token, {httpOnly: true });
    res.status(201).send({ ok: true, userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};


export const addUser = async (req:any, res:any) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    const userDB = await UserModel.create({ name, email, password, phoneNumber });

    res.status(201).send({ ok: true, userDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};


//   export const deleteUser = async (req:any, res:any) => {
//     try {
//       const { _id } = req.body;
  
//       const deleteUser = await UserModel.deleteOne({ _id });
//       const users = await UserModel.find({});
  
//       res.send({ ok: true, users });
//     } catch (error: any) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   }

//   export const updateUserType = async (req:any, res:any) => {
//     try {
//       const { userId, userType } = req.body;
  
//       const userDB = await UserModel.findOneAndUpdate({_id:userId},{userType})
    
  
//       res.send({ ok: true,userDB });
//     } catch (error: any) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   }