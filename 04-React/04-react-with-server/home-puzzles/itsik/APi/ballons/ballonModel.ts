import mongoose, {Schema} from "mongoose";

const ballons =
[{src:"https://shorturl.at/bpFL5"},
{src:"https://shorturl.at/dnOS0"}, 
{src:"https://shorturl.at/oLSX5"}, 
{src:"https://shorturl.at/ghsO3"},
{src:"https://shorturl.at/aoEJ5"},
{src:"https://shorturl.at/prwEI"},
]

export const BallonSchema = new Schema({
    src: String,
})
 
const BallonModel = mongoose.model("ballons", BallonSchema)


export default BallonModel