import mongoose, { Mongoose, Schema } from "mongoose";

interface FeedBack {
    name: string;
    email: string;
    message: string;
}


const feedBacks: FeedBack[]=[];


const FeedBackSchema = new Schema({
    name: String,
    email: String,
    message: String,
});

const FeedBackModel = mongoose.model("Feedbacks",FeedBackSchema);

export default FeedBackModel;