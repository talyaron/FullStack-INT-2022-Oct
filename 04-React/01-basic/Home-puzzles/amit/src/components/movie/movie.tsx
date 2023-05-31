import { FC, } from "react";
import "./movie.scss";
interface MovieProps {
  name: string;
  genre: string;
  minutes: number;
  img: string;
}



const Movie: FC<MovieProps> = ({ name, genre, minutes, img }) => {
  return (
    <div className="movie">
      <h2>{name}</h2>
      <p>{genre}</p>
      <p>{minutes} minutes</p>
      <img src = {img}></img>
    </div>
  );
};

export default Movie;