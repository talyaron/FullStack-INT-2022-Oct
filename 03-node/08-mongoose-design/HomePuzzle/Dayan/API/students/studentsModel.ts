import mongoose from 'mongoose'
// import { CourseSchema } from '../courses/coursesModel';
const { Schema } = mongoose;


//Scheme
export const StudentSchema = new Schema(
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
        studentId: {
            type: String,
            required: true,
            default: function () {
                try{
                    return (
                        "STUDENT" +
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
            },
        },
        role: {
            type: String,
            default: "student",
        },
        examResults: [
            {
              type: Schema.Types.ObjectId,
              ref: "ExamResult",
            },
        ],
        course: {
            type: Schema.Types.ObjectId,
            ref: "Course"
        },
    },
    {
        timestamps: true,
    }
)

//Model
const StudentModel = mongoose.model('student',StudentSchema)

export default StudentModel