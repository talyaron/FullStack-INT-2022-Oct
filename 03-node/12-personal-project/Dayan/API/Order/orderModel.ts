import mongoose from 'mongoose'
import { IUser } from '../User/userModel';
import { IProduct } from '../Product/productModel';

const { Schema } = mongoose;

//Interface
export interface IOrder extends Document{
    user: IUser,
    orderItems: IProduct[],
    shippingAddress: IUser["shippingAddress"],
    orderNumber: string,
    paymentStatus: string,
    paymentMethod: string,
    totalPrice: number,
    currency: string,
    status: string,
    deliveredAt: Date
}

//Generating a random number for the order
/*
    randomTxt:
    משתנה זה מייצר מחרוזת רנדומלית באמצעות הפעולות הבאות:
    Math.random() - פעולה המחזירה מספר רנדומלי בין 0 ל-1
    toString(36) - פעולה זו ממירה את המספר הרנדומלי למחרוזת בסיס 36
    substring(7) - פעולה זו מחזירה את התווים המורכבים ממקום ה-7 במחרוזת ועד הסוף
    toLocaleUpperCase() - פעולה זו ממירה את המחרוזת לאותיות גדולות

    לסיכום - המשתנה מחיל מחרוזת רנדומלית של תווים הכוללת ספרות ואותיות גדולות באנגלית,
    והתווים המוצגים במשתנה הם התווים ממקום ה-7 במחרוזת ועד הסוף.
*/
const randomTxt = Math.random().toString(36).substring(7).toLocaleUpperCase();
/*
    randomNumbers:
    המשתנה מייצר מספר רנדומלי בין 1,000 ל-90,000 ע"י הפעלת הפונקציות הבאות:
    Math.random() - פעולה המחזירה מספר רנדומלי בין 0 ל-1
     Math.floor() - פעולה זו מעגלת את המספר למספר שלם למטה.
*/
const randomNumbers = Math.floor(1000 + Math.random() * 90000);

//Scheme
export const OrderSchema = new Schema<IOrder>(
    {
        //המשתמש/הלקוח שביצע את ההזמנה
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        //רשימת המוצרים שהזומנו
        orderItems: [
            {
              type: Schema.Types.ObjectId,
              ref: "Product",
              required: true,
            }
        ],
        //כתובת למשלוח
        shippingAddress: {
            type: Object,
            required: true,
        },
        //מספר הזמנה
        orderNumber: {
            type: String,
            default: randomTxt + randomNumbers,
        },
        //סטטוס תשלום
        paymentStatus: {
            type: String,
            default: "Not paid",
        },
        //שיטת תשלום
        paymentMethod: {
            type: String,
            default: "Not specified",
        },
        //סה"כ תשלום
        totalPrice: {
            type: Number,
            default: 0.0,
        },
        //מטבע
        currency: {
            type: String,
            default: "Not specified",
        },
        //סטטוס ההזמנה
        status: {
            type: String,
            enum: ["pending", "processing", "shipped", "delivered"],
            default: "pending",
        },
        //תאריך משלוח
        deliveredAt: {
            type: Date,
        },
    },
    { timestamps: true }
)


//Model
const OrderModel = mongoose.model('Order', OrderSchema)

export default OrderModel