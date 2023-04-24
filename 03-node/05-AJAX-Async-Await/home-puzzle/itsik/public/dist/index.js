var dog = document.querySelector(".contDog");
var cat = document.querySelector(".contCat");
var dogBtn = document.querySelector(".dogResult");
var catBtn = document.querySelector(".catResult");
dogBtn.addEventListener("click", getDogImage);
catBtn.addEventListener("click", getCatImage);
function getDogImage() {
    try {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            console.log(data);
            if (dog) {
                var ap = data.message;
                var dog_1 = document.querySelector(".contDog").innerHTML = "<img src=\"" + ap + "\" width=\"397\" height=\"397\"></img>";
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
function getCatImage() {
    fetch(' https://api.thecatapi.com/v1/images/search')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
        if (cat) {
            var cp = data.url;
            //    cat.innerHTML = `<img src="${cp}" width="397" height="397"></img>`;
            var cat_1 = document.querySelector(".contCat").innerHTML = "<img src=\"" + cp + "\" width=\"397\" height=\"397\"></img>";
        }
    });
}
