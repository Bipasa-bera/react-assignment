import React, { useState } from "react";
import "./CityDropdown.css";

const CityDropdown = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = {
    Kolkata: ["Saltlake", "Newtown", "Webel"],
    Medinipur: ["Debra", "Balichak"],
    Tamluk: ["Nimtouri", "Digha"],
  };

  return (
    <div className="dropdown-container">
      <h2>Select Your City</h2>

      <select
        className="city-select"
        onChange={(e) => setSelectedCity(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Choose a City
        </option>
        {Object.keys(cities).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {selectedCity && (
        <div className="area-list">
          <h3>Areas in {selectedCity}:</h3>
          <ul>
            {cities[selectedCity].map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CityDropdown;