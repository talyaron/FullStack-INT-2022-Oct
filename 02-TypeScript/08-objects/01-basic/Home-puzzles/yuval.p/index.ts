interface Movie {
    Title: string,
    price: number,
    RentedBy:number,
}
interface User{
    id:number,
    FirstName:string,
    LastName:string,
}
const Movies:Array<Movie> =[
    {
        Title: "Virgins",
        price: 30,
        RentedBy:1
    },
    {
        Title: "BreakPoint",
        price: 35,
        RentedBy: 2
    }
];
const Users:Array<User> = [
    {
        id: 1,
        FirstName:"Yuval",
        LastName:"Partush"
    },
    {
        id:2,
        FirstName:"Cristiano",
        LastName:"Ronaldo"
    },
];

function usdToNis(Movies: Movie){
    return (Movies.price * 3.53).toFixed(2);
};
// const result = usdToNis(Movies[1]);
// console.log(result);

function movieTaken(Movies:Movie, id:number){
    if(Movies.RentedBy === id){
        for(let i = 0; i < Users.length; i++){
            let user: User | null = null;
            if(Users[i].id === id){
                user = Users[i];
                console.log(`${id} has the movie ${Movies.Title}`);
            }

        }
    } 
    else
    {
        console.log(` ${id} does not have the movie ${Movies.Title}`)
    }
}
movieTaken(Movies[0], 2)

