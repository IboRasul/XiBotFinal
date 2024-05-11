import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import BackGroundVid from "./Componets/BackGroundVid";
import Navbar from "./Componets/Navbar";
import IconsApps from "./Componets/IconApps";
import "../public/Font/FreePixel.ttf";
import CustomMenu from "./Componets/CustomMenu";

import { AnimeQuotePluginProvider } from "./contexts/PluginContext";

function App() {
  return (
    <div className="p-0 m-0 place-items-start items-start align-baseline">
      {/* <CustomMenu items={[]}/> */}
      <AnimeQuotePluginProvider>
        <BackGroundVid sample="src/aIPz2Bh.gif" />
        <Navbar />
        <IconsApps />
        <CustomMenu items={["Abort C:/"]} />
      </AnimeQuotePluginProvider>
    </div>
  );
}

export default App;
