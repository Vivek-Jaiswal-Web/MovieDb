import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Pagination from "../../components/Pagination/Pagination";
import "./Home.css";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  return (
    <>
      <div className="Home-Popular">
        <div className="center">
          <h1>Popular Movies</h1>
        </div>
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <Pagination page={page} setPage={setPage} />
      </div>
    </>
  );
}

export default Home;
