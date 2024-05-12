/* eslint-disable react-refresh/only-export-components */
import React, { ReactNode, useContext, useState } from "react";

const CountryPluginContext = React.createContext(true);
const CountryPluginContextUpdate = React.createContext(() => {});

export function useCountryPlugin() {
  return useContext(CountryPluginContext);
}

export function useCountryPluginUpdate() {
  return useContext(CountryPluginContextUpdate);
}
interface CountryPluginProviderProps {
  children: ReactNode;
}
export function CountryPluginProvider({
  children,
}: CountryPluginProviderProps) {
  const [isCountryApiActive, toggleCountryApi] = useState(true);

  function toggleCountryPlugin() {
    toggleCountryApi((prevIsCountryPropsActive) => !prevIsCountryPropsActive);
  }

  return (
    <CountryPluginContext.Provider value={isCountryApiActive}>
      <CountryPluginContextUpdate.Provider value={toggleCountryPlugin}>
        {children}
      </CountryPluginContextUpdate.Provider>
    </CountryPluginContext.Provider>
  );
}
