

import { User } from '../API/users/userModel';
// import { updateScore } from './../API/scores/scoreControl';
// import { Scores } from '../API/scores/scoreModel';
// import { User } from '../API/users/userModel';
// tinymce.init({
//   selector: '#myTextarea'
// });

// import { url } from "inspector";

interface UserScoreToGame {
  name: string;
  id: string;
  score: number;
} 
 
let userScoreplayer: UserScoreToGame = {
  name: '',
  id: '',
  score: -1
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const value = urlParams.get('value');
console.log(value)
if(value) updatePlayerScore(value)

interface User {
  name: string;
  password: string;
}

 interface Scores {
  userName: string,
  score: number,
  winner: boolean,
  competitionPlace: number,
};


function getTenHighScore() {
  try {
    console.log("getTenHighScore");
    fetch("/get-score")
      .then((res) => res.json())
      .then(({ scores }) => {
        try {
          if (!scores) throw new Error("didnt find scores");
          console.log(scores);
          console.log("scores");
          renderScores(scores);
        } catch (error) {
          console.error(error);
        }
      });

  } catch (error) {
    console.error(error);
  }
}

function renderScores(scores: Array<Scores>) {
  try {
    if (!scores) throw new Error("No users");

    let html = ""
    scores.map((score) => {
        return renderScore(score);
      })
      .join(" ");
    html = `<div class="container"><h1>Ten user with high score</h1><div class="container__form">${html}</div></div>`  
    const scoresElement = document.querySelector(".centered");
    if (!scoresElement) throw new Error("coundnt find users element on DOM");

    scoresElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderScore(score: Scores) {
  try {
    console.log(score);

    return `
    <p>${score.userName} - ${score.score}</p>`

  } catch (error) {
    console.error(error);
    return null;
  }
}

function handleUserNameUpdate(ev: any, uid: string) {
  try {
    console.log(uid);
    const name = ev.target.textContent;
    fetch("/api/users/update-user-name", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, uid }),
    });
  } catch (error) {
    console.error(error);
  }
}

function hendelAddUser(ev: any) {
  try {
    ev.preventDefault();
    console.log(ev.target.elements)
    const name = ev.target.elements.name.value;
    const password = ev.target.elements.password.value;
    if (!name) throw new Error("No name");
    if (!password) throw new Error("No Password");
    const newUser: any = { name, password };
    console.log(newUser)
    console.log("newUser")
    
    //send to server:
    fetch("/add-user", {
      method: "POST",
      headers: {
          Accept: "application/json",
                  "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function handleLogin(ev: any) {
  try {
    ev.preventDefault();
    console.log(ev.target.elements)
    const name = ev.target.elements.name.value;
    const password = ev.target.elements.password.value;
    if (!name) throw new Error("No name");
    if (!password) throw new Error("No Password");
    
    const newUser: any = { name, password };

      
      fetch("/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        

          if(data.error){
             alert(data.error)
            }else{
               // getTenHighScore()
               userScoreplayer={
                name: data.user.name, 
                id: data.user._id,
                score: -1
               } 
               console.log(userScoreplayer)
               snakeGame(userScoreplayer)
               
              //  window.location.href = "login.html"
            }
        })
        .catch((error) => {
          console.error(error);
        });
  } catch (error) {
    console.error(error);
  }
}



function handleDeleteUser(_id: string) {
  try {
    console.log(_id);

    fetch("/api/users/delete-user", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id }),
    })
      .then((res) => res.json())
      .then(({ users }) => {
        renderUsers(users);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function handleUpdateUserType(ev: any, userId: string) {
  try {
    const userType = ev.target.value;
    console.log(userType)

    fetch("/api/users/update-user-type", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, userType }),
    })
    .then((res) => res.json())
      .then(({ users }) => {
        renderUsers(users);
      })
      .catch((error) => {
        console.error(error);
      });;
  } catch (error) {
    console.error(error);
  }
}

function renderUsers(users: User){
    console.log("renderUser")
}

function snakeGame(userScoreToGame: UserScoreToGame ){
  try {
      if(!userScoreToGame.name || !userScoreToGame.id) throw new Error ("no name or id from login")
        // const urlData = `playerNAme: ${name} id: ${id}`
        // const urlData = `${userScoreToGame.name},${userScoreToGame.id},${userScoreToGame.score}`
        const url = `snake.html?value=${userScoreToGame}`;
        console.log(`url ${url}`)
        window.location.href = url;

    } catch (error) {
        console.error(error)
    }
  }


function updatePlayerScore(value:string | void){
  try {
    console.log(value)
    console.log("updatePlayerSorce")
    //   const userType = ev.target.value;
  //   console.log(userType)

  //   fetch("/api/users/update-user-type", {
  //     method: "PATCH",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ userId, userType }),
  //   })
  //   .then((res) => res.json())
  //     .then(({ users }) => {
  //       renderUsers(users);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });;
  } catch (error) {
    console.error(error);
  }
 
}