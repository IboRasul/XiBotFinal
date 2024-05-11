import { useState, useEffect } from "react";
import BackGroundVid from "./BackGroundVid";

interface Quote {
  character: string;
  quote: string;
  anime: string;
}

const AnimeQuoteData = () => {
  const [quote, setQuote] = useState<Quote | null>(null); // Specify the type as Quote or null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://animechan.xyz/api/random");
        const data: Quote = await response.json(); // Specify the type as Quote
        setQuote(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      <BackGroundVid sample={"https://i.imgur.com/YPQc9ad.gif"} />
      <div className="z-4 backdrop-blur-xl p-10 text-white ">
        <div className="">
          {loading ? (
            <p className="text-center text-xl font-bold text-red-600">
              Loading...
            </p>
          ) : quote ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-cyan-300">
                {quote.character}
              </h2>
              <blockquote className="italic text-lg text-purple-100">
                <p>"{quote.quote}"</p>
              </blockquote>
              <p className="text-lg text-indigo-200">From: {quote.anime}</p>
            </div>
          ) : (
            <p className="text-center text-xl font-bold">No quote available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeQuoteData;
