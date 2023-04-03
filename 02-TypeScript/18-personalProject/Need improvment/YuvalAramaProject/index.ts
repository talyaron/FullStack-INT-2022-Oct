const teamNameInput = document.querySelector("#teamName") as HTMLInputElement
const badgeImgInput = document.querySelector("#badgeImg") as HTMLInputElement
const leagueInput = document.querySelector("#league") as HTMLInputElement
const teamDisciptionInput = document.querySelector("#discription") as HTMLInputElement


const adminLoginForm = document.querySelector("#adminLoginForm") as HTMLFormElement
const adminLoginBtn = document.querySelector(".adminLoginBtn") as HTMLImageElement
const adminLogoutBtn = document.querySelector(".logoutBtn") as HTMLImageElement
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
        adminLogoutBtn.classList.remove("hide")

        addTeamBtn.addEventListener("click" , ()=>{
        newTeamForm.classList.toggle("hide")
    })
}



adminLoginBtn.addEventListener("click", ()=>{
    adminLoginForm.classList.toggle("hide")
})


adminLogoutBtn.addEventListener("click", () => {
  confirm("Are you sure you want to logout ?")
  localStorage.removeItem("username");
  location.reload();
});



class User {
  name: string
  favTeam: string 

  constructor(name: string, favTeam: string) {
    this.name = name
    this.favTeam = favTeam
  }
}

class FootballTeam {
  name: string;
  image: string;
  league: string;
  discription: string



  constructor(name: string, image: string, league: string , discription: string) {
    this.name = name;
    this.image = image;
    this.league = league;
    this.discription = discription
  }
}




//dont use let, use const
let footballTeams: FootballTeam[] = []
const storedFootballTeams = localStorage.getItem("footballTeams");
if (storedFootballTeams) {
  footballTeams = JSON.parse(storedFootballTeams);
} else {
  footballTeams = [
    new FootballTeam("Manchester United", "./photos/man united.png", "Premier League" , "Manchester United is a professional football club based in Manchester, England. The club has a long history of success and is one of the most successful clubs in English and European football. Manchester United has a large and passionate fan base and is one of the most well-supported clubs in the world. The team has had many legendary players over the years, including Ryan Giggs, Paul Scholes, David Beckham, Sir Bobby Charlton, and Cristiano Ronaldo. Manchester United plays its home matches at Old Trafford, which has a capacity of over 74,000 spectators.." ),
    new FootballTeam("Real Madrid", "./photos/real madrid.png", "La Liga" , "Real Madrid is a professional football club located in Madrid, Spain. It has a rich history of success, having won numerous titles including 13 Champions League titles. The club has a huge and dedicated fan base and a strong rivalry with Barcelona. Real Madrid has had many great players, such as Cristiano Ronaldo, Alfredo Di Stefano, Sergio Ramos, and Iker Casillas. The team plays its home games at the Santiago Bernabéu Stadium."),
    new FootballTeam("Barcelona", "./photos/barcelona.png", "La Liga" , "Barcelona is a professional football club based in Barcelona, Spain. The club has a long history of success and is one of the most successful clubs in Spanish and European football. Barcelona has a large and passionate fan base, known as and has a fierce rivalry with Real Madrid. The team has had many legendary players over the years, including Lionel Messi, Xavi, Andrés Iniesta, Ronaldinho, and Johan Cruyff. Barcelona plays its home matches at the Camp Nou Stadium, which has a capacity of over 99,000 spectators."),
    new FootballTeam("Bayern Munich", "./photos/bayern.png", "Bundesliga" , "Bayern Munich is a professional football club based in Munich, Germany. The club has a long history of success and is one of the most successful clubs in German and European football. Bayern Munich has a large and passionate fan base and is one of the most well-supported clubs in Germany. The team has had many great players over the years, including Franz Beckenbauer, Gerd Muller, Philipp Lahm, Thomas Muller, and Robert Lewandowski. Bayern Munich plays its home matches at the Allianz Arena, which has a capacity of over 70,000 spectators."),
    new FootballTeam("Manchester City", "./photos/Manchester_City.png", "Premier League" , "Manchester City is a professional football club based in Manchester, England. The club has a history of success and is one of the top clubs in English football. Manchester City has a large and passionate fan base and is one of the most well-supported clubs in England. The team has had many great players over the years, including Sergio Aguero, Kevin De Bruyne, Vincent Kompany, David Silva, and Yaya Toure. Manchester City plays its home matches at the Etihad Stadium, which has a capacity of over 55,000 spectators."),
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
    teamElement.addEventListener("click" , ()=>{
        teamElement.classList.remove("teams")
        teamElement.innerHTML = `
        <div>
        <img src="${team.image}"/>  
        <h2>${team.name}</h2>
        <h3>${team.league}</h3>
        </div>
        <p>${team.discription}</p>
        `
        teamElement.classList.add("favTeam")

        
    })
  });
  



newTeamForm.addEventListener("submit" , (event)=>{
    try {
        event.preventDefault()

        
        newTeamForm.classList.add("hide")
        
        const teamNameValue = teamNameInput.value
        const badgeImgValue = badgeImgInput.value
        const leagueValue = leagueInput.value
        const teamDisciption = teamDisciptionInput.value

        footballTeams.push(new FootballTeam(teamNameValue,badgeImgValue,leagueValue,teamDisciption))
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

