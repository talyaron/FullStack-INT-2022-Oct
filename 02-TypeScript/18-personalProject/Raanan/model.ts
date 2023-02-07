// model.ts
export interface Review {
  title: string;
  description: string;
  username: string;
  id: number;
}

// Define an array of review objects
export const reviews: Review[] = [
  {
    title: "The Matrix",
    description: "An action-packed sci-fi classic!",
    username: "John Doe",
    id: 1
  },
  {
    title: "Inception",
    description: "A mind-bending thriller!",
    username: "Jane Doe",
    id: 2
  }
];

export class MovieList {
  public static movies: Movie[] = [];

  // Adjust the ranking of a movie
  static adjustRanking(movieId: string, amount: number) {
    try {
      const movieIndex = this.movies.findIndex((movie) => movie.id === movieId);
      if (movieIndex === -1) {
        throw new Error(`Movie with id ${ movieId } not found`);
      }
      this.movies[movieIndex].ranking += amount;
    } catch (error) {
      console.error(error);
    }
  }

  // Sort the movies in the list by either ranking or name
  static sortMovies(sortBy: "ranking" | "name" = "ranking") {
    try {
      if (sortBy === "ranking") {
        this.movies.sort((a, b) => b.ranking - a.ranking);
      } else if (sortBy === "name") {
        this.movies.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Add a movie to the list
  static addMovie(movie: Movie) {
    try {
      this.movies.push(movie);
    } catch (error) {
      console.error(error);
    }
  }

  // Get the current list of movies
  static getMovies(): Movie[] {
    try {
      return this.movies;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export class Movie {
  // Unique identifier for the movie
  id: string;
  // Title of the movie
  name: string;
  // Description of the movie
  description: string;
  // Ranking of the movie
  ranking: number;
  // URL of the movie poster
  poster: string;

  /**
  
      Constructor for the Movie class
      @param id Unique identifier for the movie
      @param name Title of the movie
      @param description Description of the movie
      @param ranking Ranking of the movie
      @param poster URL of the movie poster
      */
  constructor(id: string, name: string, description: string, ranking: number, poster: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ranking = ranking;
    this.poster = poster;
  }
}

