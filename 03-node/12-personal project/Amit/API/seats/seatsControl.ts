import { MovieSeatModel } from "../movies/moviesModel"
import SeatModel from "./seatsModel"


export const getSeats = async (req:any, res:any) => {
  try {
    const seats = await SeatModel.find({})
    res.send({ seats })
  } catch (error: any) {
    console.error(error)
    res.status(500).send({ error: error.message })
  }
}
  
export const pickOneSeat = async (req:any, res:any) => {
  try {
    const { seat, movie } = req.body

    const seatDB = await SeatModel.findOne({rowNumber:seat.rowNumber, seatNumber: seat.seatNumber})
    if(!seatDB) throw new Error("seat DB not found")
    
    const movieSeat = await MovieSeatModel.findOne({movie, seat: seatDB})
    if(!movieSeat) throw new Error("movie seat DB not found")

    if(movieSeat.seatStatus === "free"){
      movieSeat.seatStatus = "picked"
    }else if(movieSeat.seatStatus === "picked"){
      movieSeat.seatStatus = "free"
    }

    movieSeat.save()

    res.send({ movieSeat })
  } catch (error: any) {
    console.error(error)
    res.status(500).send({ error: error.message })
  }
}

export const getPickedSeats = async (req:any, res:any) => {
  try {
    const movieSeats = await MovieSeatModel.find({seatStatus: "picked"})
    if(!movieSeats) throw new Error("movie seats not found")

    movieSeats.map((movieSeat)=>
      {
      movieSeat.seatStatus = "taken"
      movieSeat.save()
    }
      )
    
    res.send({ movieSeats })
  } catch (error: any) {
    console.error(error)
    res.status(500).send({ error: error.message })
  }
}

export const getMovieSeats = async (req:any, res:any) => {
  try {
    const {movie} = req.body
    
    if(!movie) throw new Error("movie not found")

    const movieSeats = await MovieSeatModel.find({movie})
    if(!movieSeats) throw new Error("movie seats not found")

    res.send({ movieSeats })
  } catch (error: any) {
    console.error(error)
    res.status(500).send({ error: error.message })
  }
}
