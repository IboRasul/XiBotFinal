/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode, useContext, useState } from "react";

const MovieQoutsPluginContext = React.createContext(true);
const MoviesPluginContextUpdate = React.createContext(() => {});

export function useMoviesPlugin() {
  return useContext(MovieQoutsPluginContext);
}

export function useMoviesPluginUpdate() {
  return useContext(MoviesPluginContextUpdate);
}
interface MoviesPluginProviderProps {
  children: ReactNode;
}
export function MoviesPluginProvider({ children }: MoviesPluginProviderProps) {
  const [isMovieApiActive, toggleMoviesApi] = useState(true);

  function toggleMoviesPlugin() {
    toggleMoviesApi((prevIsMoviesPropsActive) => !prevIsMoviesPropsActive);
  }

  return (
    <MovieQoutsPluginContext.Provider value={isMovieApiActive}>
      <MoviesPluginContextUpdate.Provider value={toggleMoviesPlugin}>
        {children}
      </MoviesPluginContextUpdate.Provider>
    </MovieQoutsPluginContext.Provider>
  );
}
