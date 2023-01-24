var User = /** @class */ (function () {
    function User(email, firstName, lastName, password, age, gender) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.age = age;
        this.gender = gender;
    }
    return User;
}());
var users = [];
// create a user to the store
var createUser = function (user) {
    try {
        user === null || user === void 0 ? void 0 : user.preventDefault();
        var email = user.target.elements.email.value;
        var firstName = user.target.elements.firstName.value;
        var lastName = user.target.elements.lastName.value;
        var password = user.target.elements.password.value;
        var age = user.target.elements.age.valueAsNumber;
        var gender = user.target.elements.genderCategory.value;
        users.push(new User(email, firstName, lastName, password, age, gender));
        console.log(users);
        user.target.reset();
    }
    catch (error) {
        console.error(error);
    }
};
// users.push(
//   new user("example@gmail.com", "Israel", "Israeli", "isr23451", 34, "Male")
// );
// console.log(users);
// interface IUser {
//   email: string;
//   firstName: string;
//   lastName: string;
//   password: string;
//   age: number;
//   gender: string;
// }
