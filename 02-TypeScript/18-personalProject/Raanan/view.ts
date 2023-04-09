// view.ts
import { Movie, MovieList } from "./model";

// Displays the movie list on the page by updating the innerHTML of the `movieListElement` and adding click event listeners to the ranking buttons in the `rankingBar`.
export function displayMovieList(MovieList: Movie[], rankingBar: HTMLElement, movieListElement: HTMLElement): void {
  try {
    // Clears the current content of the `movieListElement`.
    movieListElement.innerHTML = "";

    // Adds the movie elements to the `movieListElement`.
    for (const movie of MovieList) {
      const movieElement: any = createMovieElement(movie);
      movieListElement.appendChild(movieElement);
    }

    // Adds click event listeners to the ranking buttons in the `rankingBar`.
    const rankingElements = rankingBar.querySelectorAll("button");
    for (const rankingElement of rankingElements) {
      rankingElement.addEventListener("click", handleRankingButtonClick(MovieList, rankingBar, movieListElement));
    }
  } catch (error) {
    console.error("Error displaying movie list:", error);
  }
}


// Creates a HTML element for a single movie
export function createMovieElement(movie: Movie): HTMLElement | null {
  try {
    // Create the main movie container element
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    // Create the poster element and set its attributes
    const posterElement = document.createElement("img");
    posterElement.src = movie.poster;
    posterElement.alt = `Poster for ${movie.name}`;
    movieElement.appendChild(posterElement);

    // Create the title element and set its inner text
    const titleElement = document.createElement("h3");
    titleElement.innerText = movie.name;
    movieElement.appendChild(titleElement);

    // Create the description element and set its inner text
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = movie.description;
    movieElement.appendChild(descriptionElement);

    // Create the ranking element and set its inner text
    const rankingElement = document.createElement("p");
    rankingElement.innerText = `Ranking: ${movie.ranking}`;
    movieElement.appendChild(rankingElement);

    return movieElement;
  } catch (error) {
    console.error("Error creating movie element:", error);
    return null;
  }
}


// Creates a HTML element that represents the entire movie list
export function createMovieListElement(movies: Movie[]): HTMLElement | null {
  try {
    // Create a div element to represent the movie list
    const movieListElement = document.createElement("div");
    movieListElement.id = "movie-list";

    // Loop through each movie in the list
    for (const movie of movies) {
      // Create a HTML element for each movie
      const movieElement = createMovieElement(movie);
      if (!movieElement) {
        return null;
      }

      // Append the movie element to the movie list element
      movieListElement.appendChild(movieElement);
    }

    // Return the movie list element
    return movieListElement;

  } catch (error) {
    // Log an error message if something goes wrong
    console.error("Error creating movie list element:", error);
    return null;
  }
}

// Handles the ranking button click event and updates the movie ranking
export function handleRankingButtonClick(
  movieList: Movie[],
  rankingBar: HTMLElement,
  movieListElement: HTMLElement
): (event: Event) => void {
  return function (event: Event) {
    try {
      // Get the target element that was clicked
      const target = event.target as HTMLElement;
      // Get the movie id from the target element's data-movie-id attribute
      const movieIdString = target.getAttribute("data-movie-id");


      // Validate that movie id string is a valid number
      if (!movieIdString || isNaN(Number(movieIdString))) {
        console.error("Error: Invalid movie id.");
        return;
      }

      // Convert the movie id string to a number
      const movieId = Number(movieIdString);

      // Prompt the user to enter a new ranking
      const newRankingString = prompt("Enter new ranking:");

      // Validate that the new ranking string is a valid number
      if (!newRankingString || isNaN(Number(newRankingString))) {
        alert("Invalid ranking value. Please enter a number.");
        return;
      }

      // Convert the new ranking string to a number
      const newRanking = Number(newRankingString);

      // Find the movie in the list
      const movie = movieList.find(movie => movie.id.toString() === movieId.toString());
      if (!movie) {
        console.error("Error: Could not find movie in list.");
        return;
      }
      // Update the movie's ranking
      movie.ranking = newRanking;

      // Redisplay the movie list
      displayMovieList(movieList, rankingBar, movieListElement);
    } catch (error) {
      console.error("Error handling ranking button click:", error);
    }

  };

}

// reviews.ts----------------------------------------------------------------

// Import the array of review objects from the Model
import { reviews } from "./Model";

// Get a reference to the element that will display the reviews
const reviewList = document.querySelector(".review-list") as HTMLElement;

// Loop through the array of reviews and generate the HTML for each one
reviews.forEach(review => {
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");

  const titleElement = document.createElement("h3");
  titleElement.textContent = review.title;
  reviewElement.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = review.description;
  reviewElement.appendChild(descriptionElement);

  const usernameElement = document.createElement("p");
  usernameElement.textContent = review.username;
  reviewElement.appendChild(usernameElement);
});
