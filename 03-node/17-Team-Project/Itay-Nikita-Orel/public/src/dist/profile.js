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
fillContainerIcon();
getSrcFromCurrentUser();
function getSrcFromCurrentUser() {
    return __awaiter(this, void 0, void 0, function () {
        var profileImgElement, dataJs, data, src, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    profileImgElement = document.querySelector(".profile-image img");
                    if (!profileImgElement)
                        throw new Error("no found IMG element");
                    return [4 /*yield*/, fetch("/api/users/get-user")];
                case 1:
                    dataJs = _a.sent();
                    if (!dataJs)
                        throw new Error("no found DataJsName");
                    return [4 /*yield*/, dataJs.json()];
                case 2:
                    data = _a.sent();
                    src = data.user.src;
                    if (!src)
                        return [2 /*return*/];
                    profileImgElement.setAttribute("src", src);
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
function handelRenderProfilUser() {
    try {
        fetch("/api/users/get-users")
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var users = _a.users;
            try {
                if (!users)
                    throw new Error("didnt find users");
                users.forEach(function (user) {
                    // renderProfilUser(user);
                });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleUserUpdate(ev, _id) {
    try {
        ev.preventDefault();
        var _a = ev.target.elements, lName = _a.lName, fName = _a.fName, password = _a.password, userName = _a.userName, email = _a.email;
        fetch("/api/users/update-user", {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id: _id,
                firstName: fName.value,
                lastName: lName.value,
                password: password.value,
                userName: userName.value,
                email: email.value
            })
        }).then(function (data) { return data.json(); })
            .then(function (data) {
            if (data.ok === true) {
                var message_1 = document.getElementById('message');
                setTimeout(function () {
                    message_1.innerHTML = "";
                }, 2000);
                message_1.innerHTML = "\n    \n        <h3 style=\"color:green;background-color: rgba(0, 0, 0, 1);\"> \n        <i class=\"fa-solid fa-circle-check\" ></i>\n        successfully updated\n        </h3>\n        ";
            }
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetUser() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, user, html, CardRoot, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/api/users/get-user')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    user = data.user;
                    html = "\n      <form class=\"form\" action=\"\" method=\"get\" onsubmit=\"handleUserUpdate(event, '" + user._id + "')\">\n      <label class=\"title\">firstName:</label>\n      <input id=\"fName\" class=\"value\" contenteditable value=\"" + user.firstName + "\"></input>\n      <label class=\"title\">lastName:</label>\n      <input id=\"lName\" class=\"value\" contenteditable value=\"" + user.lastName + "\" ></input>\n      <label class=\"title\">Email:</label>\n      <input id=\"email\" class=\"value\" contenteditable value=\"" + user.email + "\"></input>\n      <label class=\"title\">UserName:</label>\n      <input  id=\"userName\"class=\"value\" contenteditable value=\"" + user.userName + "\"></input>\n      <label class=\"title\">Password:</label>\n      <input id=\"password\" class=\"value\" contenteditable value=\"" + user.password + "\"></input>\n      <label class=\"title\">high score:</label>\n      <div id=\"highScore\" class=\"value\">" + (user.highScore ? user.highScore : 0) + "</div>\n      <label id=\"message\"></label>\n      <button type=\"submit\"> Update</button>\n      </form>\n  ";
                    CardRoot = document.querySelector("#cardRoot");
                    if (!CardRoot)
                        throw new Error("CardRoot not found");
                    CardRoot.innerHTML = html;
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
function handleClickChangeIcon() {
    try {
        var collapseContainer = document.querySelector('.collapseContainerChooseProfileImage');
        if (!collapseContainer)
            throw new Error("no found collapse Container Element");
        collapseContainer.classList.toggle('active');
    }
    catch (error) {
        console.error(error);
    }
}
function fillContainerIcon() {
    try {
        var collapseContainer = document.querySelector('.collapseContainerChooseProfileImage');
        if (!collapseContainer)
            throw new Error("no found collapse Container Element");
        var html = '';
        for (var i = 1; i <= 48; i++) {
            html += "<img class=\"iconProfile\" src='../images/PlayerIcons/" + i + ".png' onclick='handleClickIcon(event)'>";
        }
        collapseContainer.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleClickIcon(event) {
    return __awaiter(this, void 0, void 0, function () {
        var number, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    number = Number(event.target.src.slice(-6, -4));
                    if (!Number(number)) {
                        number = Number(event.target.src.slice(-5, -4));
                    }
                    return [4 /*yield*/, fetch('/api/users/change-icon', {
                            method: 'PATCH',
                            body: JSON.stringify({
                                src: "../images/PlayerIcons/" + number.toString() + ".png"
                            }),
                            headers: {
                                'Content-type': 'application/json; charset=UTF-8'
                            }
                        })
                            .then(function (response) { return response.json(); })
                            .then(function (json) { return console.log(json); })];
                case 1:
                    _a.sent();
                    fillContainerIcon();
                    location.reload();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
