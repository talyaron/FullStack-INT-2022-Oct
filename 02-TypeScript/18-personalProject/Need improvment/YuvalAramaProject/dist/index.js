var teamNameInput = document.querySelector("#teamName");
var badgeImgInput = document.querySelector("#badgeImg");
var leagueInput = document.querySelector("#league");
var adminLoginForm = document.querySelector("#adminLoginForm");
var adminLoginBtn = document.querySelector(".adminLoginBtn");
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
    addTeamBtn.addEventListener("click", function () {
        newTeamForm.classList.remove("hide");
    });
}
adminLoginBtn.addEventListener("click", function () {
    adminLoginForm.classList.remove("hide");
});
var FootballTeam = /** @class */ (function () {
    function FootballTeam(name, image, league) {
        this.name = name;
        this.image = image;
        this.league = league;
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
        new FootballTeam("Manchester United", "./photos/man united.png", "Premier League"),
        new FootballTeam("Real Madrid", "./photos/real madrid.png", "La Liga"),
        new FootballTeam("Barcelona", "./photos/barcelona.png", "La Liga"),
        new FootballTeam("Bayern Munich", "./photos/bayern.png", "Bundesliga"),
        new FootballTeam("Manchester City", "./photos/Manchester_City.png", "Premier League"),
    ];
}
//should enter in to a function, and rune when needed.
footballTeams.forEach(function (team) {
    var teamElement = document.createElement("div");
    teamElement.classList.add("teams");
    teamElement.innerHTML = "\n      <h2>" + team.name + "</h2>\n      <img src=\"" + team.image + "\"/>\n      <h3>" + team.league + "</h3>";
    divContainer.appendChild(teamElement);
});
newTeamForm.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        newTeamForm.classList.add("hide");
        var teamNameValue = teamNameInput.value;
        var badgeImgValue = badgeImgInput.value;
        var leagueValue = leagueInput.value;
        footballTeams.push(new FootballTeam(teamNameValue, badgeImgValue, leagueValue));
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
