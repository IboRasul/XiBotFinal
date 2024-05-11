import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div>
      <h1>Movies</h1>
      <div className="movie-list">
        {movies.map((movie, index) => (
          <div key={index} className="movie">
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Vote Average: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
