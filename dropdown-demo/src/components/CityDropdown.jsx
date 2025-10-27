import React, { useState } from "react";
import "./CityDropdown.css";

const CityDropdown = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const cities = {
    Kolkata: ["Saltlake", "Newtown", "Webel"],
    Medinipur: ["Debra", "Balichak"],
    Tamluk: ["Nimtouri", "Digha"],
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    setSelectedArea(""); // reset area when city changes
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  return (
    <div className="dropdown-container">
      <h2>Select City and Area</h2>

      {/* City Dropdown */}
      <select
        className="city-select"
        value={selectedCity}
        onChange={handleCityChange}
      >
        <option value="">Choose a City</option>
        {Object.keys(cities).map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      {/* Area Dropdown */}
      {selectedCity && (
        <select
          className="city-select"
          value={selectedArea}
          onChange={handleAreaChange}
          style={{ marginLeft: "10px" }}
        >
          <option value="">Choose an Area</option>
          {cities[selectedCity].map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      )}

      {/* Selected Result */}
      {selectedCity && selectedArea && (
        <div className="result-box">
          <h3>
            You selected: <span>{selectedCity}</span> → <span>{selectedArea}</span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default CityDropdown;