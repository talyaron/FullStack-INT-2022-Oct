import mongoose from 'mongoose'
import { IOrder } from '../Order/orderModel';

const { Schema } = mongoose;

//Interface
export interface IUser extends Document{
    fullname: string,
    email: string,
    password: string,
    orders: IOrder[],
    wishList: [],
    role: string,
    hasShippingAddress: boolean,
    shippingAddress: {};
}

//Scheme
export const UserSchema = new Schema<IUser>(
    {
        fullname:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        orders:[
            {
                type: Schema.Types.ObjectId,
                ref: "Order",
            }
        ],
        wishList:[
            {
                type: Schema.Types.ObjectId,
                ref: "WishList",
            }
        ],
        role: {
            type: String,
            default: "client"
        },
        hasShippingAddress:{
            type: Boolean,
            default: false,
        },
        shippingAddress:{
            firstName:{
                type: String
            },
            lastName:{
                type: String
            },
            address:{
                type: String
            },
            city:{
                type: String
            },
            postalCode:{
                type: String
            },
            country:{
                type: String
            },
            phone:{
                type: String
            },
        }
    },
    { timestamps: true }
)

//Model
const UserModel = mongoose.model('User',UserSchema)

export default UserModel