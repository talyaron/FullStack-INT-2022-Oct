import mongoose, { Schema, Document } from "mongoose";
import { MovieSchema } from "../movies/moviesModel";
import { SeatSchema } from "../seats/seatsModel";


export interface User{
    name: string;
    password: string;
    loggedIn: boolean;
}

export const UserSchema = new Schema({
    name: String,
    password: String,
    loggedIn: Boolean,
});


export const UserMovieSchema = new Schema({
    user: UserSchema,
    movie: MovieSchema,
})

export const UserSeatSchema = new Schema({
    user: UserSchema,
    seat: SeatSchema,
})

const UserModel = mongoose.model<User>("users", UserSchema)
export default UserModel

export const  UserMovieModel = mongoose.model("user-movies", UserMovieSchema)
export const  UserSeatModel = mongoose.model("user-seats", UserSeatSchema)



// User(m:m)Movie
// User(1:m)Seat
// Movie(1:m)Seat 
