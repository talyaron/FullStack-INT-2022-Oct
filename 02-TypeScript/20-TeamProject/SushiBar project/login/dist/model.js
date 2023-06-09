var User = /** @class */ (function () {
    function User(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    return User;
}());
//data
var danCohen = new User("danCohen", "danSushiBar147");
var yossiZaban = new User("yossi123", "yossiSushiBar147");
//array for all the users
var usersList = [danCohen, yossiZaban];
