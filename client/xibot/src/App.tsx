// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react";
import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import WinBox from "react-winbox";
// import { WinBoxWrapper } from "./Componets/WinBoxWrapper";
// import navbar from "./Componets/Navbar";
// import axios from "axios";
// import sample from './repair-  services-robot-future-live-wallpaper-1.mp4';
import BackGroundVid from "./Componets/BackGroundVid";
import Navbar from "./Componets/Navbar";
import IconsApps from "./Componets/IconApps";
import "../public/Font/FreePixel.ttf";
// import { RightClickMenu } from "./Componets/RightClickMenu/RightClickMenu";
// import { Test } from "./Componets/Test";
import CustomMenu from "./Componets/CustomMenu";
import BackgroundSelector from "./Componets/BackgroundSelector";
import FlyingPlaneComponent from "./Componets/ahmedPlane";

function App() {
  return (
    <div className="p-0 m-0 place-items-start items-start align-baseline">
      {/* <CustomMenu items={[]}/> */}
      <BackGroundVid sample="src/aIPz2Bh.gif" />
      <Navbar />
      <IconsApps user={undefined} />
      <CustomMenu items={["Abort C:/"]} />
    </div>
  );
}

export default App;
