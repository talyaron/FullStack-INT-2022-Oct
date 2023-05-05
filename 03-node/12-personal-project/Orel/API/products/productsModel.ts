import mongoose , {Schema} from "mongoose";

export interface Product{   
src:string
name:string ,
detail:string
price:Number ,

}

export enum ProductType{
    SHOES = "shoes"
}

export const ProductSchema = new Schema({
    src: {
        type: String,
        require: true
    }   ,
    name:{
            type:String ,
            require:true
        },

        detail:{
            type:String ,
            require:true
        },
        price: {
            type:Number ,
            require:true
        },

        productType:{
            type:String ,
            enum:ProductType,
            default:ProductType.SHOES
        }
})

const ProductModel = mongoose.model("products" , ProductSchema)

export default ProductModel