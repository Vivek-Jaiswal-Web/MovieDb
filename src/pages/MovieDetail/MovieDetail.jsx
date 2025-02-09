import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.css";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    // Fetch movie details
    fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie details:", error));

    // Fetch movie cast details
    fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then((res) => res.json())
      .then((data) => setCast(data.cast.slice(0, 10))) // Show top 10 cast members
      .catch((error) => console.error("Error fetching cast details:", error));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <>
      <div className="movie-detail">
        <div className="movie-header">
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {movie.vote_average.toFixed(1)}
            </p>
            <p>{movie.overview}</p>
          </div>
        </div>

        <h2>Cast</h2>
        <div className="cast-list">
          {cast.map((actor) => (
            <div key={actor.id} className="cast-card">
              <img
                src={`${IMAGE_BASE_URL}${actor.profile_path}`}
                alt={actor.name}
              />
              <p>
                {actor.name} as {actor.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
