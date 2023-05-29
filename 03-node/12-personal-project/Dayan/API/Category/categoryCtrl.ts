import CategoryModel from "./categoryModel";

import AsyncHandler from "express-async-handler"

//-----Create category (By Admin)
export const createCategory = AsyncHandler(async (req:any, res:any) => {
    const { name } = req.body

    //Check if the category already exists in DB:
    const categoryFound = await CategoryModel.findOne({ name })
    if(categoryFound){
        throw new Error("The category already exists")
    }


    //Create the category
    const category = await CategoryModel.create(
        {
            name
        }
    )

    res.status(201).json({
        status: "success",
        message:"The category has successfully created",
        category
    })

})
//-------------------------------------------

//-----Get all categories (By Admin)
export const getAllCategories = AsyncHandler(async (req:any, res:any) => {
    const categories = await CategoryModel.find()
    res.status(200).json({
        status: "success",
        message:"All categories fetched succesfully",
        categories
    })
})
//-------------------------------------------

//-----Get single category (By Admin)
export const getSingleCategory = AsyncHandler(async (req:any, res:any) => {
    const category = await CategoryModel.findById(req.params.categoryID)
    if(!category){
        throw new Error("Category not found")
    }
    res.status(200).json({
        status: "success",
        message:"The category fetched succesfully",
        category
    })
})
//-------------------------------------------

//-----Update category (By Admin)
export const updateCategory = AsyncHandler(async (req:any, res:any) => {
    const { name } = req.body 

    //If name exists
    const categoryFound = await CategoryModel.findOne({ name })
    if(categoryFound){
        throw new Error("The category already exists")
    }
    //update
    const category = await CategoryModel.findByIdAndUpdate(
        req.params.categoryID,
        {
            name,
        },
        {
            new: true
        }
    )

    res.status(200).json({
        status: "success",
        message:"The category has been successfully updated",
        category
    })
})
//-------------------------------------------

//-----Delete category (By Admin)
export const deleteCategory = AsyncHandler(async (req:any, res:any) => {
    await CategoryModel.findByIdAndDelete(req.params.categoryID)

    res.status(200).json({
        status: "success",
        message:"The category has been successfully deleted"
    })
})
//-------------------------------------------