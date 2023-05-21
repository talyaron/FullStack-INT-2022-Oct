import ProductModel from "../Product/productModel";
import UserModel from "../User/userModel";
import OrderModel from "./orderModel";

import AsyncHandler from "express-async-handler"

//-----Create order (By User)
export const createOrder = AsyncHandler(async (req:any, res:any) => {
    const { orderItems, shippingAddress, totalPrice } = req.body

    //Find the user:
    const userFound = await UserModel.findById(req.userAuth._id)
    if(!userFound){
        throw new Error("You should login before placing the order")
    }

    //Check if the user has a shipping address:
    if(!userFound.hasShippingAddress){
        throw new Error("Please provide a shipping address")
    }

    //Check if the order is not empty:
    if(orderItems.length <= 0){
        throw new Error("There are no items in the shopping cart")
    }

    //Create the order:
    const order = await OrderModel.create(
        {
            user: userFound._id,
            orderItems,
            shippingAddress: userFound.shippingAddress,
            totalPrice
        }
    )

    //Updating the quantity of products:
    /*
        {_id:{$in:orderItems}}:
        הפונקציה תבצע חיפוש של המוצרים הרלוונטיים לפי המספר המזהה
        orderItems המוגדר בתוך
    */
    const products = await ProductModel.find({_id:{$in:orderItems}})

    //map - עבור כל הפריטים שהוזמנו
    orderItems.map(async(order) => {
        const product = products.find((product) => {
            /*
                השוואה בין מספר מזהה המוצר שנמצא בבסיס הנתונים 
                לבין מספר מזהה המופיעה בהזמנה שהתקבלה
            */
            return product._id.toString() === order._id.toString()
        })
        if(product){
            //עדכון מספר הפריטים שנמכרו במודל של המוצר בהתאם למספר הפריטים שנמכרו בהזמנה
            product.totalSold += order.quantity
        }
        await product.save()
    })

    //Push order into user:
    userFound.orders.push(order)
    await userFound.save()

    res.status(201).json({
        status: "success",
        message:"The order has successfully created",
        order
    })
})
//-------------------------------------------

//-----Get all orders (By Admin)
export const getAllOrders = AsyncHandler(async (req:any, res:any) => {

    //Find all orders
    const orders = await OrderModel.find().populate("user")
    
    res.status(200).json({
        status: "success",
        message: "All the orders fetched succesfully",
        orders,
    })
})
//-------------------------------------------

//-----Get sales sum of the orders (By Admin) - סיכום של הזמנות ומכירות
export const getSum = AsyncHandler(async (req:any, res:any) => {
    //Check the order status
    /*
        aggregate():
        פונקציה זו משמשת לקבלת מידע על ההזמנות ממסד הנתונים.
        המידע המבוקש כולל את המחיר המינימלי, המחיר המקסימלי,
        הסכום הכולל והממוצע של כל ההזמנות.
    */
    const orders = await OrderModel.aggregate([
        {
            $group: {
                _id: null,
                minimumSale: {
                    $min: "$totalPrice",
                },
                maxSale: {
                    $max: "$totalPrice",
                },
                totalSales: {
                    $sum: "$totalPrice",
                },
                avgSale: {
                    $avg: "$totalPrice",
                },
            },
        }
    ]);
    //Get the date
    /*
        aggregate לאחר מכן, ניצור את התאריך הנוכחי ונשתמש בפונקציית
        על מנת לקבל מידע על המכירות שבוצעו היום ממסד הנתונים.
        המידע המבוקש יכלול את הסכום הכולל של כל המכירות שבוצעו היום.
    */
    const date = new Date()
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate())
    const soldtoday = await OrderModel.aggregate([
        {
            $match: {
                createdAt: {
                    $gte: today,
                },
            },
        },
        {
            $group: {
                _id: null,
                totalSales: {
                    $sum: "$totalPrice",
                },
            },
        },
    ]);

    res.status(200).json({
        status: "success",
        orders,
        soldtoday,
    });
})
//-------------------------------------------