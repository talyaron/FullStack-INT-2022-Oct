var User = /** @class */ (function () {
    function User(name, nickName, pictureURL, tasksArr) {
        this.name = name;
        this.nickName = nickName;
        this.pictureURL = pictureURL;
        this.tasksArr = tasksArr;
        this.uid = uid();
    }
    return User;
}());
var users = [];
var availbleUsers = [];
availbleUsers[0] = new User('shlomi', 'gunchi', 'test', availbleUsers[0].tasksArr.push("jkjbjkb"));
//availbleUsers[0].tasksArr.push("jkjbjkb"
var Task = /** @class */ (function () {
    function Task(name, category, description, dueDate) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.dueDate = dueDate;
        this.uid = uid();
    }
    return Task;
}());
var tasksDad = [];
var tasksMom = [];
var tasksDanny = [];
var tasksTommy = [];
var tasksDudi = [];
