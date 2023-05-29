 interface User {
  _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  highScore: number;
  gamesPlayed:number;
  src?:string
}

function renderScoreUser(user: User){
    try {

      const html = `
      <li class="person">
        <p class="icon"><img class="playericons" src=${user.src}></p>
        <p class="nickname">${user.userName}</p>
        <p class="score">${user.highScore?user.highScore:0}</p>
        <ul class="point-btns"></ul>
      </li>
    `;
      const ScoreRoot = document.querySelector("#scoreRoot");
      if (!ScoreRoot) throw new Error("ScoreRoot not found");
      ScoreRoot.innerHTML += html;
    } catch (error) {
      console.error(error);
    }
  }

 async function orderByTopScore(){
    try {
      const dataJs = await fetch('/api/users/get-users-score');
      if(!dataJs) throw new Error("no founded data")
      const {users} = await dataJs.json();
      users.forEach(renderScoreUser);

    } catch (error) {
      console.error(error);

    }
  }

 