import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./SearchResults.css";

const API_KEY = "c45a857c193f6302f2b5061c3b85e743";

function SearchResults() {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, [query]);

  return (
    <>
      <div className="SearchResults">
        <h1 className="search-font">Search Results for "{query}"</h1>
        <div className="movie-grid">
          {movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
