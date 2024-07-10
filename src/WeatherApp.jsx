import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./App.css";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "butwal",
    humidity: 79,
    temp: 30.97,
    temp_max: 30.97,
    temp_min: 30.97,
    weather: "Haze",
  });

  const handleResponse = (newRes) => {
    setWeatherInfo(newRes);
  };
  return (
    <div>
      <h4 style={{ textAlign: "center", fontSize: "45px" }}>Weather App</h4>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="search-box">
          <SearchBox handleResponse={handleResponse} />
        </div>
        <div className="weather-info">
          <InfoBox info={weatherInfo} />
        </div>
      </div>
    </div>
  );
}
