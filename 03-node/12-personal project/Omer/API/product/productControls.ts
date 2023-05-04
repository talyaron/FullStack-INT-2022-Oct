import logInModel from "../user/userModel";
import productModel from "./productModel";
import { product } from "./productModel";
import jwt from "jwt-simple";
const secretToken = process.env.SECRET_TOKEN;


export const addProductToStorage = async (req: any, res: any) => {
    try {
        const { name, type, price, img } = req.body;
        await productModel.create({ name, type, price, img })
        res.status(201).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const getProducts = async (req:any, res:any) => {
    try {
        const products = await productModel.find();        
        res.status(200).send(products);
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const addProductToWish =async (req:any, res:any) => {
    try {
        const {productId, userId} = req.body;
        const user = await logInModel.findById(userId);
        if(!user) throw new Error("No user found");
        const index = user.products.findIndex(product => product == productId);
        if(index != -1) throw new Error("Item already added");
        user.products.push(productId);
        user.save()
        res.status(200).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}

export const getUserWish = async (req:any, res:any) => {
    try {
        
        const {id} = req.cookies;
        if (!secretToken) throw new Error("Missing jwt secret");
        const _id = jwt.decode(id, secretToken);
        
        const user = await logInModel.findById(_id);
        if(!user) throw new Error("No user found");
        const products:any[] = [];
        user.products.forEach(async (productId) => {            
            const product = await productModel.findById(productId);
            // console.log(product);
            
            await products.push(product)
        })        
        console.log("products:" + products);
        
        res.status(200).send(products)
    } catch (error) {
        console.error(error);
        res.status(500).send(error)
    }
}
