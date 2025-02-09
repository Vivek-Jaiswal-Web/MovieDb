import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import TopRated from "./pages/TopRated/TopRated";
import Upcoming from "./pages/Upcoming/Upcoming";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import SearchResults from "./pages/SearchResults/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // Default route
      { path: "top-rated", element: <TopRated /> },
      { path: "upcoming", element: <Upcoming /> },
      { path: "movie/:id", element: <MovieDetail /> },
      { path: "search/:query", element: <SearchResults /> },
    ],
  },
]);

export default router;
