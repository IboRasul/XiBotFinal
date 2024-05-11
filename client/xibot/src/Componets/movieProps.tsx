import { useState, useEffect } from "react";
import MovieList from "./MovieList"; // Assuming the MovieList component is in a separate file

const MovieProps = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWQyMGVlZjQ0YTBkMGVjZWRhN2E1MGY1NzE1ZWMzYSIsInN1YiI6IjY0NTdkYzk0NmM4NDkyMDBlMzVkMGVlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6m3B7Tq8h0pSPr8tP8bgGKvYI4l9prKg98AJjdcsgr8",
          },
        };
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          options
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieProps;
