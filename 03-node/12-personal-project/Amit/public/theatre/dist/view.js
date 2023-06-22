function renderSeats(movieSeats) {
    try {
        movieSeats.map(function (movieSeat) {
            var seatRoot = document.querySelector("#root0" + movieSeat.seat.rowNumber + "-0" + movieSeat.seat.seatNumber);
            if (!seatRoot)
                throw new Error("seatRoot not found");
            if (movieSeat.seatStatus === "free") {
                seatRoot.style.backgroundColor = "seagreen";
            }
            else if (movieSeat.seatStatus === "picked") {
                seatRoot.style.backgroundColor = "yellow";
            }
            else if (movieSeat.seatStatus === "taken") {
                seatRoot.style.backgroundColor = "grey";
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderMovieName(movieName) {
    try {
        var movieNameRoot = document.querySelector("#movieNameRoot");
        if (!movieNameRoot)
            throw new Error("movieNameRoot not found");
        movieNameRoot.innerText = "" + movieName;
    }
    catch (error) {
        console.error(error);
    }
}
function renderPickedSeat(movieSeat) {
    try {
        var seatRoot = document.querySelector("#root0" + movieSeat.seat.rowNumber + "-0" + movieSeat.seat.seatNumber);
        if (!seatRoot)
            throw new Error("seatRoot not found");
        if (movieSeat.seatStatus === "picked") {
            seatRoot.style.backgroundColor = "yellow";
        }
        else {
            seatRoot.style.backgroundColor = "seagreen";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderTakenSeats(movieSeats) {
    try {
        movieSeats.map(function (movieSeat) {
            var seatRoot = document.querySelector("#root0" + movieSeat.seat.rowNumber + "-0" + movieSeat.seat.seatNumber);
            if (!seatRoot)
                throw new Error("seatRoot not found");
            seatRoot.style.backgroundColor = "grey";
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderOrder(data) {
    try {
        var newOrderRoot = document.querySelector("#newOrderRoot");
        if (!newOrderRoot)
            throw new Error("newOrderRoot not found on DOM");
        newOrderRoot.style.display = "flex";
        var html = data.orderDB.seatsInMovie.map(function (_seat) {
            return "<div>\n        <span><u>row number</u>: " + _seat.seat.rowNumber + " </span>\n        <span><u>seat number</u>: " + _seat.seat.seatNumber + "</span>\n      </div>";
        }).join(" ");
        newOrderRoot.innerHTML = html;
        console.log("html", html);
    }
    catch (error) {
        console.error(error);
    }
}
