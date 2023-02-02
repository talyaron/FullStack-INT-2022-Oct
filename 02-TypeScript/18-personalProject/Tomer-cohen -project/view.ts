const userReview = document.querySelector(".userReview");

function getReviewsFromStorage():UserReview[] | undefined {
    try {
      //get items from storage
      const reviewsString = localStorage.getItem("reviews");
      if (!reviewsString) throw new Error("Couldn't find reviews in storage");
  
      //convert to array
      const reviews = JSON.parse(reviewsString);
      return reviews;
      console.log(reviews);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }