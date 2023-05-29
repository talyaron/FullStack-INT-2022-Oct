import UserModel from "./usersModel";
// import jwt from 'jwt-simple';
const secret = process.env.JWT_SECRET;

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
    const { name, email, password, tel } = req.body;
    console.log(name, password);

    //add users to DB;
    const userDB = await UserModel.create({ name, email, password, tel });

    console.log(userDB);
    

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
};

export const login = async (req:any, res:any) => {
  try {
    const { name, password } = req.body;
    console.log(name, password);

    //add users to DB;
    const userDB = await UserModel.findOne({ name, password });

    if(!userDB) throw new Error("Username or password are inncorect")
   

   

    res.cookie('user', userDB._id, { maxAge: 50000000, httpOnly: true });

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
  
      const deleteUser = await UserModel.deleteOne({ _id });
      const users = await UserModel.find({});
  
      res.send({ ok: true, users });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const updateUserType = async (req:any, res:any) => {
    try {
      const user = req.user;
      const { userId, userType } = req.body;
  
      const userDB = await UserModel.findOneAndUpdate({_id:userId},{userType})
    
  
      res.send({ ok: true,userDB });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const getUser = async (req:any, res:any)=>{
    try {
     
  const user = req.user;
    
  
      res.send({ ok: true,user });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }