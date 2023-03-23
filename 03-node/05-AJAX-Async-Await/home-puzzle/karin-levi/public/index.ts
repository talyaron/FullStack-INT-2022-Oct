
function getRandomPicture() {
    try {

        fetch("/random-picture") //promise
            .then((response) => response.json())
            .then((data) => {
                const pic = document.getElementById("pic");
                if (pic) {
                    pic.src = data["picLink"];
                }
            });
    } catch (error) {
        console.error(error);
    }
}