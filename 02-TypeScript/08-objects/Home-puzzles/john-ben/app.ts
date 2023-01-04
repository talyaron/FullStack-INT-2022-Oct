interface Movies {
    name: string;
    price: number;
    rented_by: String; 
    }   

    interface user {
        name:string;
        nickname:string;
        age:number;
        phone:number;
    }

const avatar:Movies  = {
    name: 'avatar',
    price: 10,
    rented_by: 'john'
};

const Novembre:Movies  = {
    name: 'Novembre',
    price: 20,
    rented_by: 'salome'
};

function Shekels (video:Movies){
    try {
        let new_price:number = video.price * 3.53
        return new_price;
    }
    catch(error){
    console.error("error")
    }
    }



const movie:string| null= prompt("which movie do you want to rent?")
if (movie==" " || !movie){
    alert ("please enter a movie")
}
     else if(movie == "avatar"){
     alert(`john take the movie`)
    }
    else if(movie == "Novembre"){
       alert(`the price for novembre is ${Shekels(Novembre)} shekels`)
    }
else {
    alert("enter a moovie that we have")
}
