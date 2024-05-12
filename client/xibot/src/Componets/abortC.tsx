import React, { useState, useEffect } from "react";

const AbortC: React.FC = () => {
  const [showBSOD, setShowBSOD] = useState<boolean>(false);

  useEffect(() => {
    const processInterval = () => {
      setTimeout(process, Math.random() * (1000 - 500) + 500);
    };

    const process = () => {
      let percentage = Math.random() * 10;
      setShowBSOD((prevShowBSOD) => {
        if (prevShowBSOD) {
          percentage += 10; // If BSOD is already showing, increase the percentage
        }
        if (percentage > 100) {
          percentage = 100;
        }
        return percentage === 100; // Show BSOD when percentage reaches 100
      });
      processInterval();
    };

    processInterval();
  }, []);

  return (
    <>
      {showBSOD && (
        <div
          id="page"
          style={{
            fontFamily:
              'Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif',
            background: "#3973aa",
            color: "#fefeff",
            height: "100vh",
            margin: 0,
            display: "table",
            width: "70%",
            fontSize: "1.9vw",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-10px",
          }}
        >
          <div
            id="container"
            style={{ display: "table-cell", verticalAlign: "middle" }}
          >
            <h1 style={{ fontSize: "6.5em", marginBottom: "10px" }}>:(</h1>
            <h2 style={{ fontSize: "1.5em" }}>
              Your PC ran into a problem and needs to restart. We're just
              collecting some error info, and then we'll restart for you.
            </h2>
            <h2 style={{ fontSize: "1.5em" }}>
              <span id="percentage">0</span>% complete
            </h2>
            <div
              id="details"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                paddingTop: "10px",
              }}
            >
              <div id="qr">
                <div
                  id="image"
                  style={{ background: "white", padding: "5px", lineHeight: 0 }}
                >
                  <img
                    src="http://xontab.com/experiments/Javascript/BSOD/qr.png"
                    alt="QR Code"
                    style={{ width: "9.8em", height: "9.8em" }}
                  />
                </div>
              </div>
              <div
                id="stopcode"
                style={{ paddingLeft: "10px", flex: "1 1 auto" }}
              >
                <h4 style={{ fontSize: "1.4em", lineHeight: "1.5em" }}>
                  For more information about this issue and possible fixes,
                  visit
                  <br />
                  http://xontab.com/stopcode
                </h4>
                <h5 style={{ lineHeight: "1.1em", fontSize: "1.3em" }}>
                  If you call a support person, give them this info:
                  <br />
                  Stop Code: 404 PAGE NOT FOUND
                </h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AbortC;
