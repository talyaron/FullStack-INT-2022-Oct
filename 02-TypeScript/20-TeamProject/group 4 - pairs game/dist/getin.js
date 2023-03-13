var sendBtn = document.getElementById("send");
var form = document.getElementById("form");
var imgDiv = document.querySelector("#container");
var img = document.querySelector("#photo");
var file = document.querySelector("#file");
var uplodeBtn = document.querySelector("#uplodebtn");
function ageCalculator() {
    try {
        var userinput = document.getElementById("dob").value;
        var dob = new Date(userinput);
        if (userinput == null || userinput == "") {
            document.getElementById("message").innerHTML = "**Choose a date please!";
            return;
        }
        else {
            var month_diff = Date.now() - dob.getTime();
            var age_dt = new Date(month_diff);
            var year = age_dt.getUTCFullYear();
            var age = Math.abs(year - 1970);
            console.log("Age is: " + age + " years.");
        }
    }
    catch (error) {
        console.error(error);
    }
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault;
});
if (!sendBtn)
    throw new Error("sendBtn is null");
sendBtn.addEventListener("click", function (e) {
    try {
        var nameElement = document.getElementById("name");
        var DateOfBirthElement = document.getElementById("dob");
        if (!nameElement)
            throw new Error("could'nt find the name element");
        var name = nameElement.value.toString();
        if (!DateOfBirthElement)
            throw new Error("couldnt find date of birth element");
        var dateOfBirth = new Date(DateOfBirthElement.value);
        if (!dateOfBirth)
            throw new Error("couldnt find the date");
        var fileArrey = localStorage.getItem("file");
        if (!fileArrey)
            throw new Error("couldnt find the date");
        var file_1 = fileArrey;
        var tempScore = 0;
        var PlayersFromStorage = getPlayersFromStorage();
        debugger;
        PlayersFromStorage.push(new Player(name, dateOfBirth, file_1, tempScore));
        console.log(PlayersFromStorage);
        localStorage.setItem("players", JSON.stringify(PlayersFromStorage));
    }
    catch (error) {
        console.error(error);
    }
});
file === null || file === void 0 ? void 0 : file.addEventListener("click", chooseFile);
function chooseFile(ev) {
    try {
        var image = ev.target.file[0];
        var reader = new FileReader();
        reader.readAsDataURL(image);
        reader.addEventListener("load", function () {
        });
    }
    catch (error) {
        console.error(error);
    }
}
file === null || file === void 0 ? void 0 : file.addEventListener("change", uplodeFile);
function uplodeFile() {
    var _a;
    try {
        var choosedFile = (_a = this.files) === null || _a === void 0 ? void 0 : _a[0];
        if (choosedFile) {
            var reader_1 = new FileReader();
            reader_1.addEventListener("load", function () {
                img === null || img === void 0 ? void 0 : img.setAttribute("src", reader_1.result);
                localStorage.setItem("file", reader_1.result);
            });
            reader_1.readAsDataURL(choosedFile);
        }
    }
    catch (error) {
        console.error(error);
    }
}
function addStar() {
    try {
        var s = document.createElement("div");
        s.className = "star";
        s.style.setProperty("--size", Math.random() * 10 + 3 + "vmin");
        s.style.left = Math.floor(Math.random() * 100) + "%";
        s.style.top = Math.floor(Math.random() * 100) + "%";
        s.onanimationend = function () {
            this.remove();
        };
        document.body.appendChild(s);
    }
    catch (error) {
        console.error(error);
    }
}
setInterval(addStar, 200);
function renderusers(players) {
    try {
        var page = "";
        for (var j = 0; j <= players.length - 1; j++) {
            page += " <div class=\"recurring_user\" >\n    <a href=\"./inex.html\" onclick=\"beginGame('" + players[j].uid + "')\" > \n    <img class=\"userImg\" src='" + players[j].file + "'/></a>\n    <button class=\"deletUserButton\" onclick=\"handleDeleteUser('" + players[j].uid + "')\"><i class=\"fa fa-trash-o\"></i></button>  \n    </div> ";
        }
        var html = document.querySelector("#listofUsers");
        if (html !== null)
            html.innerHTML = page;
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteUser(uid) {
    try {
        var playersArray = getPlayersFromStorage();
        var index = playersArray.findIndex(function (Player) { return Player.uid === uid; });
        if (index === -1)
            throw new Error("player not found");
        playersArray.splice(index, 1);
        localStorage.setItem("players", JSON.stringify(playersArray));
        renderusers(playersArray);
    }
    catch (error) {
        console.error(error);
    }
}
