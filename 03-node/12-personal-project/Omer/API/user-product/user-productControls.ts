import productModel from "../product/productModel";
import UserProductModel from "./user-productModel";
const secret = process.env.SECRET_TOKEN;
import logInModel from "../user/userModel";
import jwt from "jwt-simple";

export const addUserProduct = async (req:any, res:any) => {
    try {
        const {userName, userId, productId} = req.body;
        const product = await productModel.findById(productId);
        if(!product) throw new Error("No product found");
        
        
        await UserProductModel.create({userName, userId, product, productId});
        res.status(201).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const getUserProducts = async (req:any, res:any) => {
    try {
        const {userId} = req.cookies;
        
        if(!secret) throw new Error("No token found");
        const decoded = jwt.decode(userId, secret);
        const products:any = [];
        const pros = await UserProductModel.find({userId:decoded});        
        pros.forEach((userPro) => {
            products.push(userPro.product);
        })
        res.status(201).send(products)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}

export const deleteUserProducts = async (req:any, res:any) => {
    try {
        const {userId} = req.cookies;
        const {productId} = req.body;
        
        if(!secret) throw new Error("No token found");
        const decoded = jwt.decode(userId, secret);
        await UserProductModel.deleteOne({userId:decoded, productId:productId})
        res.status(200).send(true)
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}