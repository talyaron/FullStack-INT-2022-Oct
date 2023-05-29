

interface Player{
    userName: string,
    position:string,
}



function handleGetPlayers() {
    console.log("test");
    try {
      fetch("/api/player/get-players")
        .then((res) => res.json())
        .then(({ Players }) => {
          try {
            if (!Players) throw new Error("didnt find Players");
            console.log(Players);
            renderPlayers(Players);
          } catch (error) {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }
  function renderPlayers(players: any[]) {
    try {
      if (!players) throw new Error("No players");
  
      const teams = {
        "Team 1": [],
        "Team 2": []
      };
      players.forEach((player: any, index: number) => {
        const team = index % 2 === 0 ? "Team 1" : "Team 2";
        teams[team].push(player);
      });
  
      renderTeam("team1-positions", "Team 1", teams["Team 1"]);
      renderTeam("team2-positions", "Team 2", teams["Team 2"]);
    } catch (error) {
      console.error(error);
    }
  }
  
  function renderTeam(containerId: string, teamName: string, players: any[]) {
    try {
      const container = document.querySelector(`#${containerId}`);
      if (!container) throw new Error(`Couldn't find container element with id ${containerId}`);
  
      const positions = {};
      players.forEach((player: { position: string | number; userName: any; }) => {
        if (!positions[player.position]) {
          positions[player.position] = [];
        }
        positions[player.position].push(player.userName); 
      });
  
      const positionsHtml = Object.keys(positions)
        .map((position) => {
          const playersHtml = positions[position]
            .map((playerName: any) => `<div class="player">${playerName}</div>`) 
            .join("");
          return `<div class="position">
                    <h3>${position}s</h3>
                    ${playersHtml}
                  </div>`;
        })
        .join("");
      container.innerHTML = `
        
        <div class="positions-container">${positionsHtml}</div>
      `;
    } catch (error) {
      console.error(error);
    }
  }
  
  
  