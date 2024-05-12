import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import BackGroundVid from "./Componets/BackGroundVid";
import Navbar from "./Componets/Navbar";
import IconsApps from "./Componets/IconApps";
import "../public/Font/FreePixel.ttf";
import CustomMenu from "./Componets/CustomMenu";

import { AnimeQuotePluginProvider } from "./contexts/AnimeContext";
import { MoviesPluginProvider } from "./contexts/MoviePlugins";
import { CountryPluginProvider } from "./contexts/CountriesPlugin";

function App() {
  return (
    <div className="p-0 m-0 place-items-start items-start align-baseline">
      <CustomMenu items={[]} />
      <CountryPluginProvider>
        <MoviesPluginProvider>
          <AnimeQuotePluginProvider>
            <BackGroundVid sample="https://i.pinimg.com/originals/8d/b7/46/8db746ea0f28bdd22eae8b3ee10ac16a.gif" />
            <Navbar />
            <IconsApps />
          </AnimeQuotePluginProvider>
        </MoviesPluginProvider>
      </CountryPluginProvider>
      {/* </BackgroundColorProvider> */}
    </div>
  );
}

export default App;
