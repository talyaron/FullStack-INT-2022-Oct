//----- Class
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
//----- Script
var form = document.querySelector("form");
var userProfile = document.querySelector(".profile");
//----- Event listener
function hendleAddDetail(event) {
    try {
        event.preventDefault();
        //----- Creat new div
        var user_1 = document.createElement("div");
        userProfile.appendChild(user_1);
        user_1.classList.add("user");
        //----- Display the image on the page
        var userImage = form.querySelector("#user-image");
        var file = userImage.files[0];
        var reader_1 = new FileReader();
        reader_1.readAsDataURL(file);
        reader_1.onload = function () {
            var img = document.createElement("img");
            img.src = reader_1.result;
            user_1.appendChild(img);
        };
        //----- Get values from the elements
        var name = event.target.elements.name.value;
        var email = event.target.elements.email.value;
        var phone = event.target.elements.phone.value;
        var password = event.target.elements.password.value;
        var image = event.target.elements.image.value;
        var gender = event.target.elements.gender.value;
        profile.push(new Profile(name, email, phone, password, image, gender));
        console.log(profile);
        //----- Document profile on DOM
        user_1.innerHTML += "<p>" + name + " <br> " + email + " <br> " + phone + " <br> " + gender + "</p>";
    }
    catch (error) {
        console.error(error);
    }
}
