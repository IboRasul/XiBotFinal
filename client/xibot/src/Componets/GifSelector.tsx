/* eslint-disable @typescript-eslint/no-unused-vars */

import { FC, ChangeEvent, useState, useEffect } from "react";
import axios from "axios";

import sample from "../aIPz2Bh.gif";
import sample1 from "../pixel.gif";

const gifList: string[] = [
  sample,
  sample1,
  sample,
  sample1,
  sample,
  // Add more URLs as needed
];

interface GifSelectorProps {
  onSelect: (selectedGif: string) => void;
}

const GifSelector: FC<GifSelectorProps> = ({ onSelect }) => {
  const [data, setData] = useState<unknown[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/fetch-data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount.
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedGif = e.target.value;
    onSelect(selectedGif);
  };

  return (
    <div>
      Themes
      <select
        onChange={handleSelectChange}
        className="inline py-0 px-fit w-fit text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        {data.map((item: any) => (
          <option value={item.path}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default GifSelector;
