import UserModel from "./usersModel"

import jwt from "jwt-simple"
const secret = process.env.JWT_SECRET

export const createUser = async (req:any, res:any) => {
  try {
    const { name, password } = req.body
    if(!name) throw new Error("name not found")
    if(!password) throw new Error("password not found")

    const loggedIn:boolean = false
    
    const userDB = await UserModel.create({name, password, loggedIn})
  
    res.status(201).send({ ok: true })
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message })
  }
};


export const getUser = async (req:any, res:any) => {
    try {
      const { user } = req.cookies
      if (!secret) throw new Error("No secret")
      if (!user) throw new Error("No user found")

      const decoded = jwt.decode(user, secret)

      const { userId } = decoded

      const userDB = await UserModel.findById(userId)
  
      res.send({ ok: true, user: userDB })
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message })
    }
}
  

export const login = async (req:any, res:any) => {
  try {
    const { name, password } = req.body
    if(!name) throw new Error("name not found")
    if(!password) throw new Error("password not found")
    
    const user = await UserModel.findOne({name, password})
    if (!user) throw new Error("Username or password are inncorect")
    if (!secret) throw new Error("Missing jwt secret")

    user.loggedIn = true

    const token = jwt.encode({ userId: user._id, role: "public" }, secret)

    res.cookie("user", token, { maxAge: 5000000000000000, httpOnly: true })
    
    res.status(201).send({ ok: true })
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message })
  }
}
  






