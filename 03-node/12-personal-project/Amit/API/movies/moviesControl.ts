import OrderModel from "../orders/ordersModel"
import SeatModel from "../seats/seatsModel"
import MovieModel from "./moviesModel"

import jwt from "jwt-simple"
const secret = process.env.JWT_SECRET

export enum seatStatus {
  FREE = "free",
  TAKEN = "taken",
}


export const getOneMovie = async (req:any, res:any) => {
  try {
    // const { movieId }= req.body

    // const movie = await MovieModel.findById(movieId)
    // const seats = await SeatModel.find({})
    // const movieOrders = await OrderModel.find({movieId})
    
    // for (const seat of seats){
    //   if(movieOrders.some((order)=> order.seatIds.includes(seat._id as string))){
    //     seat.status = seatStatus.TAKEN
    //   }else{
    //     seat.status = seatStatus.FREE
    //   }
    // }

    // res.send({ movie, seats })

    const { movie } = req.cookies
      if (!secret) throw new Error("No secret")
      if (!movie) throw new Error("No movie found")

      const decoded = jwt.decode(movie, secret)

      const { movieId } = decoded

      const movieDB = await MovieModel.findById(movieId)
  
      res.send({ ok: true, movie: movieDB })

  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message })
  }
}



export const getMovies = async (req:any, res:any) => {
  try {
    const movies = await MovieModel.find({});
    res.send({ movies });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
}


export const enterMovie = async (req:any, res:any) => {
  try {
    const { movieId } = req.body
    if(!movieId) throw new Error("movie Id not found")
    
    const movie = await MovieModel.findById(movieId)
    if (!movie) throw new Error("user not found")
    if (!secret) throw new Error("Missing jwt secret")

    const token = jwt.encode({ movieId: movie._id, role: "public" }, secret)

    res.cookie("movie", token, { maxAge: 5000000000000000, httpOnly: true })
    
    res.status(201).send({ ok: true })
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ error: error.message })
  }
}