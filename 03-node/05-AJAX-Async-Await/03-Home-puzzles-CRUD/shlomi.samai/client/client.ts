import { join } from "path";


//data
interface soccerPlayer {
    name:string;
    src:string;
}

function hendlegetplayers(){
try {

    fetch("/api/get-players")
    .then((res)=>res.json())
    .then(({players})=>{
        try {
           
             renderPlayers(players) 
            if(!players) throw new Error("couldnt get players")
        } catch (error) {
            console.error(Error)
        }
    })
} catch (error) {
    
}
}

function renderPlayers(players:soccerPlayer[]){
    try {
      if (!players) throw new Error("could'nt find players array")  
      const html=players.map(player=>{
        return `<div class="playerCard"></div>
        <img src="${player.src}" alt="">
        <p>${player.name}`;
      }).join("");
   
      const userElement=document.querySelector(".playersConteiner")
      if (!userElement) throw new Error("coundnt find users element on DOM")
        userElement.innerHTML=html;
    } catch (error) {
        console.error(Error) 
    }
}

function hendleAddPlayer(ev){
    try {
        ev.preventDefault();
        const name = ev.target.elements.name.value;
        const url = ev.target.elements.url.value;
        if (!name) throw new Error("No name");
        if (!url) throw new Error("No src");
        const newPlayer= {name, url}

        //send to server
        fetch("/api/add-players",{
            method:"POST",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPlayer), })
        .then


    } catch (error) {
        console.error(Error) 
    }
}