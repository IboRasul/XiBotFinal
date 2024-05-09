import "winbox/dist/css/winbox.min.css";
import "winbox/dist/css/themes/modern.min.css";
import WinBox from "react-winbox";
import BackGroundVid from "./dump/BackGroundVid";
import SignUpForm from "./SignUpForm";
import AI from "../../Pages/AI";
// import Music from "./Music";
// import { Link, Head, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useState, PropsWithChildren, ReactNode, useEffect } from "react";
import AudioPlayer from "./Music.tsx";
import FlyingPlaneHTML from "./ahmedPlane.tsx";
import Donate from "./donatePage.tsx";

function IconsApps({
  user,
  header,
  children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  const [winBoxStates, setWinBoxStates] = useState({
    winbox0: false,
    winbox1: false,
    winbox2: false,
    winbox3: false,
    winbox4: false,
    winbox5: false,
    winbox9: false,
  });

  const openWinBox = (title: string) => {
    setWinBoxStates((prevStates) => ({ ...prevStates, [title]: true }));
  };

  const closeWinBox = (title: string) => {
    setWinBoxStates((prevStates) => ({ ...prevStates, [title]: false }));
  };

  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-2 overflow-x-hidden">
      {/* first Coloum */}
      <div className="col-span-1 row-span-1">
        <div>
          <button
            onClick={() => openWinBox("winbox0")}
            className="bg-transparent"
          >
            {winBoxStates["winbox0"] && (
              <WinBox
                title="AI chat"
                width={350}
                height={497}
                x={100}
                y={50}
                noResize={true}
                background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                onclose={() => closeWinBox("winbox0")}
              >
                <AI />
              </WinBox>
            )}
            <div className="backdrop-blur  m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3 ">
              <img
                src="https://i.pinimg.com/originals/73/08/b9/7308b9f96595bfa4ae5942be9cceea35.gif"
                alt=""
                className="w-full h-auto rounded"
                style={{ maxWidth: "100px" }}
              />

              <label className="text-white flex align-middle justify-center ">
                AI
              </label>
            </div>
          </button>
        </div>
        <div>
          <button
            onClick={() => openWinBox("winbox1")}
            className="bg-transparent"
          >
            {winBoxStates["winbox1"] && (
              <WinBox
                title="Music Player"
                width={350}
                height={290}
                x={100}
                y={50}
                noResize={true}
                background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                onClose={() => closeWinBox("winbox1")}
              >
                <AudioPlayer audioSrc={"public/musics/a.mp3"} />
              </WinBox>
            )}
            <div className="backdrop-blur  m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3 ">
              <img
                src="https://i.pinimg.com/originals/3d/f3/eb/3df3eb1714d898fdf69c621ea949b3a3.gif"
                alt=""
                className="w-full h-auto rounded"
                style={{ maxWidth: "100px" }}
                //?   becaus of this the icon is big in the class above
                //? bg-cover h-min w-min rounded
              />
              <label
                htmlFor=""
                className="text-white flex align-middle justify-center"
              >
                Music
              </label>
            </div>
          </button>
        </div>
        <div>
          <button
            onClick={() => openWinBox("winbox5")}
            className="bg-transparent"
          >
            {winBoxStates["winbox5"] && (
              <WinBox
                title="Radio"
                width={450}
                height={650}
                x={100}
                y={50}
                noResize={true}
                background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                onClose={() => closeWinBox("winbox5")}
              >
                <iframe src="https://holan-dev.me/radio.html"></iframe>
              </WinBox>
            )}

            <div className="backdrop-blur  m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500  p-3 justify-items-center ">
              <img
                src="https://i.gifer.com/WczZ.gif"
                alt=""
                className="w-full h-auto rounded  "
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />

              <label
                htmlFor=""
                className="text-white flex ali gn-middle justify-center"
              >
                Radio
              </label>
            </div>
          </button>
        </div>
        <div>
          <button
            onClick={() => openWinBox("winbox2")}
            className="bg-transparent"
          >
            {winBoxStates["winbox2"] && (
              <WinBox
                title="Add Music"
                width={350}
                height={290}
                x={100}
                y={50}
                noResize={true}
                background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                onClose={() => closeWinBox("winbox2")}
              >
                {/* <BackGroundVid /> */}
                <SignUpForm />
              </WinBox>
            )}
            <div className="backdrop-blur  m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500  p-3">
              <img
                src="https://i.pinimg.com/originals/79/8d/e4/798de415648b7a715c90965e7e73dbb1.gif"
                alt=""
                className="w-full h-auto rounded"
                style={{ maxWidth: "100px" }}
              />
              <label
                htmlFor=""
                className="text-white flex ali gn-middle justify-center"
              >
                Music Edit
              </label>
            </div>
          </button>
        </div>
        <div>
          <button
            onClick={() => openWinBox("winbox3")}
            className="bg-transparent"
          >
            {winBoxStates["winbox3"] && (
              <WinBox
                title="winbox3"
                width={350}
                height={497}
                x={100}
                y={50}
                noResize={true}
                background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                onClose={() => closeWinBox("winbox3")}
              >
                <BackGroundVid />
                <SignUpForm />
              </WinBox>
            )}
            <div className="backdrop-blur  m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
              <img
                src="https://i.pinimg.com/originals/1d/05/8a/1d058aa243c8d46cfa234372962cd674.gif"
                alt=""
                className="w-full h-auto rounded"
                style={{ maxWidth: "100px" }}
              />
              <label
                htmlFor=""
                className="text-white flex ali gn-middle justify-center"
              >
                Donate
              </label>
            </div>
          </button>
        </div>
      </div>
      {/* Second Coloum goes here  */}

      <div className="col-span-1 row-span-1"></div>
    </div>
  );
}

export default IconsApps;
