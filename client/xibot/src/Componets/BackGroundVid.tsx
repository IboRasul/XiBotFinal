import React from "react";
interface Props {
  sample: string | undefined;
}

const BackGroundVid: React.FC<Props> = ({ sample }) => {
  return (
    <img
      src={sample}
      alt=""
      className="absolute -z-10 w-full h-full bg-cover object-cover"
    />
  );
};

export default BackGroundVid;
