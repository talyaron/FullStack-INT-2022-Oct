var Movies = [
    {
        Title: "Virgins",
        price: 30,
        RentedBy: 1
    },
    {
        Title: "BreakPoint",
        price: 35,
        RentedBy: 2
    }
];
var Users = [
    {
        id: 1,
        FirstName: "Yuval",
        LastName: "Partush"
    },
    {
        id: 2,
        FirstName: "Cristiano",
        LastName: "Ronaldo"
    },
];
function usdToNis(Movies) {
    return (Movies.price * 3.53).toFixed(2);
}
;
// const result = usdToNis(Movies[1]);
// console.log(result);
function movieTaken(Movies, id) {
    if (Movies.RentedBy === id) {
        for (var i = 0; i < Users.length; i++) {
            var user = null;
            if (Users[i].id === id) {
                user = Users[i];
                console.log(id + " has the movie " + Movies.Title);
            }
        }
    }
    else {
        console.log(" " + id + " does not have the movie " + Movies.Title);
    }
}
movieTaken(Movies[0], 2);
