import { useEffect, useState } from "react";
import "./App.css";
import searcIcon from "./search.svg";
//7b2a4adc
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=7b2a4adc";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [serachTerm, setSerachTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="search for movies"
          value={serachTerm}
          onChange={(e) => setSerachTerm(e.target.value)}
        />
        <img
          src={searcIcon}
          alt="search"
          onClick={() => searchMovies(serachTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};
export default App;
