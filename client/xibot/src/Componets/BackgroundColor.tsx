import { createContext, useContext, useState } from "react";

// Create a context for the background color
const BackgroundColorContext = createContext();

// Custom hook to access the background color context
export const useBackgroundColor = () => useContext(BackgroundColorContext);

// BackgroundColorProvider component to manage the background color state
export const BackgroundColorProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // Default color is white

  // Function to update the background color
  const changeBackgroundColor = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <BackgroundColorContext.Provider
      value={{ backgroundColor, changeBackgroundColor }}
    >
      {children}
    </BackgroundColorContext.Provider>
  );
};

// Example usage:
// Wrap your app with BackgroundColorProvider in your root component
// Use useBackgroundColor hook in any component where you want to access or change the background color

// Example component to demonstrate usage
const BackgroundColorSelector = () => {
  const { backgroundColor, changeBackgroundColor } = useBackgroundColor();

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    changeBackgroundColor(newColor);
  };

  return (
    <div>
      <label htmlFor="colorPicker">Select background color:</label>
      <input
        type="color"
        id="colorPicker"
        value={backgroundColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default BackgroundColorSelector;
