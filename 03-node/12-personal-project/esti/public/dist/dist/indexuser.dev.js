"use strict";

exports.__esModule = true; // import { updateScore } from './../API/scores/scoreControl';
// import { Scores } from '../API/scores/scoreModel';
// import { User } from '../API/users/userModel';
// tinymce.init({
//   selector: '#myTextarea'
// });
// import { url } from "inspector";

var userScoreToGame = {
  name: name,
  id: id,
  score: score
};
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var value = urlParams.get('value');
console.log(value);
if (value) updatePlayerScore(value);
;

function getTenHighScore() {
  try {
    console.log("getTenHighScore");
    fetch("/get-score").then(function (res) {
      return res.json();
    }).then(function (_a) {
      var scores = _a.scores;

      try {
        if (!scores) throw new Error("didnt find scores");
        console.log(scores);
        console.log("scores");
        renderScores(scores);
      } catch (error) {
        console.error(error);
      }
    });
  } catch (error) {
    console.error(error);
  }
}

function renderScores(scores) {
  try {
    if (!scores) throw new Error("No users");
    var html = "";
    scores.map(function (score) {
      return renderScore(score);
    }).join(" ");
    html = "<div class=\"container\"><h1>Ten user with high score</h1><div class=\"container__form\">" + html + "</div></div>";
    var scoresElement = document.querySelector(".centered");
    if (!scoresElement) throw new Error("coundnt find users element on DOM");
    scoresElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function renderScore(score) {
  try {
    console.log(score);
    return "\n    <p>" + score.userName + " - " + score.score + "</p>";
  } catch (error) {
    console.error(error);
    return null;
  }
}

function handleUserNameUpdate(ev, uid) {
  try {
    console.log(uid);
    var name = ev.target.textContent;
    fetch("/api/users/update-user-name", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        uid: uid
      })
    });
  } catch (error) {
    console.error(error);
  }
}

function hendelAddUser(ev) {
  try {
    ev.preventDefault();
    console.log(ev.target.elements);
    var name = ev.target.elements.name.value;
    var password = ev.target.elements.password.value;
    if (!name) throw new Error("No name");
    if (!password) throw new Error("No Password");
    var newUser = {
      name: name,
      password: password
    };
    console.log(newUser);
    console.log("newUser"); //send to server:

    fetch("/add-user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);
    })["catch"](function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}

function handleLogin(ev) {
  try {
    ev.preventDefault();
    console.log(ev.target.elements);
    var name = ev.target.elements.name.value;
    var password = ev.target.elements.password.value;
    if (!name) throw new Error("No name");
    if (!password) throw new Error("No Password");
    var newUser = {
      name: name,
      password: password
    };
    fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);

      if (data.error) {
        alert(data.error);
      } else {
        // getTenHighScore()
        //  snakeGame(data.name, data._id)
        userScoreToGame.name = data.user.name;
        userScoreToGame.id = data.ueser._id;
        userScoreToGame.score = 0;
        console.log("userScoreToGame.");
        console.log(userScoreToGame); //  snakeGame(data.name, data._id)
        //  window.location.href = "login.html"
      }
    })["catch"](function (error) {
      console.error(error);
    });
  } catch (error) {
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
      body: JSON.stringify({
        _id: _id
      })
    }).then(function (res) {
      return res.json();
    }).then(function (_a) {
      var users = _a.users;
      renderUsers(users);
    })["catch"](function (error) {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}

function handleUpdateUserType(ev, userId) {
  try {
    var userType = ev.target.value;
    console.log(userType);
    fetch("/api/users/update-user-type", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        userType: userType
      })
    }).then(function (res) {
      return res.json();
    }).then(function (_a) {
      var users = _a.users;
      renderUsers(users);
    })["catch"](function (error) {
      console.error(error);
    });
    ;
  } catch (error) {
    console.error(error);
  }
}

function renderUsers(users) {
  console.log("renderUser");
}

function snakeGame(name, id) {
  try {
    if (!name || !id) throw new Error("no name or id from login"); // const urlData = `playerNAme: ${name} id: ${id}`

    var urlData = name + "," + id;
    var url = "snake.html?value=" + urlData;
    console.log("url " + url);
    window.location.href = url;
  } catch (error) {
    console.error(error);
  }
}

function updatePlayerScore(value) {
  try {
    console.log(value);
    console.log("updatePlayerSorce"); //   const userType = ev.target.value;
    //   console.log(userType)
    //   fetch("/api/users/update-user-type", {
    //     method: "PATCH",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ userId, userType }),
    //   })
    //   .then((res) => res.json())
    //     .then(({ users }) => {
    //       renderUsers(users);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });;
  } catch (error) {
    console.error(error);
  }
}