import { UserModel } from "../../models/userModel"

export const register = async (req:any, res:any) => {
    try {
        console.log(req.body)
        const {username, email, password} = req.body;
        if (!username || !password) throw new Error("Missing username or password")

        const existingUser = await UserModel.findOne({username, email, password})
        if (!existingUser) {
            console.log("User", username, "don't exist, creating!")
            const newUser = await UserModel.create({username, email, password})
            console.log(newUser)
            res.status(201).send({ok:true})
        } else {
            res.status(500).send({ok:false})
        }

    } catch (error:any) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
};