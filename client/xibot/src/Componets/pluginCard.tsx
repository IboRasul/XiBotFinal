import axios from "axios"; // Import axios

import { useAnimeQuotePlugin,useAnimeQuotePluginUpdate } from "../contexts/PluginContext";

export default function PluginCard({ apiLink, image, title, description }) {
  const apiCall = () => {
    axios
      .get(`${apiLink}`) // TODO
      .then((response) => {
        console.log(response.data); // Logging the response data
      })
      .catch((error) => {
        console.error(`Error fetching ${title}:`, error);
      });
  };

  const toggleAnimeQuotePlugin = useAnimeQuotePluginUpdate();
  console.log( useAnimeQuotePlugin);

  return (
    <div className="col border-red-700 border shadow-2xl m-4 rounded-lg">
      <div className="m-1">
        <div className="flex flex-row justify-center">
          <img
            src={image} // Use the 'image' prop here
            alt={title} // Use the 'title' prop for alt text
            className="inline h-24 rounded"
          />
        </div>
        <p className="text-xl font-bold">{title}</p>
        <p>{description}</p>
        
        <button
          // onClick={apiCall}
          onClick={toggleAnimeQuotePlugin}
          className="bg-red-300 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>install</span>
        </button>
      </div>
    </div>
  );
}
