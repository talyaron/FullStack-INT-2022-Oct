interface Movie {
    name:string
    price:number
    
}

const train_to_busan = {
    name: "train to busan",
    price: 9.99
};
const fight_club = {
    name: "fight club",
    price: 14.99
};
const I_Am_Legend = {
    name: "i Am Legend",
    price: 5.50
};

const renter = ['john', 'amelia', 'luke', 'dan', 'lily', 'luna'];
function dollar_to_shekel(userInput) {
    try {
        switch (userInput) {
            case "train to busan": return train_to_busan.price * 3.53;
            case "fight club": return fight_club.price * 3.53;
            case "i am legend": return I_Am_Legend.price * 3.53;
            
        }
    }
    catch (error) {
        console.error("error");
    }
}
const randomName = Math.floor(Math.random() * renter.length);
let wellcome = alert("wellcome to blockbuster");
let userInput = prompt("current available movies are: train to busan,fight club,i am legend");
if (userInput == " " || !userInput) {
    let userInput = alert("please enter a movie");
}

else {
    const dts = dollar_to_shekel(userInput);
    const user = alert(`${userInput} costs ${dts}, also ${renter[randomName]} rented it `)
}

