import  userRegister  from "./userLoginModel";


export const addUser = async (req:any, res:any) => {

  try {
    const { name, password, email } = req.body;
    console.log(name, password, email);

    //add users to DB;
    const userDB = await userRegister.create({ name, password, email });

    console.log(userDB);

    res.status(201).send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}

// export const addUser = async (req:any, res:any) => {
//     try {
//       const name = req.body.name
//       const password = req.body.password
//       const email = req.body.email
//       console.log(name, password, email);
  
//       //add users to DB;
//       const userDB = await userRegister.create({ name, password, email });
  
//       console.log(userDB);
//        const connection = mongoose.connection;
//        connection.collection("userlogins").insertOne(userDB)
//       res.status(201).send({ ok: true });
//     } catch (error: any) {
//       console.error(error);
//       res.status(500).send({ error: error.message });
//     }
//   };