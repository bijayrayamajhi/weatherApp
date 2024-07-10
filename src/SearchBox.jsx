import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ handleResponse, handleError }) {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "67df9650ba82815e2ac6a79781b188c3";
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let generateWeather = async () => {
    {
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
    }
  };

  let handleInput = (event) => {
    setCity((city = event.target.value));
  };

  let handleSubmit = async (event) => {
    {
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
