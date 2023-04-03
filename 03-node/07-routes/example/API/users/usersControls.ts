import UserModel from "./usersModel";

export const getUsers = async (req:any, res:any) => {
    try {
      const users = await UserModel.find({});
  
      res.send({ users });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }


export const addUser = async (req:any, res:any) => {
  try {
    const { name, src } = req.body;
    console.log(name, src);

    //add users to DB;
    const userDB = await UserModel.create({ name, src });

    console.log(userDB);

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const updateUser = (req:any, res:any) => {
    try {
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }


  export const updateUserName = (req:any, res:any) => {
    try {
      // const { name, uid } = req.body;
      // if (!name) throw new Error("No name in data");
      // if (!uid) throw new Error("No uid in data");
      // const user = users.find((user) => user.uid === uid);
      // if (!user) throw new Error("No user in array");
      // user.name = name;
      // res.send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }


  export const deleteUser = async (req:any, res:any) => {
    try {
      const { _id } = req.body;
  
      const deltedUser = await UserModel.deleteOne({ _id });
      const users = await UserModel.find({});
  
      res.send({ ok: true, users });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }