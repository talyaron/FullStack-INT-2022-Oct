//-----Class
var Profile = /** @class */ (function () {
    function Profile(name, email, phone, password, image, gender) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.image = image;
        this.gender = gender;
    }
    return Profile;
}());
var profile = [];
//-----Script
var form = document.querySelector("form");
function hendleAddDetail(event) {
    try {
        event.preventDefault();
        var name = event.target.elements.name.value;
        var email = event.target.elements.email.value;
        var phone = event.target.elements.phone.value;
        var password = event.target.elements.password.value;
        var image = event.target.elements.image.value;
        var gender = event.target.elements.gender.value;
        profile.push(new Profile(name, email, phone, password, image, gender));
        console.log(profile);
        showProfile();
    }
    catch (error) {
        console.error(error);
    }
}
function showProfile() {
    try {
        for (var i = 0; i < profile.length; i++) {
            var userProfile = document.querySelector(".profile");
            userProfile.innerHTML += "<div class =\"userProfile\"> " + profile[i].name + "</div>";
            userProfile.innerHTML += "<div class =\"userProfile\"> " + profile[i].email + "</div>";
            userProfile.innerHTML += "<div class =\"userProfile\"> " + profile[i].phone + "</div>";
            userProfile.innerHTML += "<div class =\"userProfile\"> " + profile[i].gender + "</div>";
            userProfile.innerHTML += "<div class =\"userProfile\"> " + profile[i].image + "</div>";
        }
    }
    catch (error) {
        console.log(error);
    }
}
