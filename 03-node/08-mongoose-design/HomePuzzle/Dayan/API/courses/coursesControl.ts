import AsyncHandler from "express-async-handler"

import CourseModel from "./coursesModel"
import AdminModel from "../admin/adminModel"


//-----Create courses
export const createCourse = AsyncHandler(async (req:any, res:any) => {
    const { name, description } = req.body

    //Check if course is exists in DB:
    const courseFound = await CourseModel.findOne({ name })
    if(courseFound){
        throw new Error("Course already exists")
    }

    //Create course
    const courseCreated = await CourseModel.create({
        name,
        description,
        createdBy: req.userAuth._id
    })

    //push course into admin
    const admin = await AdminModel.findById(req.userAuth._id)
    admin.courses.push(courseCreated)
    await admin.save()

    res.status(201).json({
        status: "success",
        message:"Course created succesfully",
        data: courseCreated,
    })
})
//-------------------------------------------

//-----Get All courses
export const getAllcourses = AsyncHandler(async (req:any, res:any) => {
    const courses = await CourseModel.find()
    res.status(200).json({
        status: "success",
        message:"All courses fetched succesfully",
        data: courses
    })
})
//-------------------------------------------

//-----Get single course
export const getCourse = AsyncHandler(async (req:any, res:any) => {
    const course = await CourseModel.findById(req.params.id)
    res.status(200).json({
        status: "success",
        message:"Course fetched succesfully",
        data: course
    })
})
//-------------------------------------------

//-----Update course
export const updateCourse = AsyncHandler(async (req:any, res:any) => {
    const { name, description } = req.body 

    //If name exists
    const courseFound = await CourseModel.findOne({name})
    if(courseFound){
        throw new Error('Course already exist')
    }
    //update
    const course = await CourseModel.findByIdAndUpdate(
        req.params.id,
        {
            name,
            description,
            createdBy: req.userAuth._id
        },
        {
            new: true
        }
    )
    res.status(201).json({
        status: "success",
        message:"Course update succesfully",
        data: course
    })
})
//-------------------------------------------

//-----Delete course
export const deleteCourse = AsyncHandler(async (req:any, res:any) => {
    await CourseModel.findByIdAndDelete(req.params.id)
    res.status(201).json({
        status: "success",
        message:"Course deleted succesfully"
    })
})
//-------------------------------------------