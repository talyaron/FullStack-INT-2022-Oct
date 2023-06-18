// import { Users } from '../API/users/userModel';
// import { Scores } from '../API/scores/scoreModel';
// import { updateScore } from './../API/scores/scoreControl';
// import { Scores } from '../API/scores/scoreModel';
// import { User } from '../API/users/userModel';
// tinymce.init({
//   selector: '#myTextarea'
// });
var userScoreplayer = {
    name: '',
    id: '',
    score: -1
};
;
function hendelAddUser(ev) {
    try {
        ev.preventDefault();
        console.log(ev.target.elements);
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name");
        if (!password)
            throw new Error("No Password");
        var newUser = { name: name, password: password };
        console.log(newUser);
        console.log("newUser");
        //send to server:
        fetch("/add-user", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            if (!data.error) {
                // getTenHighScore()
                userScoreplayer = {
                    name: data.user.name,
                    id: data.user._id,
                    score: -1
                };
                console.log(userScoreplayer);
                AddScore(userScoreplayer.name, userScoreplayer.id);
                snakeGame(userScoreplayer);
                //  window.location.href = "login.html"
            }
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleLogin(ev) {
    try {
        ev.preventDefault();
        console.log(ev.target.elements);
        var name = ev.target.elements.name.value;
        var password = ev.target.elements.password.value;
        if (!name)
            throw new Error("No name");
        if (!password)
            throw new Error("No Password");
        var newUser = { name: name, password: password };
        fetch("/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            if (data.error) {
                alert(data.error);
            }
            else {
                // getTenHighScore()
                userScoreplayer = {
                    name: data.user.name,
                    id: data.user._id,
                    score: -1
                };
                console.log(userScoreplayer);
                snakeGame(userScoreplayer);
                //  window.location.href = "login.html"
            }
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleDeleteUser(_id) {
    try {
        console.log(_id);
        fetch("/api/users/delete-user", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: _id })
        })
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            // renderUsers(users);
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function snakeGame(userScoreToGame) {
    try {
        if (!userScoreToGame.name || !userScoreToGame.id)
            throw new Error("no name or id from login");
        var url = "snake.html?value=" + userScoreToGame.name + ", " + userScoreToGame.id + ", -1";
        console.log("url " + url);
        window.location.href = url;
    }
    catch (error) {
        console.error(error);
    }
}
function AddScore(playerName, userId) {
    try {
        if (!playerName || !userId)
            throw new Error("No user detail");
        var score = 0;
        var competitionPlace = 0;
        var newScore = { userId: userId, playerName: playerName, score: score, competitionPlace: competitionPlace };
        console.log(newScore);
        console.log("newScore");
        //send to server:
        fetch("/add-score", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newScore)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
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
        })["catch"](function (error) {
            console.error(error);
        });
    }
    catch (error) {
        console.error(error);
    }
}
