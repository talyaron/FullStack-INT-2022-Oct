var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var totalGamesPlayedFill = document.getElementById("totalGamesPlayedFill"); // Fill Total Games Number
var versionFill = document.getElementById("versionFill"); // Fill Version Number
var onLoad = function () {
    try {
        renderTowerList();
        renderEnemyList();
        renderUserList();
        FillAdminName();
        getTotalGamesPlayed();
        FillRegisteredUsers();
    }
    catch (error) { }
};
// View
function renderCreateTowerSection() {
    try {
        var html = "\n    <div onclick=\"handleClickCloseCollapseContainer()\" id=\"closeIcon\" class=\"collapse-container__close\">\n    <i class=\"fa-solid fa-xmark\"></i>\n</div>\n<h2 class=\"collapse-container__title\">create Tower</h2>\n<form class=\"collapse-container__form\" onsubmit=\"handleSubmitCreateTower(event)\">\n\n    <div>\n        <label for=\"name\" >Name</label>\n        <input type=\"text\" name=\"name\" id=\"name\" >\n    </div>\n    <div>\n        <label for=\"image\" >Image</label>\n        <input type=\"text\" name=\"image\" id=\"image\">\n    </div>\n    <div>\n        <label for=\"damage\" >Damage</label>\n        <input type=\"number\" name=\"damage\" id=\"damage\" >\n    </div>\n    <div>\n        <label for=\"radius\" > Radius</label>\n        <input type=\"number\" name=\"radius\" min=\"0\" max=\"100\" >\n    </div>\n    <div>\n        <label for=\"cost\" > Cost</label>\n        <input type=\"number\" name=\"cost\" id=\"cost\" >\n    </div>\n    <div>\n        <label for=\"level\" >Level</label>\n        <input type=\"number\" name=\"level\" id=\"level\" >\n    </div>\n    <button type=\"submit\">Create Now</button>\n</form>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "We Have A Problem Here";
    }
}
function renderCreateEnemySection() {
    try {
        var html = "\n    <div onclick=\"handleClickCloseCollapseContainer()\" id=\"closeIcon\" class=\"collapse-container__close\">\n    <i class=\"fa-solid fa-xmark\"></i>\n</div>\n<h2 class=\"collapse-container__title\">Create Enemy</h2>\n<form class=\"collapse-container__form\" onsubmit=\"handleSubmitCreateEnemy(event)\">\n\n    <div>\n        <label for=\"name\" >Name</label>\n        <input type=\"text\" name=\"name\" id=\"name\">\n    </div>\n    <div>\n    <label for=\"health\" >Health</label>\n    <input type=\"number\" name=\"health\" id=\"health\">\n    </div>\n    <div>\n        <label for=\"type\" >Image</label>\n        <input type=\"text\" name=\"image\" id=\"type\">\n    </div>\n    <button type=\"submit\">Create Now</button>\n</form>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "We Have A Problem Here";
    }
}
function renderCreateUserSection() {
    try {
        var html = "\n    <div onclick=\"handleClickCloseCollapseContainer()\" id=\"closeIcon\" class=\"collapse-container__close\">\n    <i class=\"fa-solid fa-xmark\"></i>\n</div>\n<h2 class=\"collapse-container__title\">Create User</h2>\n<form class=\"collapse-container__form\" onsubmit=\"handleSubmitCreateUser(event)\">\n\n    <div>\n        <label for=\"firstName\" >First Name</label>\n        <input type=\"text\" name=\"firstName\" id=\"firstName\">\n    </div>\n    <div>\n        <label for=\"lastName\" >Last Name</label>\n        <input type=\"text\" name=\"lastName\" id=\"lastName\">\n    </div>\n    <div>\n        <label for=\"username\" > Username</label>\n        <input type=\"text\" name=\"username\" id=\"username\">\n    </div>\n    <div>\n        <label for=\"email\" >Email</label>\n        <input type=\"text\" name=\"email\" id=\"email\">\n    </div>\n    <div>\n        <label for=\"password\" >Password</label>\n        <input type=\"text\" name=\"password\" id=\"password\">\n    </div>\n    <div>\n        <label for=\"cPassword\" >Confirm Password</label>\n        <input type=\"text\" name=\"cPassword\" id=\"cPassword\">\n    </div>\n    <div>\n        <label for=\"role\" >ROLE</label>\n       <select id=\"role\" name=\"role\">\n       <option value=\"public\" >Public</option>\n       <option value=\"admin\" >Admin</option>\n       </select>\n    </div>\n    <div id=\"adminNotificationRoot\"></div>\n    <button type=\"submit\">Create Now</button>\n</form>";
        return html;
    }
    catch (error) {
        console.error(error);
        return "We Have A Problem Here";
    }
}
// RENDER USERS LIST
function renderUserList() {
    return __awaiter(this, void 0, void 0, function () {
        var rootUsersDetail, dataJs, data, users, html, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    rootUsersDetail = document.getElementById("rootUsersDetail");
                    return [4 /*yield*/, fetch("/api/users/get-users")];
                case 1:
                    dataJs = _a.sent();
                    if (!dataJs)
                        throw new Error("no found dataJs");
                    return [4 /*yield*/, dataJs.json()];
                case 2:
                    data = _a.sent();
                    if (data.ok === false) {
                        rootUsersDetail.innerHTML = "N/A";
                    }
                    else {
                        users = data.users;
                        html = users
                            .map(function (user) {
                            return "\n              <li class=\"container__main__container-middle__list\">\n              <div>\n                  <h5>Username</h5>\n                  <span id=\"rootNameUser\">" + user.userName + "</span>\n              </div>\n              <div>\n                  <h5>Email</h5>\n                  <span id=\"rootNameUser\">" + user.email + "</span>\n              </div>\n              <div>\n                  <h5>Role</h5>\n                  <span id=\"rootNameUser\">" + user.ROLE + "</span>\n              </div>\n              <div>\n                  <button onclick=\"handleClickDelUser('" + user._id + "')\">\n                      <i class=\"fa-solid fa-trash-can\"></i>\n                  </button>\n              </div>\n          </li>\n  \n              ";
                        })
                            .join("");
                        rootUsersDetail.innerHTML = html;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//RENDER TOWER LISTS
function renderTowerList() {
    return __awaiter(this, void 0, void 0, function () {
        var rootTowersDetail, dataJs, data, towerDB, html, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    rootTowersDetail = document.getElementById("rootTowersDetail");
                    return [4 /*yield*/, fetch("/api/tower/get-towers")];
                case 1:
                    dataJs = _a.sent();
                    if (!dataJs)
                        throw new Error("no found dataJs");
                    return [4 /*yield*/, dataJs.json()];
                case 2:
                    data = _a.sent();
                    if (data.ok === false) {
                        rootTowersDetail.innerHTML = "N/A";
                    }
                    else {
                        towerDB = data.towerDB;
                        html = towerDB
                            .map(function (tower) {
                            return "\n              <li class=\"container__main__container-middle__list\">\n              <div>\n                  <h5>Name</h5>\n                  <span id=\"rootTowerName\">" + tower.name + "</span>\n              </div>\n              <div>\n                  <h5>Image</h5>\n                  <img id=\"towerImage\" src=\"" + tower.image + "\">\n              </div>\n              <div>\n                  <h5>Damage</h5>\n                  <span id=\"rootTowerDamage\">" + tower.damage + "</span>\n              </div>\n              <div>\n                  <h5>Radius</h5>\n                  <span id=\"rootTowerRadius\">" + tower.radius + "</span>\n              </div>\n              <div>\n                  <h5>Cost</h5>\n                  <span id=\"rootTowerCost\">" + tower.cost + "</span>\n              </div>\n              <div>\n                  <h5>Level</h5>\n                  <span id=\"rootTowerLevel\">" + tower.level + "</span>\n              </div>\n              <div>\n                  <button onclick=\"handleClickDelTower('" + tower._id + "')\">\n                      <i class=\"fa-solid fa-trash-can\"></i>\n                  </button>\n              </div>\n          </li>\n  \n              ";
                        })
                            .join("");
                        rootTowersDetail.innerHTML = html;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//RENDER ENEMY LISTS
function renderEnemyList() {
    return __awaiter(this, void 0, void 0, function () {
        var rootEnemiesDetail, dataJs, data, enemyDB, html, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    rootEnemiesDetail = document.getElementById("rootEnemiesDetail");
                    return [4 /*yield*/, fetch("/api/enemy/get-enemies")];
                case 1:
                    dataJs = _a.sent();
                    if (!dataJs)
                        throw new Error("no found dataJs");
                    return [4 /*yield*/, dataJs.json()];
                case 2:
                    data = _a.sent();
                    if (data.ok === false) {
                        rootEnemiesDetail.innerHTML = "N/A";
                    }
                    else {
                        enemyDB = data.enemyDB;
                        html = enemyDB
                            .map(function (enemy) {
                            return "\n              <li class=\"container__main__container-middle__list\">\n              <div>\n                  <h5>Name</h5>\n                  <span id=\"rootEnemyName\">" + enemy.name + "</span>\n              </div>\n              <div>\n                  <h5>Image</h5>\n                  <img id=\"enemyImage\" src=\"" + enemy.image + "\">\n              </div>\n              <div>\n                  <h5>Health</h5>\n                  <span id=\"rootEnemyHealth\">" + enemy.health + "</span>\n              </div>\n              <div>\n                  <button onclick=\"handleClickDelEnemy('" + enemy._id + "')\">\n                      <i class=\"fa-solid fa-trash-can\"></i>\n                  </button>\n              </div>\n          </li>\n  \n              ";
                        })
                            .join("");
                        rootEnemiesDetail.innerHTML = html;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Control
function handleSubmitCreateTower(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, image, damage, radius, cost, level, newTower;
        return __generator(this, function (_a) {
            try {
                ev.preventDefault();
                name = ev.target.elements.name.value;
                image = ev.target.elements.image.value;
                damage = ev.target.elements.damage.value;
                radius = ev.target.elements.radius.value;
                cost = ev.target.elements.cost.value;
                level = ev.target.elements.level.value;
                if (!name)
                    throw new Error("No name");
                if (!image)
                    throw new Error("No image");
                if (!damage)
                    throw new Error("No damage");
                if (!radius)
                    throw new Error("No radius");
                if (!cost)
                    throw new Error("No cost");
                if (!level)
                    throw new Error("No level");
                newTower = { name: name, image: image, damage: damage, radius: radius, cost: cost, level: level };
                fetch("/api/tower/create-tower", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newTower)
                })
                    .then(function (res) { return res.json(); })
                    .then(function (data) {
                    if (data.error) {
                        var collapse_container__form = document.querySelector(".collapse-container__form");
                        var adminNotification = document.querySelector(".adminNotification");
                        if (!collapse_container__form)
                            throw new Error("DOM Error");
                        if (!adminNotification) {
                            collapse_container__form.insertAdjacentHTML("afterend", '<p class="adminNotification">Tower already exist OR unauthorized<p>');
                        }
                        throw new Error(data.error);
                    }
                    location.reload();
                });
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function handleSubmitCreateEnemy(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, image, health, newEnemy;
        return __generator(this, function (_a) {
            try {
                ev.preventDefault();
                name = ev.target.elements.name.value;
                image = ev.target.elements.image.value;
                health = ev.target.elements.health.value;
                if (!name)
                    throw new Error("No name");
                if (!image)
                    throw new Error("No image");
                if (!health)
                    throw new Error("No health");
                newEnemy = { name: name, image: image, health: health };
                fetch("/api/enemy/create-enemy", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newEnemy)
                })
                    .then(function (res) { return res.json(); })
                    .then(function (data) {
                    if (data.error) {
                        var collapse_container__form = document.querySelector(".collapse-container__form");
                        var adminNotification = document.querySelector(".adminNotification");
                        if (!collapse_container__form)
                            throw new Error("DOM Error");
                        if (!adminNotification) {
                            collapse_container__form.insertAdjacentHTML("afterend", '<p class="adminNotification">Enemy already exist OR unauthorized<p>');
                        }
                        throw new Error(data.error);
                    }
                    location.reload();
                });
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function handleSubmitCreateUser(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var firstName, lastName, userName, email, password, cPassword, role, newUser, collapseFormRoot;
        return __generator(this, function (_a) {
            try {
                ev.preventDefault();
                firstName = ev.target.elements.firstName.value;
                lastName = ev.target.elements.lastName.value;
                userName = ev.target.elements.username.value;
                email = ev.target.elements.email.value;
                password = ev.target.elements.password.value;
                cPassword = ev.target.elements.cPassword.value;
                role = ev.target.elements.role.value;
                if (!firstName)
                    throw new Error("No firstName");
                if (!lastName)
                    throw new Error("No lastName");
                if (!userName)
                    throw new Error("No userName");
                if (!email)
                    throw new Error("No email");
                if (!password)
                    throw new Error("No password");
                if (!cPassword)
                    throw new Error("No cPassword");
                if (!role)
                    throw new Error("No role");
                newUser = { firstName: firstName, lastName: lastName, email: email, userName: userName, password: password, cPassword: cPassword, role: role };
                if (password !== cPassword) {
                    alert("the Confirm Password isn't correct");
                    return [2 /*return*/];
                }
                fetch("/api/users/admin-create-user", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(function (res) { return res.json(); })
                    .then(function (data) {
                    if (data.error) {
                        var adminNotification = document.querySelector(".adminNotification");
                        var adminNotificationRoot = document.querySelector("#adminNotificationRoot");
                        if (!adminNotificationRoot)
                            throw new Error("DOM Error");
                        if (!adminNotification) {
                            adminNotificationRoot.insertAdjacentHTML('afterend', '<p class="adminNotification">Username or Email already exist OR unauthorized<p>');
                        }
                        throw new Error(data.error);
                    }
                    location.reload();
                });
                alert("The user  was created successfully");
                collapseFormRoot = document.getElementById("collapseFormRoot");
                collapseFormRoot.classList.remove("active");
                ev.target.reset();
                location.reload();
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function handleClickDelUser(userID) {
    return __awaiter(this, void 0, void 0, function () {
        var deleteUser, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!confirm("Are you sure you want to delete the above user?")) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch("/api/users/delete-user", {
                            method: "DELETE",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                uid: userID
                            })
                        }).then(function (data) {
                        })];
                case 1:
                    deleteUser = _a.sent();
                    location.reload();
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleClickDelTower(towerId) {
    return __awaiter(this, void 0, void 0, function () {
        var deleteTower, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!confirm("Are you sure you want to delete the above tower?")) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch("/api/tower/delete-tower", {
                            method: "DELETE",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ towerId: towerId })
                        }).then(function (data) {
                        })];
                case 1:
                    deleteTower = _a.sent();
                    location.reload();
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleClickDelEnemy(enemyId) {
    return __awaiter(this, void 0, void 0, function () {
        var deleteenemy, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!confirm("Are you sure you want to delete the above enemy?")) return [3 /*break*/, 2];
                    return [4 /*yield*/, fetch("/api/enemy/delete-enemy", {
                            method: "DELETE",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ enemyId: enemyId })
                        }).then(function (data) {
                        })];
                case 1:
                    deleteenemy = _a.sent();
                    location.reload();
                    _a.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Click  return back button
function handleClickBack() {
    try {
        window.location.href = "/";
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickCloseCollapseContainer() {
    try {
        var collapseFormRoot = document.getElementById("collapseFormRoot");
        collapseFormRoot.classList.remove("active");
    }
    catch (error) {
        console.error(error);
    }
}
// bottom Buttons
function handleClickCreateTowerBtn() {
    try {
        var collapseFormRoot = document.getElementById("collapseFormRoot");
        collapseFormRoot.classList.add("active");
        collapseFormRoot.innerHTML = renderCreateTowerSection();
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickCreateEnemyBtn() {
    try {
        var collapseFormRoot = document.getElementById("collapseFormRoot");
        collapseFormRoot.classList.add("active");
        collapseFormRoot.innerHTML = renderCreateEnemySection();
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickCreateUserBtn() {
    try {
        var collapseFormRoot = document.getElementById("collapseFormRoot");
        collapseFormRoot.classList.add("active");
        collapseFormRoot.innerHTML = renderCreateUserSection();
    }
    catch (error) {
        console.error(error);
    }
}
// FILL STATS
function FillRegisteredUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var registeredUserFill, dataJs, data, userNumber, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    registeredUserFill = document.getElementById("registeredUserFill");
                    return [4 /*yield*/, fetch("/api/users/get-users")];
                case 1:
                    dataJs = _a.sent();
                    if (!dataJs)
                        throw new Error("no found DataJsName");
                    return [4 /*yield*/, dataJs.json()];
                case 2:
                    data = _a.sent();
                    if (data.ok === false) {
                        registeredUserFill.innerHTML = "N/A";
                    }
                    else {
                        userNumber = data.users.length.toString();
                        registeredUserFill.innerHTML = userNumber;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _a.sent();
                    console.error();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function FillAdminName() {
    return __awaiter(this, void 0, void 0, function () {
        var nameAdminFill, dataJs, data, name, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    nameAdminFill = document.getElementById("nameAdminFill");
                    return [4 /*yield*/, fetch("/api/users/get-user")];
                case 1:
                    dataJs = _a.sent();
                    if (!dataJs)
                        throw new Error("no found DataJsName");
                    return [4 /*yield*/, dataJs.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    name = data.user.firstName;
                    console.log(name);
                    nameAdminFill.innerHTML = name;
                    return [3 /*break*/, 4];
                case 3:
                    error_8 = _a.sent();
                    console.error();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function getTotalGamesPlayed() {
    return __awaiter(this, void 0, void 0, function () {
        var totalGamesPlayedFill_1, data, totalGamesPlayed, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    totalGamesPlayedFill_1 = document.querySelector("#totalGamesPlayedFill");
                    return [4 /*yield*/, fetch("/api/game/get-total-games-played")];
                case 1:
                    data = _a.sent();
                    if (!data)
                        throw new Error("Couldn't fetch total games played!");
                    return [4 /*yield*/, data.json()];
                case 2:
                    totalGamesPlayed = (_a.sent()).totalGamesPlayed;
                    if (!totalGamesPlayedFill_1)
                        throw new Error("Couldn't catch total games played h1!");
                    if (totalGamesPlayed === undefined) {
                        totalGamesPlayedFill_1.innerText = "N/A";
                    }
                    else {
                        totalGamesPlayedFill_1.innerText = totalGamesPlayed;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_9 = _a.sent();
                    console.error();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
