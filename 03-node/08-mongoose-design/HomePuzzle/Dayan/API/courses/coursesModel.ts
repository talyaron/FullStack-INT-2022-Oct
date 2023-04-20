import mongoose from 'mongoose'
// import { TeacherSchema } from '../teachers/teachersModel';
const { Schema } = mongoose;


//Scheme
export const CourseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        code: {
            type: String,
            default: function(){
                try{
                    return (
                        this.name
                        .split(" ") //splits a string into an new array of substrings.
                        .map(name => name[0]) //creates a new array from calling a function for every array element.
                        .join("") //returns an array as a string.
                        .toUpperCase()+
                        Math.floor(10 + Math.random() * 90) +
                        Math.floor(10 + Math.random() * 90)
                    )
                }
                catch(error){
                console.error(error)
                }
            }
        },
        teachers: [
            {
              type: Schema.Types.ObjectId,
              ref: "Teacher",
            },
        ],
        students: [
            {
              type: Schema.Types.ObjectId,
              ref: "Student",
              default: [],
            },
        ],
        subjects: [
            {
              type: Schema.Types.ObjectId,
              ref: "Subject",
              default: [],
            },
        ],
    },
    { 
        timestamps: true
    }
)

const CourseModel = mongoose.model('courses',CourseSchema)

export default CourseModel