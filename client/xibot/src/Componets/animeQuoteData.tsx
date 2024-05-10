import React, { useState, useEffect } from "react";
import BackGroundVid from "./BackGroundVid";

const AnimeQuoteData = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://animechan.xyz/api/random");
        const data = await response.json();
        setQuote(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 py-4 px-6">
      <BackGroundVid sample={"https://i.imgur.com/YPQc9ad.gif"} />
      <div>
        {loading ? (
          <p className="text-center text-xl font-bold">Loading...</p>
        ) : quote ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold">{quote.character}</h2>
            <blockquote className="italic text-lg">
              <p>"{quote.quote}"</p>
            </blockquote>
            <p className="text-lg">From: {quote.anime}</p>
          </div>
        ) : (
          <p className="text-center text-xl font-bold">No quote available.</p>
        )}
      </div>
    </div>
  );
};

export default AnimeQuoteData;
