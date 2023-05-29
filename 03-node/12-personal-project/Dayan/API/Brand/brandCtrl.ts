import BrandModel from "./brandModel";

import AsyncHandler from "express-async-handler"

//-----Create brand (By Admin)
export const createBrand = AsyncHandler(async (req:any, res:any) => {
    const { name } = req.body

    //Check if the brand already exists in DB:
    const brandFound = await BrandModel.findOne({ name })
    if(brandFound){
        throw new Error("The brand already exists")
    }

    //Create the brand
    const brand = await BrandModel.create(
        {
            name
        }
    )

    res.status(201).json({
        status: "success",
        message:"The brand has successfully created",
        brand
    })
})
//-------------------------------------------

//-----Get all brands (By Admin)
export const getAllBrands = AsyncHandler(async (req:any, res:any) => {
    const brands = await BrandModel.find()
    res.status(200).json({
        status: "success",
        message:"All the brands fetched succesfully",
        brands
    })
})
//-------------------------------------------

//-----Get single brand (By Admin)
export const getSingleBrand = AsyncHandler(async (req:any, res:any) => {
    const brand = await BrandModel.findById(req.params.brandID)
    if(!brand){
        throw new Error("Brand not found")
    }
    res.status(200).json({
        status: "success",
        message:"The brand fetched succesfully",
        brand
    })
})
//-------------------------------------------

//-----Update brand (By Admin)
export const updateBrand = AsyncHandler(async (req:any, res:any) => {
    const { name } = req.body 

    //If name exists
    const brandFound = await BrandModel.findOne({ name })
    if(brandFound){
        throw new Error("The brand already exists")
    }
    //update
    const brand = await BrandModel.findByIdAndUpdate(
        req.params.brandID,
        {
            name,
        },
        {
            new: true
        }
    )

    res.status(200).json({
        status: "success",
        message:"The brand has been successfully updated",
        brand
    })
})
//-------------------------------------------

//-----Delete brand (By Admin)
export const deleteBrand = AsyncHandler(async (req:any, res:any) => {
    await BrandModel.findByIdAndDelete(req.params.brandID)

    res.status(200).json({
        status: "success",
        message:"The brand has been successfully deleted"
    })
})
//-------------------------------------------