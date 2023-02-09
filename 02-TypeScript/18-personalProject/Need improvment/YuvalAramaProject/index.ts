const teamNameInput = document.querySelector("#teamName") as HTMLInputElement
const badgeImgInput = document.querySelector("#badgeImg") as HTMLInputElement
const leagueInput = document.querySelector("#league") as HTMLInputElement


const adminLoginForm = document.querySelector("#adminLoginForm") as HTMLFormElement
const adminLoginBtn = document.querySelector(".adminLoginBtn") as HTMLButtonElement
const adminName = document.querySelector("#adminName") as HTMLInputElement

const newTeamForm = document.querySelector("#addTeamForm") as HTMLFormElement
const addTeamBtn = document.querySelector(".addTeamBtn") as HTMLButtonElement
 
const welcomeMsg = document.querySelector(".welcomeMsg") as HTMLHeadingElement || null
const divContainer = document.querySelector("#divContainer") as HTMLDivElement
const username = localStorage.getItem("username");


if (username) {
    adminLoginBtn.classList.add("hide")
    welcomeMsg.innerText = `Hello ${username} , Welcome to FOOTOP`;

    addTeamBtn.classList.remove("hide")
    addTeamBtn.addEventListener("click" , ()=>{
        newTeamForm.classList.remove("hide")
    })
}



adminLoginBtn.addEventListener("click", ()=>{
    adminLoginForm.classList.remove("hide")
})



class FootballTeam {
  name: string;
  image: string;
  league: string;


  constructor(name: string, image: string, league: string) {
    this.name = name;
    this.image = image;
    this.league = league;
  }
}

//dont use let, use const
let footballTeams: FootballTeam[] = [];
const storedFootballTeams = localStorage.getItem("footballTeams");
if (storedFootballTeams) {
  footballTeams = JSON.parse(storedFootballTeams);
} else {
  footballTeams = [
    new FootballTeam("Manchester United", "./photos/man united.png", "Premier League"),
    new FootballTeam("Real Madrid", "./photos/real madrid.png", "La Liga"),
    new FootballTeam("Barcelona", "./photos/barcelona.png", "La Liga"),
    new FootballTeam("Bayern Munich", "./photos/bayern.png", "Bundesliga"),
    new FootballTeam("Manchester City", "./photos/Manchester_City.png", "Premier League"),
  ];
}

//should enter in to a function, and rune when needed.

footballTeams.forEach((team) => {
    const teamElement = document.createElement("div");
    teamElement.classList.add("teams");
    teamElement.innerHTML = `
      <h2>${team.name}</h2>
      <img src="${team.image}"/>
      <h3>${team.league}</h3>`;
    divContainer.appendChild(teamElement);
  });
  





newTeamForm.addEventListener("submit" , (event)=>{
    try {
        event.preventDefault()

        
        newTeamForm.classList.add("hide")
        
        const teamNameValue = teamNameInput.value
        const badgeImgValue = badgeImgInput.value
        const leagueValue = leagueInput.value


        footballTeams.push(new FootballTeam(teamNameValue,badgeImgValue,leagueValue))
        localStorage.setItem("footballTeams", JSON.stringify(footballTeams));

        divContainer.innerHTML = '';

        footballTeams.forEach((team)=>{
            const teamElement = document.createElement("div");
            teamElement.classList.add("teams")
            teamElement.innerHTML = 
            `<h2>${team.name}</h2>
            <img src="${team.image}"/>
            <h3>${team.league}</h3>` 
        
            divContainer.appendChild(teamElement);
            
        })



    } catch (error) {
        console.error(error)
    }
})


adminLoginForm.addEventListener("submit" , (event)=>{
    try {
        event.preventDefault()

        const username = adminName.value;
        localStorage.setItem("username", username);
        welcomeMsg.innerText = `Hey ${username} , Welcome to FOOTOP`

        adminLoginBtn.classList.add("hide")
        adminLoginForm.classList.add("hide")

        
    } catch (error) {
        console.error(error)
    }
})


