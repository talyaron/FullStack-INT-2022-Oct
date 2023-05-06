import userModel from "./usersModel";

export const getUser = async (req: any, res: any) => {
    try {
        const users = userModel.find({})
        res.send(users)
    } catch (error) {
        console.error(error)
    }
}


export const addUser = async (req: any, res: any) => {
    try {
        const {name , email ,password} = req.body
    
        const newUser = userModel.create({})

    } catch (error) {
        console.error(error)
    }
}

export const searchUserById = async (req: any, res: any) => {
    try {


    } catch (error) {
        console.error(error)
    }


}


export const searchUserByName = async (req: any, res: any) => {
    try {


    } catch (error) {
        console.error(error)
    }
}