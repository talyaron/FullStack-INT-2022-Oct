let slideIndex = 1;
showSlides(slideIndex);



fetch("/portfolio-index")
    .then((response) => response.json())
    .then((result) => {
            try {
                console.log("Success:", result);
            } catch (error) {
                console.error("Error:", error);
            }
        }
    );

    
  