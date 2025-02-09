import { Link } from "react-router-dom";
import "./MovieCard.css";

const IMAGE_BASE_URL = `https://image.tmdb.org/t/p/w500`;

function MovieCard({ movie }) {
  return (
    <>
      <div className="movie-card">
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>⭐ Rating: {movie.vote_average.toFixed(1)}</p>
        <Link to={`/movie/${movie.id}`}>View Details</Link>
      </div>
    </>
  );
}

export default MovieCard;
