function saveSrc() {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        // convert image file to base64 string
        preview.src = reader.result;
        imgSrc = reader.result;
    }, false);
    if (file.files) {
        reader.readAsDataURL(file.files[0]);
    }
}
function fetchRadomUser() {
    fetch("https://randomuser.me/api/?results=8").then(function (data) {
        data.json().then(function (randomUser) {
            randomUser.results.forEach(function (user) {
                var randomUser = new User(user.gender, user.name.first, user.name.last, user.login.password, user.login.username, user.dob.date.slice(0, 10), user.cell, user.location.country, user.picture.large);
                userList.push(randomUser);
            });
        });
    });
}
function toggleDisplay(listElement, imgElement) {
    if (listElement.style.display == "flex") {
        listElement.style.display = "none";
        imgElement.style.height = '20vw';
    }
    else {
        listElement.style.display = "flex";
        imgElement.style.height = '10vw';
        imgElement.style.transform = 'scale(1)';
    }
}
function setImgClick() {
    try {
        setTimeout(function () {
            var imgElements = wrapper.querySelectorAll("img");
            imgElements.forEach(function (ele) {
                return ele.addEventListener("click", function () {
                    var target = ele.parentElement;
                    var ulEl = target === null || target === void 0 ? void 0 : target.querySelector("ul");
                    var img = target === null || target === void 0 ? void 0 : target.querySelector("img");
                    toggleDisplay(ulEl, img);
                });
            });
        }, 400);
    }
    catch (error) {
        console.log(error);
    }
}
