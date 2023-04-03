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
window.addEventListener('load', function () { return getUsers(); });
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());
function formHandler(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var name, email;
        return __generator(this, function (_a) {
            ev.preventDefault();
            console.log(ev);
            name = ev.target.elements.name.value;
            email = ev.target.elements.email.value;
            ev.target.reset();
            try {
                fetch("/api-add-user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name: name, email: email })
                })
                    .then(function (res) { return res.json(); })
                    .then(function (allUsers) {
                    console.log("Success");
                    renderUsers(allUsers);
                });
            }
            catch (error) {
                console.error("Error:", error);
            }
            return [2 /*return*/];
        });
    });
}
function getUsers() {
    fetch("/api-get-users")
        .then(function (response) { return response.json(); })
        .then(function (allUsers) {
        renderUsers(allUsers);
    });
}
function renderUsers(users) {
    try {
        var display = document.getElementById("display");
        var html = users.map(function (user) {
            return "\n            <h2>" + user.name + "</h2>\n            <h3>" + user.email + "</h3>\n            <button onclick=\"deleteUser('" + user._id + "')\">Delete</button>\n            <a href=\"#updateForm\"><button onclick=\"updateUser('" + user.name + "', '" + user.email + "', '" + user._id + "')\">Update</button></a>\n        ";
        }).join(" ");
        if (!display)
            throw new Error("display not found");
        display.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function updateUser(name, email, _id) {
    try {
        var form = document.getElementById("updateForm");
        var html = "\n        <form onsubmit=\"updateUserHelper(event,'" + name + "', '" + email + "', '" + _id + "')\">\n            <input type=\"text\" name=\"name\" placeholder=\"" + name + "\">\n            <input type=\"email\" name=\"email\" placeholder=\"" + email + "\">\n            <a href=\"#top\"><input type=\"submit\" value=\"Send/Dismiss\"></a>\n        </form>\n        ";
        if (!form)
            throw new Error("updateForm not found");
        form.innerHTML = html;
    }
    catch (error) {
        console.error("Error:", error);
    }
}
function updateUserHelper(ev, name, email, _id) {
    try {
        console.log("hello");
        ev.preventDefault();
        var newName = ev.target.elements.name.value;
        var newEmail = ev.target.elements.email.value;
        if (newName == "")
            newName = name;
        if (newEmail == "")
            newEmail = email;
        console.log(newName + " " + newEmail);
        var form = document.getElementById("updateForm");
        if (!form)
            throw new Error("updateForm not found");
        form.innerHTML = "";
        console.log(ev);
        ev.target.reset();
        fetch("/api-update", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: newName, email: newEmail, _id: _id })
        })
            .then(function (res) { return res.json(); })
            .then(function (allUsers) {
            console.log("Success");
            renderUsers(allUsers);
        });
    }
    catch (error) {
        console.error("Error:", error);
    }
}
function deleteUser(_id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                fetch("/api-delete", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ _id: _id })
                }).then(function (res) { return res.json(); })
                    .then(function (allUsers) {
                    console.log("Success");
                    renderUsers(allUsers);
                });
            }
            catch (error) {
                console.error("Error:", error);
            }
            return [2 /*return*/];
        });
    });
}
