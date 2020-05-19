import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import classes from "./Forecast.module.css";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("metric");
  const uriEncodedCity = encodeURIComponent(city);

  function getForecast(e) {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=${unit}&q=${uriEncodedCity}&APPID=d10974afba83b87012b039d2d8e16b16`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setResponseObj(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h2 className={classes.BoldText}>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          className={classes.TextInput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>
        <button className={classes.Button} type="submit">
          Get Forecast
        </button>
      </form>
      <Conditions responseObj={responseObj} />
    </div>
  );
};
export default Forecast;
