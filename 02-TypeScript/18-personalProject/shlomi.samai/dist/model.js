var User = /** @class */ (function () {
    function User(name, nickName, pictureURL) {
        this.name = name;
        this.nickName = nickName;
        this.pictureURL = pictureURL;
        //tasks:string[]=[];
        this.taskObjArr = [];
        this.uid = uid();
    }
    return User;
}());
var Task = /** @class */ (function () {
    function Task(name, category, description) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.uid = uid();
    }
    return Task;
}());
var users = [];
var availbleUsers = [];
availbleUsers.push(new User('shlomi', 'gunchi', 'test'));
// availbleUsers[0].tasks.push("firstTask")
availbleUsers[0].taskObjArr.push(new Task("laundry", "home", "dirty clothes"));
//reviews:UserReview[]=[];
//availbleUsers[0]=new User('shlomi','gunchi','test',availbleUsers[0].tasksArr.push("jkjbjkb");
//availbleUsers[0].tasksArr.push("jkjbjkb"
// const tasksDad:Task[]=[];
// const tasksMom:Task[]=[];
// const tasksDanny:Task[]=[];
// const tasksTommy:Task[]=[];
// const tasksDudi:Task[]=[];
