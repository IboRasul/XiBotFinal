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
    <div className="grid">
      <BackGroundVid
        sample={
          "https://i.seadn.io/gae/Mr5cVjOrmlG3AOLGbv4QFC43IoikSvdAM-v6rRSQuVq0u1BkMi_l8zoVZ-7f0N-lVIAc6yoGwVLYMrJwWWgX9OctAWn_190LE-0HoQ?w=500&auto=format"
        }
      />
      {loading ? (
        <p>Loading...</p>
      ) : quote ? (
        <div>
          <h2>{quote.character}</h2>
          <blockquote>
            <p>"{quote.quote}"</p>
          </blockquote>
          <p>From: {quote.anime}</p>
        </div>
      ) : (
        <p>No quote available.</p>
      )}
    </div>
  );
};

export default AnimeQuoteData;
