// control.ts
import { MovieList } from "./model";
import { createMovieElement, createMovieListElement } from "./view";

// Function to adjust the ranking of a movie by its ID
// If the adjustment fails, the error message is logged to the console
export function adjustRanking(movieId: string) {
    try {
        MovieList.adjustRanking(movieId, 1);
        updateMovieListDisplay();
    } catch (error) {
        console.error(error);
    }
}

// Function to sort the movie list by either ranking or name
// If the sorting fails, the error message is logged to the console
export function sortMovies(sortBy: "ranking" | "name") {
    try {
        MovieList.sortMovies(sortBy);
        updateMovieListDisplay();
    } catch (error) {
        console.error(error);
    }
}

// Function to update the display of the movie list
// If the update fails, the error message is logged to the console
function updateMovieListDisplay() {
    try {
        // Selecting the movie list element from the DOM
        const movieListElement: Element | null = document.querySelector("#movie-list");
        // Clearing the inner HTML of the movie list element
        movieListElement.innerHTML = "";
        // Iterating over each movie in the movie list
        for (const movie of MovieListType.movies) {
            // Creating a movie element for each movie
            const movieElement = createMovieElement(movie);
            // Appending the movie element to the movie list element
            movieListElement.appendChild(movieElement);
        }
    } catch (error) {
        console.error(error);
    }
}

//  reviews.html----------------------------------------------------------------

// Define the functions that will handle the like and unlike buttons
export function likeReview(id: number) {
    console.log(`Like review with ID ${id}`);
}

export function unlikeReview(id: number) {
    console.log(`Unlike review with ID ${id}`);
}