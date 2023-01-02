interface Movie {
    name:string
    price:number
    
}

const train_to_busan:Movie = {
    name:"train to busan",
    price:9.99
}

const fight_club:Movie ={
    name:"fight club",
    price:14.99
}
const I_Am_Legend:Movie={
    name:"i Am Legend",
    price:5.50
}

const renter=['john','amelia','luke','dan','lily','luna'];

function dollar_to_shekel (video:Movie){
    try {
        switch(dollar_to_shekel){
            case "train to busan": return video.price *3.53;
            case "fight club ":return video.price * 3.53;
            case "i am legend": return video.price *3.53;
            default: return "you choose an unavailable movie"
        }
    } catch (error) {
       console.error("error") 
    }
}
const randomName = Math.floor(Math.random() * renter.length);
// console.log(randomname, renter[random]);

const wellcome=alert("wellcome to blockbuster")
const userInput= prompt("currnt available movies are: train to busan,fight club,i am legend")
if (userInput==" "|| !userInput){
    const userInput = alert ("please enter a movie")
} else {
    const user = alert(`${dollar_to_shekel(userInput)}} cost ,also ${renter[randomName]} rented it`)
}
