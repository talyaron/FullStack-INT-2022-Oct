interface player{
    userName:string,
    position:String,
};
interface Game{
  Games: string[]
}
function handleAddPlayer(ev: any) {
    try {
      ev.preventDefault();
      console.log(ev.target.elements)
      const userName = ev.target.elements.userName.value;
      const position = ev.target.elements.position.value;
      const positionType= ev.target.elements.positionType.value;
      if (!userName) throw new Error("No name");
      if (!position) throw new Error("No position");
      if (!positionType) throw new Error("No positionType");


      const newPlayer: any = { userName, position ,positionType };
  
      fetch("/api/player/add-player", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
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
  function handelAddGame(ev:any){
    try {
      ev.preventDefault();
      console.log(ev.target.elements)
      const Games = ev.target.elements.Games.value;
      const day= ev.target.elements.day.value
      if (!Games) throw new Error("no Gamess");
      if (!day) throw new Error("no day");

      const newGames:any = {Games,day};
      fetch("/api/game/add-game", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newGames),
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


  function handleUpdatePlayerType(ev: any, playerId: string) {
    try {
      const PositionType = ev.target.value;
      console.log(PositionType);
  
      fetch('/api/player/update-player-type', {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerId, PositionType }),
      })
        .then((res) => res.json())
        .then(({ playerDB }) => {
          console.log(playerDB);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    }
  }

