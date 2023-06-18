

// import { Users } from '../API/users/userModel';
// import { Scores } from '../API/scores/scoreModel';
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


interface User {
  name: string;
  password: string;
}

 interface Scores {
  userName: string,
  score: number,
  competitionPlace: number,
};



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
        console.log(data)
        if(!data.error){
            // getTenHighScore()
            userScoreplayer={
             name: data.user.name, 
             id: data.user._id,
             score: -1
            } 
            console.log(userScoreplayer)
            AddScore(userScoreplayer.name, userScoreplayer.id )
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
        // renderUsers(users);
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
}

function snakeGame(userScoreToGame: UserScoreToGame ){
  try {
      if(!userScoreToGame.name || !userScoreToGame.id) throw new Error ("no name or id from login")
        const url = `snake.html?value=${userScoreToGame.name}, ${userScoreToGame.id}, -1`;
        console.log(`url ${url}`)
        window.location.href = url;

    } catch (error) {
        console.error(error)
    }
  }

  function AddScore(playerName:string, userId:string ) {
    try {
      if (!playerName || !userId) throw new Error("No user detail");
      const score = 0
      const competitionPlace = 0
      const newScore: any = { userId, playerName, score, competitionPlace };
      console.log(newScore)
      console.log("newScore")
      
      //send to server:
      fetch("/add-score", {
        method: "POST",
        headers: {
            Accept: "application/json",
                    "Content-Type": "application/json",
        },
        body: JSON.stringify(newScore),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          // if(!data.error){
          //     // getTenHighScore()
          //     userScoreplayer={
          //      name: data.user.name, 
          //      id: data.user._id,
          //      score: -1
          //     } 
          //     console.log(userScoreplayer)
          //     snakeGame(userScoreplayer)
              
          //     window.location.href = "login.html"
          //  }
  
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }
  