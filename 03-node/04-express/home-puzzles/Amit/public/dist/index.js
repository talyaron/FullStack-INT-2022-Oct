var slideIndex = 1;
showSlides(slideIndex);
fetch("/portfolio-index")
    .then(function (response) { return response.json(); })
    .then(function (result) {
    try {
        console.log("Success:", result);
    }
    catch (error) {
        console.error("Error:", error);
    }
});
