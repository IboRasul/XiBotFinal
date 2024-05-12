import { useState } from "react";

import WinBox from "react-winbox";

import { HexGLGame, SnakeGame } from "./games";

export default function GamesButton() {
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
        src="https://i.pinimg.com/originals/df/7c/46/df7c469606c2a5c9710f2d1ac79384c7.gif"
        alt=""
        className="absolute -z-10 w-full h-full bg-cover object-cover"
      />
      <div className="">
        <ul className="z-10 grid grid-cols-2 gap-4">
          <li>
            <div className="flex flex-col items-center justify-center">
              <div className="backdrop-blur m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                <img
                  src="https://i.pinimg.com/originals/c2/84/59/c28459c237af4ca11bdc4464ae29097b.gif"
                  alt=""
                  className="h-32 w-32"
                />
                <label
                  htmlFor=""
                  className="text-white flex align-middle justify-center"
                >
                  HexGL
                </label>
              </div>

              <button
                onClick={() => openWinBox("winbox12")}
                className="bg-transparent"
              >
                {winBoxStates["winbox12"] && (
                  <WinBox
                    title="HexGL"
                    width={550}
                    height={590}
                    x={100}
                    y={50}
                    noResize={false}
                    background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                    onClose={() => closeWinBox("winbox12")}
                  >
                    <HexGLGame />
                  </WinBox>
                )}
                <div className="backdrop-blur   drop-shadow-lg shadow-2xl text-gray-500  ">
                  <label
                    htmlFor=""
                    className="text-white flex align-middle justify-center"
                  >
                    Play
                  </label>
                </div>
              </button>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center justify-center">
              <div className="backdrop-blur m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                <img
                  src="https://i.pinimg.com/originals/5c/66/d7/5c66d76fd30351a5b6f7d3811c918e32.gif"
                  alt=""
                  className="h-32 w-32"
                />
                <label
                  htmlFor=""
                  className="text-white flex align-middle justify-center"
                >
                  Snake
                </label>
              </div>

              <button
                onClick={() => openWinBox("winbox13")}
                className="bg-transparent"
              >
                {winBoxStates["winbox13"] && (
                  <WinBox
                    title="Snake"
                    width={550}
                    height={590}
                    x={100}
                    y={50}
                    noResize={false}
                    background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                    onClose={() => closeWinBox("winbox13")}
                  >
                    <SnakeGame />
                  </WinBox>
                )}
                <div className="backdrop-blur   drop-shadow-lg shadow-2xl text-gray-500  ">
                  <label
                    htmlFor=""
                    className="text-white flex align-middle justify-center"
                  >
                    Play
                  </label>
                </div>
              </button>
            </div>
          </li>

          {/* <li>
            <div className="flex flex-col items-center justify-center">
              <div className="backdrop-blur m-4 rounded-3xl drop-shadow-lg shadow-2xl text-gray-500 p-3">
                <img
                  src="https://i.pinimg.com/564x/19/18/0a/19180a35be4561ed7bde1a61e85046ee.jpg"
                  alt=""
                  className="h-32 w-32"
                />
                <label
                  htmlFor=""
                  className="text-white flex align-middle justify-center"
                >
                  any
                </label>
              </div>

              <button
                onClick={() => openWinBox("winbox14")}
                className="bg-transparent"
              >
                {winBoxStates["winbox14"] && (
                  <WinBox
                    title="any"
                    width={550}
                    height={590}
                    x={100}
                    y={50}
                    noResize={false}
                    background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
                    onClose={() => closeWinBox("winbox14")}
                  ></WinBox>
                )}
                <div className="backdrop-blur   drop-shadow-lg shadow-2xl text-gray-500  ">
                  <label
                    htmlFor=""
                    className="text-white flex align-middle justify-center"
                  >
                    Play
                  </label>
                </div>
              </button>
            </div>
          </li> */}
        </ul>
      </div>
    </>
  );
}
