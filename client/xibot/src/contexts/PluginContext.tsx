import React, {useContext , useState } from 'react'

const AnimeQuotePluginContext = React.createContext(true);
const AnimeQuotePluginContextUpdate = React.createContext(()=>{});

export function useAnimeQuotePlugin() {
    return useContext(AnimeQuotePluginContext)
}

export function useAnimeQuotePluginUpdate() {
    return useContext(AnimeQuotePluginContextUpdate)
}

export function AnimeQuotePluginProvider({ children }) {
    const [isAnimeQuoteActive , toggleAnimeQuote]=useState(true)

    function toggleAnimeQuotePlugin(){
        toggleAnimeQuote(prevIsAnimeQuoteActive=> !prevIsAnimeQuoteActive)
    }
    
    return( 
            <AnimeQuotePluginContext.Provider value={isAnimeQuoteActive}>
                <AnimeQuotePluginContextUpdate.Provider value={toggleAnimeQuotePlugin}>
                    {children}
                </AnimeQuotePluginContextUpdate.Provider>
            </AnimeQuotePluginContext.Provider>
        )
}           
