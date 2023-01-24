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
var User = /** @class */ (function () {
    function User(gender, firstName, lastName, password, userName, dateOfBirth, phoneNumber, location, profileImage) {
        this.gender = gender;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.userName = userName;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.location = location;
        this.profileImage = profileImage;
    }
    User.prototype.getGender = function () {
        return this.gender;
    };
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.getPassword = function () {
        return this.password;
    };
    User.prototype.getUserName = function () {
        return this.userName;
    };
    User.prototype.getDOB = function () {
        return this.dateOfBirth;
    };
    User.prototype.getPhoneNum = function () {
        return this.phoneNumber;
    };
    User.prototype.getLocation = function () {
        return this.location;
    };
    User.prototype.getProfileImg = function () {
        return this.profileImage;
    };
    return User;
}());
var userList = [];
function fetchTenUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var fetchRadomUser, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetch("https://randomuser.me/api/?results=10").then(function (data) {
                            data.json().then(function (randomUser) {
                                console.log(randomUser.results);
                                randomUser.results.forEach(function (user) {
                                    // const gender = user.gender;
                                    // const firstName = user.name.first;
                                    // const lastName = user.name.last;
                                    // const password = user.login.password;
                                    // const userName = user.login.username;
                                    // const dateOfBirth = user.dob.date.slice(0, 10);
                                    // const phoneNumber = user.cell;
                                    // const location = user.location.country;
                                    // const profileImage = user.picture.large;
                                    var randomUser = new User(user.gender, user.name.first, user.name.last, user.login.password, user.login.username, user.dob.date.slice(0, 10), user.cell, user.location.country, user.picture.large);
                                });
                            });
                        })];
                case 1:
                    fetchRadomUser = _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
fetchTenUsers();
var wrapper = document.querySelector(".cardsWrapper");
function renderUsers(arr) {
    arr.forEach(function (user) {
        var userCard = document.createElement("div");
        userCard.classList.add("cardsWrapper__userCard");
        userCard.innerHTML = "<img src=\"" + user.getProfileImg() + "\"/>";
        wrapper.appendChild(userCard);
        // const img = new Image();
        // const ulEle = document.createElement("ul") as HTMLUListElement;
        // const li = document.createElement("li") as HTMLLIElement;
        // const span = document.createElement("span") as HTMLSpanElement;
        // li.textContent = user[0];
    });
}
// console.log("End of TS");
var form = document.querySelector('.formSection');
form.addEventListener('submit', function (e) {
    e.preventDefault;
    console.log(e);
});
