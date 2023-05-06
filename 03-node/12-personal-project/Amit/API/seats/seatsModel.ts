import mongoose, { Schema, Document } from "mongoose";

export interface Seat {
    rowNumber: string;
    seatNumber: string;
}

export const SeatSchema = new Schema({
    rowNumber: String,
    seatNumber: String,
});


const SeatModel = mongoose.model<Seat>("seats", SeatSchema);

export default SeatModel;