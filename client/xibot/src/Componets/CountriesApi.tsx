import React, { useState } from "react";
import axios from "axios";

function CountrySearch() {
  const [searchPrefix, setSearchPrefix] = useState("");
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setSearchPrefix(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        "https://wft-geo-db.p.rapidapi.com/v1/geo/countries",
        {
          params: {
            namePrefix: searchPrefix,
          },
          headers: {
            "X-RapidAPI-Key":
              "2fa5c7e382msh33e1debd18eb0abp1b1270jsn43b2d21c5ccc",
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );
      setCountries(response.data.data);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchPrefix}
          onChange={handleChange}
          placeholder="Enter country prefix"
        />
        <button type="submit">Search</button>
      </form>
      {error && <div>Error: {error.message}</div>}
      <ul>
        {countries.map((country) => (
          <li key={country.code}>
            {country.name} - {country.code}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountrySearch;
