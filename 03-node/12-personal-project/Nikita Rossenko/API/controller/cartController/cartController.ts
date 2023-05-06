import jwt from "jwt-simple"
import { CartModel } from "../../models/cartModel";
import StarshipModel from "../../models/starshipModel";

export const addItemToCart = async (req:any, res:any) => {
    try {
        const {itemId} = req.body;
        const {isLoggedIn} = req.cookies;
        const jwtSecret = process.env.JWT_SECRET

        if (!jwtSecret) throw new Error("Server Error!")
        const userId = jwt.decode(isLoggedIn, jwtSecret)
        if (!userId) throw new Error("Couldn't find user!")

        const existingItemCart = await CartModel.findOne({"product._id":itemId, "cart.user":userId})
        if (!existingItemCart) {
            const starship = await StarshipModel.findOne({_id:itemId})
            const createdCart = await CartModel.create({product:starship, "cart.user":userId})
            if (!createdCart) throw new Error("Coudnl't create cart!")
        } else {
            const { quantity } = existingItemCart
            const addingItem = await CartModel.findOneAndUpdate({"cart.user":userId, "product._id":itemId}, {quantity:quantity+1})
    }


        res.status(201).send({ok:true})

    } catch (error:any) {
        console.log(error)
        res.status(500).send({ok:false, error: error.message})
    }
}

export const getCartItems = async (req:any, res:any) => {
    try {
        const {isLoggedIn} = req.cookies;

        const jwtSecret = process.env.JWT_SECRET
        if (!jwtSecret) throw new Error("Server Error!")

        const userId = jwt.decode(isLoggedIn, jwtSecret)
        if (!userId) throw new Error("Couldn't find user!")

        const cartItemsArray = await CartModel.find({"cart.user":userId})


        res.status(201).send({ok:true, cartItemsArray})

    } catch (error:any) {
        console.log(error)
        res.status(500).send({ok:false, error: error.message})
    }
}

export const deleteItemFromCart = async (req:any, res:any) => {
    try {
        const {isLoggedIn} = req.cookies;
        const cartItemId = req.body._id;

        const jwtSecret = process.env.JWT_SECRET
        if (!jwtSecret) throw new Error("Server Error!")

        const userId = jwt.decode(isLoggedIn, jwtSecret)
        if (!userId) throw new Error("Couldn't find user!")

        const cartItemsArray = await CartModel.findOne({"cart.user":userId, _id:cartItemId})
        
        if (!cartItemsArray) throw new Error("Item Error!")
        
        const deleteCartItemsArray = await CartModel.deleteOne({"cart.user":userId, _id:cartItemId})


        res.status(201).send({ok:true, cartItemsArray})

    } catch (error:any) {
        console.log(error)
        res.status(500).send({ok:false, error: error.message})
    }
}