
function handleSeatsPicking(_rowNumber: string, _seatNumber: string) {
    try {
        const seat: any = {
            rowNumber: _rowNumber,
            seatNumber: _seatNumber,
        }

        fetch("/api/movies/get-one-movie")
            .then((res) => res.json())
            .then(({ movie }) => {
                fetch("/api/seats/pick-one-seat", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ seat, movie }),
                })
                    .then((res) => res.json())
                    .then(({ movieSeat }) => {
                        renderPickedSeat(movieSeat)
                    })
                    .catch((error) => {
                        console.error(error)
                    })
            })



    } catch (error) {
        console.error(error)
    }
}

function currentMovie() {
    try {
        fetch("/api/movies/get-one-movie")
            .then((res) => res.json())
            .then(({ movie }) => {
                renderMovieName(movie.name)
                getMovieSeats(movie)
            })
    } catch (error) {
        console.error(error)
        return undefined
    }
}

async function handleAddOrder() {
    try {
        //user//
        const userResponse = await fetch('/api/users/get-user')
        const userData = await userResponse.json()
        const { user } = userData
        if (!user) throw new Error("user not found")

        //seats//
        const seatsResponse = await fetch('/api/seats/get-picked-seats')
        const seatsData = await seatsResponse.json()
        const { movieSeats } = seatsData
        if (!movieSeats) throw new Error("seats not found")

        const order = { user, movieSeats }

        fetch("/api/orders/create-order", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                renderTakenSeats(movieSeats)
            })
            .catch((error) => {
                console.error(error)
            })
    } catch (error) {
        console.error(error)
    }
}

function getMovieSeats(movie){
    try {
        console.log("movie in getMovieSeats", movie )
        fetch("/api/seats/get-movie-seats", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({movie}),
        })
            .then((res) => res.json())
            .then(({movieSeats}) => {
                renderSeats(movieSeats)
            })
            .catch((error) => {
                console.error(error)
            })
         
    } catch (error) {
        console.error(error)  
    }
}