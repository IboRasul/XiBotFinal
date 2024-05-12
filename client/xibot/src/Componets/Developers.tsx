import { useState } from "react";

import WinBox from "react-winbox";
import { DonateHolan, DonateAhmed, DonateSava, DonateIbo } from "./donatePage";

export default function Developers() {
  const [winBoxStates, setWinBoxStates] = useState({
    winbox12: false,
    winbox13: false,
    winbox14: false,
    winbox15: false,
  });

  const openWinBox = (title: string) => {
    setWinBoxStates((prevStates) => ({ ...prevStates, [title]: true }));
  };

  const closeWinBox = (title: string) => {
    setWinBoxStates((prevStates) => ({ ...prevStates, [title]: false }));
  };

  return (
    <>
      <img
        src="public/gif/Computer-screen-code-glitch-animation-gif-background-free.gif"
        alt=""
        className="absolute -z-10 w-full h-full bg-cover object-cover"
      />
      <div className="">
        <ul className="z-10 grid grid-cols-2 gap-4">
          <li>
            <div className="flex flex-col items-center justify-center">
              <div className="backdrop-blur m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                <img
                  src="public/images/Holan.jpg"
                  alt=""
                  className="h-13 w-22"
                />
                <label
                  htmlFor=""
                  className="text-white flex align-middle justify-center"
                >
                  Holan
                </label>
              </div>

              <button
                onClick={() => openWinBox("winbox12")}
                className="bg-transparent"
              >
                {winBoxStates["winbox12"] && (
                  <WinBox
                    title="Donate"
                    width={550}
                    height={590}
                    x={100}
                    y={50}
                    noResize={false}
                    background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                    onClose={() => closeWinBox("winbox12")}
                  >
                    <DonateHolan />
                  </WinBox>
                )}
                <div className="backdrop-blur   drop-shadow-lg shadow-2xl text-gray-500  ">
                  <label
                    htmlFor=""
                    className="text-white flex align-middle justify-center"
                  >
                    Donate
                  </label>
                </div>
              </button>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center justify-center">
              <div className="backdrop-blur m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                <img
                  src="public/images/Ahmed.jpg"
                  alt=""
                  className="h-13 w-22"
                />
                <label
                  htmlFor=""
                  className="text-white flex align-middle justify-center"
                >
                  Ahmed
                </label>
              </div>

              <button
                onClick={() => openWinBox("winbox13")}
                className="bg-transparent"
              >
                {winBoxStates["winbox13"] && (
                  <WinBox
                    title="Donate"
                    width={550}
                    height={590}
                    x={100}
                    y={50}
                    noResize={false}
                    background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                    onClose={() => closeWinBox("winbox13")}
                  >
                    <DonateAhmed />
                  </WinBox>
                )}
                <div className="backdrop-blur   drop-shadow-lg shadow-2xl text-gray-500  ">
                  <label
                    htmlFor=""
                    className="text-white flex align-middle justify-center"
                  >
                    Donate
                  </label>
                </div>
              </button>
            </div>
          </li>

          <li>
            <div className="flex flex-col items-center justify-center">
              <div className="backdrop-blur m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                <img
                  src="https://i.pinimg.com/originals/23/17/14/231714e953b3482067337f40c7f8af7f.gif"
                  alt=""
                  className="h-32 w-32"
                />
                <label
                  htmlFor=""
                  className="text-white flex align-middle justify-center"
                >
                  Sava
                </label>
              </div>

              <button
                onClick={() => openWinBox("winbox14")}
                className="bg-transparent"
              >
                {winBoxStates["winbox14"] && (
                  <WinBox
                    title="Donate"
                    width={550}
                    height={590}
                    x={100}
                    y={50}
                    noResize={false}
                    background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                    onClose={() => closeWinBox("winbox14")}
                  >
                    <DonateSava />
                  </WinBox>
                )}
                <div className="backdrop-blur   drop-shadow-lg shadow-2xl text-gray-500  ">
                  <label
                    htmlFor=""
                    className="text-white flex align-middle justify-center"
                  >
                    Donate
                  </label>
                </div>
              </button>
            </div>
          </li>

          <li>
            <div className="flex flex-col items-center justify-center">
              <div className="backdrop-blur m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                <img
                  src="https://i.pinimg.com/originals/23/17/14/231714e953b3482067337f40c7f8af7f.gif"
                  alt=""
                  className="h-32 w-32"
                />
                <label
                  htmlFor=""
                  className="text-white flex align-middle justify-center"
                >
                  ibo
                </label>
              </div>

              <button
                onClick={() => openWinBox("winbox15")}
                className="bg-transparent"
              >
                {winBoxStates["winbox15"] && (
                  <WinBox
                    title="Donate"
                    width={550}
                    height={590}
                    x={100}
                    y={50}
                    noResize={false}
                    background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                    onClose={() => closeWinBox("winbox14")}
                  >
                    <DonateIbo />
                  </WinBox>
                )}
                <div className="backdrop-blur   drop-shadow-lg shadow-2xl text-gray-500  ">
                  <label
                    htmlFor=""
                    className="text-white flex align-middle justify-center"
                  >
                    Donate
                  </label>
                </div>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
