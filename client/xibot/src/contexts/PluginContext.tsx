/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode, useContext, useState } from "react";

const AnimeQuotePluginContext = React.createContext(true);
const AnimeQuotePluginContextUpdate = React.createContext(() => {});

export function useAnimeQuotePlugin() {
  return useContext(AnimeQuotePluginContext);
}

export function useAnimeQuotePluginUpdate() {
  return useContext(AnimeQuotePluginContextUpdate);
}
interface AnimeQuotePluginProviderProps {
  children: ReactNode;
}
export function AnimeQuotePluginProvider({
  children,
}: AnimeQuotePluginProviderProps) {
  const [isAnimeQuoteActive, toggleAnimeQuote] = useState(true);

  function toggleAnimeQuotePlugin() {
    toggleAnimeQuote((prevIsAnimeQuoteActive) => !prevIsAnimeQuoteActive);
  }

  return (
    <AnimeQuotePluginContext.Provider value={isAnimeQuoteActive}>
      <AnimeQuotePluginContextUpdate.Provider value={toggleAnimeQuotePlugin}>
        {children}
      </AnimeQuotePluginContextUpdate.Provider>
    </AnimeQuotePluginContext.Provider>
  );
}
