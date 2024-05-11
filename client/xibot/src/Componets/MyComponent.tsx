// MyComponent.tsx
import React from "react";
import { useBackgroundColor } from "./BackgroundColor";

const MyComponent = () => {
  const { backgroundColor } = useBackgroundColor();

  return (
    <div style={{ backgroundColor }}>
      <h2>This is My Component</h2>
      <p>This component has the background color selected by the user.</p>
    </div>
  );
};

export default MyComponent;
