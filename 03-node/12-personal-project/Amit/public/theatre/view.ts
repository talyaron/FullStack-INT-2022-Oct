function renderSeats(movieSeats) {
  try {
    console.log(movieSeats)
    movieSeats.map((movieSeat) => {
      const seatRoot: HTMLDivElement | null = document.querySelector(`#root0${movieSeat.seat.rowNumber}-0${movieSeat.seat.seatNumber}`)
      if (!seatRoot) throw new Error("seatRoot not found")
      if (movieSeat.seatStatus === "free") {
        seatRoot.style.backgroundColor = "seagreen"
      } else if (movieSeat.seatStatus === "picked") {
        seatRoot.style.backgroundColor = "yellow"
      } else if (movieSeat.seatStatus === "taken") {
        seatRoot.style.backgroundColor = "grey"
      }
    })

  } catch (error) {
    console.error(error)
  }
}

function renderMovieName(movieName) {
  try {
    const movieNameRoot: HTMLDivElement | null = document.querySelector("#movieNameRoot")
    if (!movieNameRoot) throw new Error("movieNameRoot not found")

    movieNameRoot.innerText = `${movieName}`
  } catch (error) {
    console.error(error)
  }
}

function renderPickedSeat(movieSeat) {
  try {

    const seatRoot: HTMLDivElement | null = document.querySelector(`#root0${movieSeat.seat.rowNumber}-0${movieSeat.seat.seatNumber}`)
    if (!seatRoot) throw new Error("seatRoot not found")

    if (movieSeat.seatStatus === "picked") {
      seatRoot.style.backgroundColor = "yellow"
    } else {
      seatRoot.style.backgroundColor = "seagreen"
    }

  } catch (error) {
    console.error(error)
  }
}

function renderTakenSeats(movieSeats) {
  try {
    movieSeats.map((movieSeat) => {
      const seatRoot: HTMLDivElement | null = document.querySelector(`#root0${movieSeat.seat.rowNumber}-0${movieSeat.seat.seatNumber}`)
      if (!seatRoot) throw new Error("seatRoot not found")
      seatRoot.style.backgroundColor = "grey"
    })

  } catch (error) {
    console.error(error)
  }
}