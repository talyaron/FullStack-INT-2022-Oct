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
        var newUser = { email: email, firstName: firstName, lastName: lastName, password: password, age: age, gender: gender };
        users.push(newUser);
        console.log(users);
        user.target.reset();
    }
    catch (error) {
        console.error(error);
    }
};
