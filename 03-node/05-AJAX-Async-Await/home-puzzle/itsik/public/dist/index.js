var dog = document.querySelector(".contDog");
var cat = document.querySelector(".contCat");
var dogBtn = document.querySelector("#dogResult");
var catBtn = document.querySelector("#catResult");
dogBtn.addEventListener("click", getDogImage);
// catBtn.addEventListener("click", getCatImage)
function getDogImage() {
    var dog = document.querySelector(".contDog");
    try {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            if (dog) {
                console.log(data);
                var show = "<img src=\"" + data.Message + "\">";
                dog.innerHTML = show;
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
// function getCatImage(){
// }
