import mongoose from 'mongoose'
const { Schema } = mongoose;

//Scheme
export const TeacherSchema = new Schema(
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
        teacherId: {
            type: String,
            required: true,
            default: function (){
                try{
                    return (
                        "TEACHER" +
                        Math.floor(100 + Math.random() * 900) +
                        Date.now().toString().slice(2, 4) + //returns selected elements in an array, as a new array.
                        this.name
                        .split(" ") //splits a string into an new array of substrings.
                        .map(name => name[0]) //creates a new array from calling a function for every array element.
                        .join("") //returns an array as a string.
                        .toUpperCase() 
                    )

                }catch(error){
                    console.error(error)
                }
            }
        },
        role: {
            type: String,
            default: "teacher",
        },
        subject: {
            type: Schema.Types.ObjectId,
            ref: "Subject",
            // required: true,
        },
        course: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

//Model
const TeacherModel = mongoose.model('courses',TeacherSchema)

export default TeacherModel