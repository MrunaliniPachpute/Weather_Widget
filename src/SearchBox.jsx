import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let getWeatherInfo = async (city_name) => {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY;
    let geoCodeUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`;
    let resgeoLoc = await fetch(geoCodeUrl);
    let data = await resgeoLoc.json();
    console.log(data.name);
    let result = {
      city: data.name,
      temp: data.main.temp,
      humidity: data.main.humidity,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      feelsLike: data.main.feels_like,
      des: data.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handleCityChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("Form submitted with city searched as ", city);
      let city_name = city;
      let res = await getWeatherInfo(city_name);
      updateInfo(res);
      setCity("");
      setError(false);
    } catch (err) {
      setError(true);
      updateInfo({});
      console.log("No such place exist in API",err, error);
    }
  };

  return (
    <>
      <div className="SearchField">
        <h2>🌈 What’s the sky up to today? Search and see!</h2>
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="Location"
            variant="outlined"
            required
            value={city}
            onChange={handleCityChange}
          />
          <br />
          <Button variant="outlined" color="success" type="Submit">
            Search
          </Button><br />
          {error && <Alert severity="error">Place not found.</Alert>}
        </form>
      </div>
    </>
  );
}
