var teamNameInput = document.querySelector("#teamName");
var badgeImgInput = document.querySelector("#badgeImg");
var leagueInput = document.querySelector("#league");
var teamDisciptionInput = document.querySelector("#discription");
var adminLoginForm = document.querySelector("#adminLoginForm");
var adminLoginBtn = document.querySelector(".adminLoginBtn");
var adminLogoutBtn = document.querySelector(".logoutBtn");
var adminName = document.querySelector("#adminName");
var newTeamForm = document.querySelector("#addTeamForm");
var addTeamBtn = document.querySelector(".addTeamBtn");
var welcomeMsg = document.querySelector(".welcomeMsg") || null;
var divContainer = document.querySelector("#divContainer");
var username = localStorage.getItem("username");
if (username) {
    adminLoginBtn.classList.add("hide");
    welcomeMsg.innerText = "Hello " + username + " , Welcome to FOOTOP";
    addTeamBtn.classList.remove("hide");
    adminLogoutBtn.classList.remove("hide");
    addTeamBtn.addEventListener("click", function () {
        newTeamForm.classList.toggle("hide");
    });
}
adminLoginBtn.addEventListener("click", function () {
    adminLoginForm.classList.toggle("hide");
});
adminLogoutBtn.addEventListener("click", function () {
    confirm("Are you sure you want to logout ?");
    localStorage.removeItem("username");
    location.reload();
});
var User = /** @class */ (function () {
    function User(name, favTeam) {
        this.name = name;
        this.favTeam = favTeam;
    }
    return User;
}());
var FootballTeam = /** @class */ (function () {
    function FootballTeam(name, image, league, discription) {
        this.name = name;
        this.image = image;
        this.league = league;
        this.discription = discription;
    }
    return FootballTeam;
}());
//dont use let, use const
var footballTeams = [];
var storedFootballTeams = localStorage.getItem("footballTeams");
if (storedFootballTeams) {
    footballTeams = JSON.parse(storedFootballTeams);
}
else {
    footballTeams = [
        new FootballTeam("Manchester United", "./photos/man united.png", "Premier League", "Manchester United is a professional football club based in Manchester, England. The club has a long history of success and is one of the most successful clubs in English and European football. Manchester United has a large and passionate fan base and is one of the most well-supported clubs in the world. The team has had many legendary players over the years, including Ryan Giggs, Paul Scholes, David Beckham, Sir Bobby Charlton, and Cristiano Ronaldo. Manchester United plays its home matches at Old Trafford, which has a capacity of over 74,000 spectators.."),
        new FootballTeam("Real Madrid", "./photos/real madrid.png", "La Liga", "Real Madrid is a professional football club located in Madrid, Spain. It has a rich history of success, having won numerous titles including 13 Champions League titles. The club has a huge and dedicated fan base and a strong rivalry with Barcelona. Real Madrid has had many great players, such as Cristiano Ronaldo, Alfredo Di Stefano, Sergio Ramos, and Iker Casillas. The team plays its home games at the Santiago Bernabéu Stadium."),
        new FootballTeam("Barcelona", "./photos/barcelona.png", "La Liga", "Barcelona is a professional football club based in Barcelona, Spain. The club has a long history of success and is one of the most successful clubs in Spanish and European football. Barcelona has a large and passionate fan base, known as and has a fierce rivalry with Real Madrid. The team has had many legendary players over the years, including Lionel Messi, Xavi, Andrés Iniesta, Ronaldinho, and Johan Cruyff. Barcelona plays its home matches at the Camp Nou Stadium, which has a capacity of over 99,000 spectators."),
        new FootballTeam("Bayern Munich", "./photos/bayern.png", "Bundesliga", "Bayern Munich is a professional football club based in Munich, Germany. The club has a long history of success and is one of the most successful clubs in German and European football. Bayern Munich has a large and passionate fan base and is one of the most well-supported clubs in Germany. The team has had many great players over the years, including Franz Beckenbauer, Gerd Muller, Philipp Lahm, Thomas Muller, and Robert Lewandowski. Bayern Munich plays its home matches at the Allianz Arena, which has a capacity of over 70,000 spectators."),
        new FootballTeam("Manchester City", "./photos/Manchester_City.png", "Premier League", "Manchester City is a professional football club based in Manchester, England. The club has a history of success and is one of the top clubs in English football. Manchester City has a large and passionate fan base and is one of the most well-supported clubs in England. The team has had many great players over the years, including Sergio Aguero, Kevin De Bruyne, Vincent Kompany, David Silva, and Yaya Toure. Manchester City plays its home matches at the Etihad Stadium, which has a capacity of over 55,000 spectators."),
    ];
}
//should enter in to a function, and rune when needed.
footballTeams.forEach(function (team) {
    var teamElement = document.createElement("div");
    teamElement.classList.add("teams");
    teamElement.innerHTML = "\n      <h2>" + team.name + "</h2>\n      <img src=\"" + team.image + "\"/>\n      <h3>" + team.league + "</h3>";
    divContainer.appendChild(teamElement);
    teamElement.addEventListener("click", function () {
        teamElement.classList.remove("teams");
        teamElement.innerHTML = "\n        <div>\n        <img src=\"" + team.image + "\"/>  \n        <h2>" + team.name + "</h2>\n        <h3>" + team.league + "</h3>\n        </div>\n        <p>" + team.discription + "</p>\n        ";
        teamElement.classList.add("favTeam");
    });
});
newTeamForm.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        newTeamForm.classList.add("hide");
        var teamNameValue = teamNameInput.value;
        var badgeImgValue = badgeImgInput.value;
        var leagueValue = leagueInput.value;
        var teamDisciption = teamDisciptionInput.value;
        footballTeams.push(new FootballTeam(teamNameValue, badgeImgValue, leagueValue, teamDisciption));
        localStorage.setItem("footballTeams", JSON.stringify(footballTeams));
        divContainer.innerHTML = '';
        footballTeams.forEach(function (team) {
            var teamElement = document.createElement("div");
            teamElement.classList.add("teams");
            teamElement.innerHTML =
                "<h2>" + team.name + "</h2>\n            <img src=\"" + team.image + "\"/>\n            <h3>" + team.league + "</h3>";
            divContainer.appendChild(teamElement);
        });
    }
    catch (error) {
        console.error(error);
    }
});
adminLoginForm.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        var username_1 = adminName.value;
        localStorage.setItem("username", username_1);
        welcomeMsg.innerText = "Hey " + username_1 + " , Welcome to FOOTOP";
        adminLoginBtn.classList.add("hide");
        adminLoginForm.classList.add("hide");
    }
    catch (error) {
        console.error(error);
    }
});
