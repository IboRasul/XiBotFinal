import React from "react";
import "../../public/css/flying_plane.css";
import "../../public/images/above-plane.png";
import "../../public/images/cloud1.png";
import "../../public/images/cloud2.png";
import "../../public/images/cloud3.png";

const FlyingPlaneHTML: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <section className="sec">
          <div className="clouds">
            <img
              src="public/images/cloud1.png"
              style={{ "--i": 1 } as React.CSSProperties}
              className="img1"
              alt="Cloud 1"
            />
            <img
              src="public/images/cloud2.png"
              style={{ "--i": 2 } as React.CSSProperties}
              className="img1"
            />
            <img
              src="public/images/cloud3.png"
              style={{ "--i": 3 } as React.CSSProperties}
              className="img1"
            />
          </div>
          <div className="clouds clouds2">
            <img
              src="public/images/cloud1.png"
              style={{ "--i": 1 } as React.CSSProperties}
              className="img1"
            />
            <img
              src="public/images/cloud2.png"
              style={{ "--i": 2 } as React.CSSProperties}
              className="img1"
            />
            <img
              src="public/images/cloud3.png"
              style={{ "--i": 3 } as React.CSSProperties}
              className="img1"
            />
          </div>
          <div className="runway"></div>
          <img
            src="public/images/above-plane.png"
            alt="image"
            className="plane"
          />
        </section>
      </body>
    </html>
  );
};

export default FlyingPlaneHTML;
