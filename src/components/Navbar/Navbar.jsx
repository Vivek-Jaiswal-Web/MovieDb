import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
      setQuery("");
    }
  };

  return (
    <>
    <div className="Navbar-container">
      <nav className="navbar">
        <div className="navbar-left">
          <NavLink to="/" className="navbar-brand">MovieDb</NavLink>
        </div>
        <form onSubmit={handleSearch}>
          <div className="navbar-right">
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Popular</NavLink>
              </li>
              <li>
                <NavLink to="/top-rated" className={({ isActive }) => isActive ? "active" : ""}>Top Rated</NavLink>
              </li>
              <li>
                <NavLink to="/upcoming" className={({ isActive }) => isActive ? "active" : ""}>Upcoming</NavLink>
              </li>
            </ul>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                id="movie-name"
              />
              <button type="submit" className="search-btn">Search</button>
            </div>
          </div>
        </form>
      </nav>
    </div>
    </>
  );
}

export default Navbar;
