var UserDetail = /** @class */ (function () {
    function UserDetail(fullName, email, url, password, color) {
        this.fullName = fullName;
        this.email = email;
        this.url = url;
        this.password = password;
        this.color = color;
        this.uid = uid();
    }
    return UserDetail;
}());
var arrayOfUsers = [];
