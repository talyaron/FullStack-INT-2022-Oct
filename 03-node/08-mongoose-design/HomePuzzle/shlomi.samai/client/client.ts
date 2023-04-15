///////////////////////Players////////////////////

import { join } from "path";

interface soccerPlayer {
    name: string;
    url: string;
    src:string;
    uid?: string;
    _id?:string;
  }

function hendlegetplayers(){
try {
    fetch("/API/Players/get-players")
    .then((res)=>res.json())
    .then(({players})=>{
        try {
             renderPlayers(players) 
             console.log(players)
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
        <img src="${player.src}" alt="NA">
        <p contenteditable oninput="handlePlayerNameUpdate(event, '${player._id}')">${player.name}</p>
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
        fetch("/API/Players/add-players",{
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
    
        fetch("/api/Players/delete-player", {
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
    fetch("/api/Players/update-player-name", {
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

///////////////////////Teams////////////////////

interface team {
  pastTeamsName:string;
  src:string;
  uid?: string;
  _id?:string;
}

function hendleGetTeams(){
  try {
      fetch("/API/Teams/get-teams")
      .then((res)=>res.json())
      .then(({teams})=>{
          try {
               renderTeams(teams) 
               console.log(teams)
              if(!teams) throw new Error("couldnt get players")
          } catch (error) {
              console.error(Error)
          }
      })
  } catch (error) {
      
  }
  }

  function renderTeams(teams:team[]){
    try {
      if (!teams) throw new Error("could'nt find teams array")  
      const html=teams.map(team=>{
        return `<div class="playerCard">
        <img src="${team.src}" alt="NA">
        <p contenteditable oninput="handleTeamNameUpdate(event, '${team._id}')">${team.pastTeamsName}</p>
        <button onclick='handleDeleteTeam("${team._id}")'>DELETE</button>
        </div>`;
      }).join("");
   
      const userElement=document.querySelector(".teamsConteiner")
      if (!userElement) throw new Error("coundnt find teams element on DOM")
        userElement.innerHTML=html;
    } catch (error) {
        console.error(Error) 
    }
}

function hendleAddTeam(ev){
  try {
      ev.preventDefault();
      const name = ev.target.elements.name.value;
      const src = ev.target.elements.src.value;
      
      if (!name) throw new Error("No name");
      if (!src) throw new Error("No src");
      const newTeam= {name, src}

      //send to server
      fetch("/API/Teams/add-team",{
          method:"POST",
          headers:{
              Accept: "application/json",
              "Content-Type": "application/json",
          },
          body: JSON.stringify(newTeam), })
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

function handleDeleteTeam(_id:string){
  try {
      fetch("/api/Teams/delete-team", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id }),
      })
        .then((res) => res.json())
        .then(({ teams}) => {
          renderTeams(teams);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }  
}

function handleTeamNameUpdate(ev: any, _id: string){
  try {
    console.log(_id);
    const name = ev.target.textContent;
    fetch("/api/Teams/update-team-name", {
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

////////////////////queries/////////////

function hendleGetTeamsOfPlayer(ev){
  try {
    ev.preventDefault();
    const teamName = ev.target.elements.teamName.value;
    if (!teamName) throw new Error("No name");
    const newTeam= {teamName}

      //send to server
      fetch(`/API/Teams/hendle-Get-Teams-Of-Player?team=${teamName}`,{
          method:"POST",
          headers:{
              Accept: "application/json",
              "Content-Type": "application/json",
          },
          body: JSON.stringify(newTeam), })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });

  } catch (error) {
    console.error(error)
  }
}

// function hendleAddTeam(ev){
//   try {
//       ev.preventDefault();
//       const name = ev.target.elements.name.value;
//       const src = ev.target.elements.src.value;
      
//       if (!name) throw new Error("No name");
//       if (!src) throw new Error("No src");
//       const newTeam= {name, src}

//       //send to server
//       fetch("/API/Teams/add-team",{
//           method:"POST",
//           headers:{
//               Accept: "application/json",
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(newTeam), })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);
//           })
//           .catch((error) => {
//             console.error(error);
//           });

//   } catch (error) {
//       console.error(Error) 
//   }
// }