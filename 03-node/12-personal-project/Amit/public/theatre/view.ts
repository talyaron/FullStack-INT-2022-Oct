function renderSeats(movieSeats) {
  try {
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

function renderOrder(data: any) {
  try {
    const newOrderRoot:HTMLDivElement | null = document.querySelector("#newOrderRoot")
    if (!newOrderRoot) throw new Error("newOrderRoot not found on DOM")

    newOrderRoot.style.display = "flex"

    const html = data.orderDB.seatsInMovie.map((_seat) =>  {
      return `<div>
        <span><u>row number</u>: ${_seat.seat.rowNumber} </span>
        <span><u>seat number</u>: ${_seat.seat.seatNumber}</span>
      </div>`
    }).join(" ")

    newOrderRoot.innerHTML = html;
    console.log("html", html)


  } catch (error) {
    console.error(error)
  }
}