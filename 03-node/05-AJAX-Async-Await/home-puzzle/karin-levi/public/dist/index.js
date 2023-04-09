function getRandomPicture() {
    try {
        fetch("/random-picture") //promise
            .then(function (response) { return response.json(); })
            .then(function (data) {
            var pic = document.getElementById("pic");
            if (pic) {
                pic.src = data["picLink"];
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
