import UserModel from "./usersModel";

// export const getUsers = async (req:any, res:any) => {
//     try {
//       const users = await UserModel.find({});
  
//       res.send({ users });
//     } catch (error: any) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   }


// export const addUser = async (req:any, res:any) => {
//   try {
//     const { name, src } = req.body;
//     console.log(name, src);

//     //add users to DB;
//     const userDB = await UserModel.create({ name, src });

//     console.log(userDB);

//     res.status(201).send({ ok: true });
//   } catch (error: any) {
//     console.error(error);
//     res.status(500).send({ error: error.message });
//   }
// };


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