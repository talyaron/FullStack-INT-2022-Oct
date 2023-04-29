import UserModel from "./itemsModel";

// export const getItems = async (req:any, res:any) => {
//     try {
//       const users = await UserModel.find({});
  
//       res.send({ users });
//     } catch (error: any) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   }


// export const addItem = async (req:any, res:any) => {
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



//   export const deleteItems = async (req:any, res:any) => {
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
