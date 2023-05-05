
import ProductModel from '../products/productsModel';
import {UsersProductModel} from './userModel'
import UserModel from "./userModel";
import jwt from 'jwt-simple'
const secret = "a45das64d65asd4"

export const getCartUser = async (req:any , res:any) =>{
    try {
        const { user } = req.cookies
        if (!user) throw new Error("no user Cookie")
        if (!secret) throw new Error("No secret");
        const decodedUserID = jwt.decode(user, secret);
        if(!decodedUserID) throw new Error("no found cookie")
        console.log(decodedUserID); 
                const getCart = await UsersProductModel.find({ 'user._id': decodedUserID });
                if(!getCart) return res.status(401).send("not founded")
                res.status(201).send({ok:true , cart:getCart})
    } catch (error) {
        console.error(error)
        res.status(501).send({ok:false})
    }
}
export const createCartList = async (req: any, res: any) => {
    try {
        const { user } = req.cookies
        if (!user) throw new Error("no user Cookie")
        if (!secret) throw new Error("No secret");
        const decodedUserID = jwt.decode(user, secret);
            if(!decodedUserID) throw new Error("no found user Cookie")
        const { productId  , size} = req.body
        const getUser = await UserModel.findById(decodedUserID)
        if (!getUser) throw new Error("no user")
        const getProduct = await ProductModel.findById(productId);
        if (!getProduct) throw new Error("no product")
        const newProductCart = await UsersProductModel.create({user:getUser, product:getProduct , size})
        res.status(201).send({ ok: true, productCart: newProductCart })
    } catch (error) {
        console.error(error)
    }
}

export const getUsers = async (req: any, res: any) => {
    try {
        const users = await UserModel.find({});
        if (!users) throw new Error("not founded users db")
        res.status(201).send({ ok: true, users: users })
    } catch (error) {
        console.error(error)
        res.status(500).send({ ok: false })
    }
}

export const createUser = async (req: any, res: any) => {
    try {
        const { name, email, password } = req.body
        if (!name) throw new Error("not found name")
        if (!email) throw new Error("not found email")
        if (!password) throw new Error("not found password")
        const users = await UserModel.create({ name, email, password });
        const userID = (await users)._id
        if (!secret) throw new Error("no found secret")
        const token = jwt.encode(userID, secret);
        res.cookie("user", token, { maxAge: 900000, httpOnly: true })
        res.status(201).send({ ok: true, users })
    } catch (error) {
        console.error(error)
        res.status(500).send({ ok: false })
    }
}
export const changeNameUser = async (req: any, res: any) => {
    try {
        const { name, userId } = req.body
        if (!name) throw new Error("no found name")
        if (!userId) throw new Error("no found user Id")
        const user = UserModel.findById(userId);
        if (!user) throw new Error("not founded users db")
        console.log(user);
        res.status(201).send({ ok: true, users: user })
    } catch (error) {
        console.error(error)
        res.status(500).send({ ok: false })
    }
}

export const getUser = async (req: any, res: any) => {
    try {
        const { user } = req.cookies
        if (!user) throw new Error("no user Cookie")
        if (!secret) throw new Error("No secret");

        const decodedUserID = jwt.decode(user, secret);
        const userDB = await UserModel.findById(decodedUserID);
        const userInfo = { name: userDB!.name, email: userDB!.email, src: userDB?.userType }
        res.send(JSON.stringify(userInfo));
    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }
};

export const login = async (req: any, res: any) => {
    try {
        const { email, password } = req.body
        if (!email) throw new Error("no email")
        if (!password) throw new Error("no password")
        console.log(email, password);
        const findUser = await UserModel.findOne({ email, password })
        console.log(findUser);
        if (!findUser) throw new Error("The password and email do not match ")
        if (findUser.email === email && findUser.password === password) {
            if (!secret) throw new Error("no found secret")
            const token = jwt.encode(findUser._id, secret);
            res.cookie("user", token, { maxAge: 2 * 60 * 60 * 1000, httpOnly: true })
            res.status(201).send({ ok: true })

        }

    } catch (error: any) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }

}

export const logout = async (req: any, res: any) => {
    try {
        res.clearCookie("user");
        res.send({ logout: true })
    } catch (error) {
        console.error(error)
    }
}