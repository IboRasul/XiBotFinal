const MovieList = ({ movies }) => {
  return (
    <div
      className="bg-cover bg-center text-black p-8"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/originals/8b/13/2c/8b132c13e4378b02e401cd4c6968ef75.gif")',
      }}
    >
      <h1 className="text-3xl font-bold mb-8">Movies</h1>
      <div className="grid grid-cols-3 gap-8">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
              <p className="text-gray-700">{movie.overview}</p>
              <p className="text-gray-700 mt-2">
                Release Date: {movie.release_date}
              </p>
              <p className="text-gray-700">
                Vote Average: {movie.vote_average}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
