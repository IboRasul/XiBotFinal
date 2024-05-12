import React, { useState, useEffect } from "react";
import WinBox from "react-winbox";

import BackGroundVid from "./BackGroundVid";
import BackgroundSelector from "./BackgroundSelector";

interface CustomMenuProps {
  items: string[];
}

const CustomMenu: React.FC<CustomMenuProps> = ({ items }) => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [winBoxStates, setWinBoxStates] = useState({
    login0: false,
    win1: false,
  });
  const [showBSOD, setShowBSOD] = useState<boolean>(false);

  const openWinBox = (title: string) => {
    setWinBoxStates((prevStates) => ({ ...prevStates, [title]: true }));
  };

  const closeWinBox = (title: string) => {
    setWinBoxStates((prevStates) => ({ ...prevStates, [title]: false }));
  };

  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      setMenuVisible(true);
      setPosition({ top: event.clientY, left: event.clientX });
    };

    const handleDocumentClick = () => {
      setMenuVisible(false);
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const handleAbortCClick = () => {
    setShowBSOD(true);
  };

  return (
    <div>
      {menuVisible && (
        <div
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            background: "#fff",
            border: "1px solid #ccc",
            padding: "8px",
            boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.2)",
            color: "black",
          }}
        >
          {items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}

          <button
            onClick={handleAbortCClick}
            className="w-auto h-min font-mono"
          >
            Abort C:/
          </button>
          <br />
          <button
            onClick={() => openWinBox("login0")}
            className="w-auto h-min font-mono"
          >
            Change Background
          </button>
        </div>
      )}

      {winBoxStates["win1"] && (
        <WinBox
          title="Change Background"
          width={350}
          height={497}
          x={100}
          y={50}
          noResize={true}
          background="linear-gradient(90deg, rgba(135,91,128,1) 0%, rgba(59,106,218,1) 100%)"
          onClose={() => closeWinBox("win1")}
        >
          <BackGroundVid sample={undefined} />
          <BackgroundSelector />
        </WinBox>
      )}

      {showBSOD && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#0000FF",
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // Ensure BSOD is on top of everything
          }}
        >
          <div
            style={{
              fontSize: "3em",
              marginBottom: "20px",
              borderBottom: "2px solid #FFFFFF",
              paddingBottom: "10px",
            }}
          >
            :( Your PC ran into a problem and needs to restart.
          </div>
          <div>
            If you'd like to know more, you can search online later for this
            error: STOP: 0x0000000A
          </div>
          <div style={{ marginTop: "20px" }}>Press any key to continue...</div>
        </div>
      )}
    </div>
  );
};

export default CustomMenu;
