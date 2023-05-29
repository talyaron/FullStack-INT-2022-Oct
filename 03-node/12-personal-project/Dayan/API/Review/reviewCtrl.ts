import ProductModel from "../Product/productModel";
import ReviewModel from "./reviewModel";

import AsyncHandler from "express-async-handler"

//-----Create review (By User)
export const createReview = AsyncHandler(async (req:any, res:any) => {
    const { message, rating } = req.body

    //Find the product:
    //הצגת המוצר עם רשימת הביקורות המלאה שלו - populate()
    const productFound = await ProductModel.findById(req.params.productID).populate("reviews")
    if(!productFound){
        throw new Error("Product not found")
    }

    //Check if the user has already given a review for this product
    const hasReviewed = productFound?.reviews?.find((review) => {
        return review?.user?.toString() === req?.userAuth._id?.toString()
    })
    if(hasReviewed){
        throw new Error("You have already reviewed this product");
    }

    //Create the review
    const review = await ReviewModel.create(
        {
            message,
            rating,
            product: productFound?._id,
            user : req.userAuth._id
        }
    )

    //Push review into product:
    productFound.reviews.push(review)
    await productFound.save()


    res.status(201).json({
        status: "success",
        message:"The review has successfully created",
        review
    })
    
})
//-------------------------------------------