import { useState } from "react";
import donatePage from "./donatePage";
import WinBox from "react-winbox";
import { DonateHolan, DonateAhmed, DonateSava, DonateIbo } from "./donatePage";

export default function Developers() {
  const handleButtonClick = (link: string) => {
    window.location.href = link;
  };

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
                  src="https://i.pinimg.com/originals/91/66/6e/91666e9a153d15052a86a55903569c89.gif"
                  alt=""
                  className="h-32 w-32"
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
                <div className="w-32 h-32">
                  <img
                    src="https://i.pinimg.com/564x/c2/99/f8/c299f80407ef02701b4525c490eb4a51.jpg"
                    alt=""
                    className="h-32 w-32"
                  />
                </div>
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
                  src="https://i.pinimg.com/564x/19/18/0a/19180a35be4561ed7bde1a61e85046ee.jpg"
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
