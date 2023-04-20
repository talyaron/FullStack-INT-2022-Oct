import mongoose from 'mongoose'
const { Schema } = mongoose;

import bcrypt from 'bcryptjs'

//Interface
export interface AdminDoc extends Document{
    name: {
        type: String,
        required: boolean,
    },
    email: {
        type: String,
        required: boolean,
    },
    password: {
        type: String,
        required: boolean,
    },
    role: {
        type: String,
        default: String
    },
    matchPassword: (pw: string) => Promise<boolean>
}

//Scheme
export const AdminSchema = new Schema<AdminDoc>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "admin"
        },
    },
    {
        timestamps:true
    }
)

//Hashing Admin Password:
AdminSchema.pre("save", async function(next){
    try{
        //Check if the user has updated his password:
        if(!this.isModified('password')){
            next()
        }
        //salt
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    }catch(error){
        console.error(error)
    }
})

//Verify Password:
AdminSchema.methods.matchPassword = async function (enteredPassword:String){
    try{
        /*
            The function receives the password entered by the user 
            and compares it to the password stored in the DB.
            If the password entered by the user matches, 
            the function returns a boolean value true, 
            and if not, then the function returns false.
        */
        return await bcrypt.compare(enteredPassword, this.password)
    }catch(error){
        console.error(error)
    }
}

//Model
const AdminModel = mongoose.model('Admin',AdminSchema)

export default AdminModel