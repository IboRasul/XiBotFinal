import { SetStateAction, useState } from "react";
import BackGroundVid from "./BackGroundVid";
function BackgroundSelector() {
  // Define state to manage the selected background image
  const [selectedBackground, setSelectedBackground] = useState("src/1.jpg");

  // Function to handle background selection
  const handleBackgroundChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedBackground(event.target.value);
  };

  // Function to handle button click to change background
  // const handleChangeBackground = (sample) => {};

  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="backdrop-blur bg-white/0 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-fit p-5 flex flex-col justify-center align-middle">
        <h1 className="text-lg align-middle justify-center flex">
          Background Selector
        </h1>

        {/* Display selected background image */}

        <div>
          <BackGroundVid sample={selectedBackground} />
        </div>

        {/* Button to choose background */}
        <div className="flex justify-center align-middle">
          <button
            className="backdrop-blur bg-black/40 m-5 rounded-3xl drop-shadow-lg shadow-2xl text-gray-100 w-min p-5 flex-col align-middle justify-center"
            // onClick={() => handleChangeBackground(selectedBackground)}
            // onChange={handleBackgroundChange}
          >
            Change Background
          </button>
        </div>

        {/* Dropdown to select background */}
        <select
          name="backgroundSelect"
          id="backgroundSelect"
          className="rounded-lg text-black"
          onChange={handleBackgroundChange} // Call handleBackgroundChange on change event
        >
          <option value="src/1.jpg">🤖🤖🤖</option>
          <option value="src/pixel.gif">background 2</option>
          <option value="src/aIPz2Bh.gif">background 3</option>
        </select>
      </div>
    </div>
  );
}

export default BackgroundSelector;
