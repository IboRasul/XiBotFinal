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
      {/* <BackgroundColorProvider>
        <BackgroundColorSelector /> */}

      <CustomMenu items={[]} />
      <AnimeQuotePluginProvider>
        <BackGroundVid sample="https://i.pinimg.com/originals/cb/d7/0c/cbd70c9cacbcf6d767b5cdf1c5a8a62a.gif" />
        <Navbar
          handleGifSelect={function (gif: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        <IconsApps />
        <CustomMenu items={["Abort C:/"]} />
      </AnimeQuotePluginProvider>
      {/* </BackgroundColorProvider> */}
    </div>
  );
}

export default App;
