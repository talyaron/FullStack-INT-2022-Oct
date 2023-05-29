import ColorModel from "./colorModel"

import AsyncHandler from "express-async-handler"

//-----Create color (By Admin)
export const creatColor = AsyncHandler(async (req:any, res:any) => {
    const { name } = req.body

    //Check if the color already exists in DB:
    const colorFound = await ColorModel.findOne({ name })
    if(colorFound){
        throw new Error("The color already exists")
    }

    //Create the color
    const color = await ColorModel.create(
        {
            name: name.toLowerCase()
        }
    )

    res.status(201).json({
        status: "success",
        message:"The color has successfully created",
        color
    })
})
//-------------------------------------------

//-----Get all colors
export const getAllColors = AsyncHandler(async (req:any, res:any) => {
    const colors = await ColorModel.find()
    res.status(200).json({
        status: "success",
        message:"All the colors fetched succesfully",
        colors
    })
})
//-------------------------------------------

//-----Get single color
export const getSingleColor = AsyncHandler(async (req:any, res:any) => {
    const color = await ColorModel.findById(req.params.colorID)
    if(!color){
        throw new Error("Color not found")
    }
    res.status(200).json({
        status: "success",
        message:"The color fetched succesfully",
        color
    })
})
//-------------------------------------------

//-----Update color (By Admin)
export const updateColor = AsyncHandler(async (req:any, res:any) => {
    const { name } = req.body 

    //If name exists
    const colorFound = await ColorModel.findOne({ name })
    if(colorFound){
        throw new Error("The color already exists")
    }
    //update
    const color = await ColorModel.findByIdAndUpdate(
        req.params.colorID,
        {
            name,
        },
        {
            new: true
        }
    )

    res.status(200).json({
        status: "success",
        message:"The color has been successfully updated",
        color
    })
})
//-------------------------------------------

//-----Delete color (By Admin)
export const deleteColor = AsyncHandler(async (req:any, res:any) => {
    await ColorModel.findByIdAndDelete(req.params.colorID)

    res.status(200).json({
        status: "success",
        message:"The color has been successfully deleted"
    })
})
//-------------------------------------------