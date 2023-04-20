import AdminModel from "./adminModel"
// import { AdminDoc } from "./adminModel"

//-----Admin register
export const register = async (req:any, res:any) => {
    try {
        const { name, email, password } = req.body

        //Check if email exists in DB:
        const adminFound = await AdminModel.findOne({ email })
        if(adminFound){
            res.json("Admin Exists")
        }

        //Register (Add user to DB):
        const user = await AdminModel.create({
            name,
            email,
            password
        })

        res.status(201).json({
            status: "success",
            data: user
        })

    } catch (error: any) {
        res.json({
            status: "failed",
            error: error.message
        })
    } 
}
//-------------------------------------------

//-----Admin login
export const login = async (req:any, res:any) => {
    try {
        const { email, password } = req.body

        //Find user in DB:
        const user = await AdminModel.findOne({ email })
        if(!user){
            return res.json({ message: "Invliad login crendentials"})
        }
        if(user && await user.matchPassword(password)){
            return res.json({ data: user })
        }else{
            return res.json({ message: "Invliad login crendentials"})
        }
    } catch (error: any) {
        res.json({
            status: "failed",
            error: error.message
        })
    } 
}
//-------------------------------------------

//-----Get all admins
export const getAllAdmins = async (req:any, res:any) => {
    try {
        //find all users from DB:
        const users = await AdminModel.find({})
        if(!users){
            return res.json({ message: "Admins did not found"})
        }else{
            return res.json({users})
        }
    } catch (error: any) {
        res.json({
            status: "failed",
            error: error.message
        })
    } 
}
//-------------------------------------------

//-----Get single admin
export const getSingleAdmin = async (req:any, res:any) => {
    try {
        res.status(201).json({
            status: "success",
            data:"Single Admin"
        })

    } catch (error: any) {
        res.json({
            status: "failed",
            error: error.message
        })
    } 
}
//-------------------------------------------

//-----Update admin
export const updateAdmin = async (req:any, res:any) => {
    try {
        res.status(201).json({
            status: "success",
            data:"Admin has been updated"
        })

    } catch (error: any) {
        res.json({
            status: "failed",
            error: error.message
        })
    } 
}
//-------------------------------------------

//-----Delete admin
export const deleteAdmin = async (req:any, res:any) => {
    try {
        res.status(201).json({
            status: "success",
            data:"Admin has been deleted"
        })

    } catch (error: any) {
        res.json({
            status: "failed",
            error: error.message
        })
    } 
}
//-------------------------------------------

//-----Admin publish exam results
export const publishExamResults = async (req:any, res:any) => {
    try {
        res.status(201).json({
            status: "success",
            data:"Admin has been published the exam results"
        })

    } catch (error: any) {
        res.json({
            status: "failed",
            error: error.message
        })
    } 
}
//-------------------------------------------

//-----Admin unpublish exam results
export const unpublishExamResults = async (req:any, res:any) => {
    try {
        res.status(201).json({
            status: "success",
            data:"Admin did not publish the exam results"
        })

    } catch (error: any) {
        res.json({
            status: "failed",
            error: error.message
        })
    } 
}
//-------------------------------------------