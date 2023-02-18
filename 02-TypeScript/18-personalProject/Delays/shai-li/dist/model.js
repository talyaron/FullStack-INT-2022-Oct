var _a, _b;
var Task = /** @class */ (function () {
    function Task(title, description, dueTime, username, completed) {
        if (completed === void 0) { completed = false; }
        this.title = title;
        this.description = description;
        this.dueTime = dueTime;
        this.username = username;
        this.completed = completed;
    }
    return Task;
}());
var tasks = JSON.parse((_a = localStorage.getItem("tasks")) !== null && _a !== void 0 ? _a : "[]");
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());
var users = JSON.parse((_b = localStorage.getItem("users")) !== null && _b !== void 0 ? _b : "[]");
