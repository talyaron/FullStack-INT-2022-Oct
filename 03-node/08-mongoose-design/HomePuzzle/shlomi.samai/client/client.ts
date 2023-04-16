import { join } from "path";
// import { v4 as uuidv4 } from 'uuid';


//data
// class soccerPlayer {
//     public uid:string=uuidv4()
//     constructor(
//   public name: string,
//   public src: string){}
//   getSimplePlayer(){
//     return {uid:this.uid,name:this.name,src:this.src}
//   }
// }

interface soccerPlayer {
    name: string;
    src: string;
    uid?: string;
    _id?:string;
  }

function hendlegetplayers(){
try {
    fetch("/api/players/get-players")
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
        return `<div class="playerCard">
        <img src="${player.src}" alt="">
        <p contenteditable oninput="handlePlayerNameUpdate(event, '${player._id}')">${player.name}
        <button onclick='handleDeletePlayer("${player._id}")'>DELETE</button>
        </div>`;
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
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });

    } catch (error) {
        console.error(Error) 
    }
}

function handleDeletePlayer(_id:string){
    try {
        console.log(_id);
    
        fetch("/api/delete-player", {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id }),
        })
          .then((res) => res.json())
          .then(({ players }) => {
          
          
            renderPlayers(players);
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }  
}

function handlePlayerNameUpdate(ev: any, _id: string){
  try {
    console.log(_id);
    const name = ev.target.textContent;
    fetch("/api/update-player-name", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, _id }),
    });
  } catch (error) {
    console.error(error);
  }
}