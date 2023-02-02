function getReviewsFromStorage():UserReview[] | undefined {
    try {
      //get items from storage
      const reviewsString = localStorage.getItem("reviews");
      if (!reviewsString) throw new Error("Couldn't find items in storage");
  
      //convert to array
      const reviews = JSON.parse(reviewsString);
      return reviews;
    //   console.log(reviews);
    } catch (error) {
    //   console.error(error);
      return undefined;
    }
  }


  function renderBookOptions(){
    try {
      if(!books) throw new Error("Couldnt find books");

      const optionsHTML = books.map(book=>`<option value=${book.uid}>${book.name}</option>`)
      return `<select name="bookId">${optionsHTML}</select>`
      
    } catch (error) {
    //   console.error(error);
      return '';
    }
  }
  