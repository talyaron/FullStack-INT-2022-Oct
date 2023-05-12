import mongoose from 'mongoose'
import { ICategory } from '../Category/categoryModel';
import { IBrand } from '../Brand/brandModel';
import { IColor } from '../Color/colorModel';
import { IReview } from '../Review/reviewModel';

const { Schema } = mongoose;

//Interface
export interface IProduct extends Document{
    name: string,
    description: string,
    brand: IBrand,
    category: ICategory,
    sizes: [string],
    colors: IColor[],
    imges: [{string: any}],
    reviews: IReview[],
    price: number,
    totalQty: number,
    totalSold: number,
}

//Scheme
export const ProductSchema = new Schema<IProduct>(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        brand:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
            ref: "Category"
        },
        sizes:{
            type: [String],
            enum: ["XS", "S", "M", "L", "XL", "XXL"],
            required: true,
        },
        colors:{
            type: [String],
            required: true
        },
        images: [
            {
                type: String,
                required: true
            }
        ],
        reviews: [
            {
                type: Schema.Types.ObjectId,
                ref: "Review"
            }
        ],
        price: {
            type: Number,
            required: true,
        },
        totalQty: {
            type: Number,
            required: true,
        },
        totalSold: {
            type: Number,
            required: true,
            default: 0
        },
    },
    { 
        timestamps: true,
        /*
            virtuals: true
            מאפשר הוספת מאפיינים וירטואליים למודל.
        */
        toJSON: { virtuals: true}
    },
)

//Virtuals - הוספת מאפיין ויטואלי
//-----Remaining quantity
/*
    הקוד הבא משמש לחישוב והוספת מאפיין וירטואלי למודל של מוצר
    המציג את הכמות הזמינה למכירה של המוצר.
*/
/*
    virtual():
    פעולה של מונגוס המוסיפה מאפיינים וירטואליים למודל.
    quantityLeft בדוגמה שלנו אנחנו מוסיפים מאפיין וירטואלי בשם
    get():
    מציין את הפעולה המבוצעת בזמן שהמאפיין הוירטואלי מתקבל.
*/
ProductSchema.virtual("quantityLeft").get(function(){
    const product = this;
    /*
        הפונקציה מחזירה את הכמות הזמינה למכירה של המוצר,
        כלומר, את ההפרש בין הכמות הכוללת לבין הכמות שנמכרה.
    */
   const quantityLeft = product.totalQty - product.totalSold
   return quantityLeft
  })


//-------------------------------------------

//-----Rating
ProductSchema.virtual("totalReviews").get(function(){
    const product = this
    return product.reviews.length
})

//Calculate Average Rating
ProductSchema.virtual("averageRating").get(function(){
    let ratingsTotal: number = 0
    const product = this
    product.reviews.forEach((review) => {
        ratingsTotal += review.rating
    })
    const averageRating = Number(ratingsTotal / product.reviews.length).toFixed(1)
    return averageRating
})
//-------------------------------------------

//Model
const ProductModel = mongoose.model('Product',ProductSchema)

export default ProductModel