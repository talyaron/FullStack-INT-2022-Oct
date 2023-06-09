import UserModel from '../Model/model'
import { Response, Request } from 'express'

const users: User[] = [];

interface User {
    uid: string
    name: string;
    src: string;
  }

export const getUsers = async (req:Request, res:Response) => {
    try {
      const users = await UserModel.find({});
  
      res.send({ users });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const addUser = async (req:Request, res:Response) => {
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
  }

  export const updateUser = (req:Request, res:Response) => {
    try {
  
  
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const updateUserName = (req:Request, res:Response) => {
    try {
      const { name, uid } = req.body;
      if (!name) throw new Error("No name in data");
      if (!uid) throw new Error("No uid in data");
      const user = users.find((user) => user.uid === uid);
      if (!user) throw new Error("No user in array");
      user.name = name;
      res.send({ ok: true });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }

  export const deleteUser = async (req:Request, res:Response) => {
    try {
      const { _id } = req.body;
  
      const deltedUser = await UserModel.deleteOne({_id})
      const users = await UserModel.find({})
     
      res.send({ ok: true, users });
    } catch (error: any) {
      console.error(error);
      res.status(500).send({ error: error.message });
    }
  }