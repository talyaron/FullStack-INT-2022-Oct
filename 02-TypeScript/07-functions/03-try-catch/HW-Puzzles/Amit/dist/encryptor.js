var encryptor = function (userPassword) {
    try {
        var arrayedPassword = [];
        for (var i = 0; i < userPassword.length; i++) {
            var outputCode = userPassword.charCodeAt(i) * 520;
            arrayedPassword.push(outputCode);
        }
        return arrayedPassword.join("");
    }
    catch (_a) {
        console.error(Error);
        return false;
    }
};
var repeat = true;
while (repeat === true) {
    var userPassword = prompt("Do not go gentle into that good night");
    console.log(typeof userPassword);
    if (userPassword !== null) {
        if ((isNaN(Number(userPassword))) && (userPassword !== "")) {
            alert("The encryption of " + userPassword + " is " + encryptor(userPassword));
        }
        else {
            alert("You didn't enter letters");
        }
    }
    else {
        alert("Thank you, come again!");
        repeat = false;
    }
}
