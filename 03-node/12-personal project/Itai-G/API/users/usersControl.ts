import UserModel from "./usersModel";
import jwt from "jwt-simple"
const secret = process.env.JWT_SECRET;


export const getUsers = async (req: any,res:any) => {
    try {
        const users = await UserModel.find({});

        res.send({ users });
    } catch (error: any) {
    console.error(error)
    res.status(500).send({ error: error.message })        
    }
}

export const addUser = async (req: any,res:any) =>{
    try {
        const {name , password , email} = req.body;
        console.log(name , email , password);
        const userDB = await UserModel.create({name , password, email});

        console.log(userDB);
        
        res.status(201).send({ ok: true });
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error:error.message });
    }
}


export const login = async(req: any, res:any) => {
    try {
        const {name , password} = req.body;
        console.log(name , password);

        const userDB = await UserModel.findOne({name , password});
        if(!userDB) throw new Error("Please Cheack Username or password");
        if(!secret) throw new Error("Missing jwt secret")

        const token = jwt.encode({ userId: userDB._id,role:"public"},secret);
        console.log(token);

        res.cookie("user",token,{httpOnly:true});

        res.status(201).send({userDB});
    } catch (error: any) {
        console.error(error);
        res.status(500).send({error:error.message});
    }
};