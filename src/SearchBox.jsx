import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

export default function SearchBox({ handleResponse }) {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const [API_KEY, setAPI_KEY] = useState("");

  useEffect(() => {
    const fetchAPIKey = async () => {
      try {
        const apiKey = import.meta.env.VITE_API_KEY;
        console.log(apiKey);
        if (apiKey) {
          setAPI_KEY(apiKey);
        } else {
          console.error("API Key not found in .env file!");
        }
      } catch (err) {
        console.error("Error fetching API Key:", err);
      }
    };

    fetchAPIKey();
  }, []);
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const generateWeather = async () => {
    try {
      let response = await fetch(
        `${URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        humidity: jsonResponse.main.humidity,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        weather: jsonResponse.weather[0].main,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleInput = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newRes = await generateWeather();
      handleResponse(newRes);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City name"
          variant="outlined"
          value={city}
          onChange={handleInput}
          required
        />
        <br></br>
        <br></br>
        <Button variant="outlined" type="submit">
          Search
        </Button>
      </form>
      {error ? <h1 style={{ color: "red" }}>No such city found!</h1> : ""}
    </div>
  );
}
