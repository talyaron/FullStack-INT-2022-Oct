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
       const { name, fname, phone, email} = req.body;

    //    this will add to the database
            
    const userDB = await UserModel.create({ name, fname, phone, email });
    res.status(201).send({ ok: true });


    } catch (error) {
        console.error(error); 
        res.status(500).send({ error: error.message });
    }
   

}