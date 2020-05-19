import React from "react";
import classes from "./Conditions.module.css";

const conditions = (props) => {
  function getImageSource(id) {
    console.log(id);
    console.log(`http://openweathermap.org/img/wn/${id}@2x.png`);
    return `http://openweathermap.org/img/wn/${id}@2x.png`;
  }

  return (
    <div>
      {props.responseObj.cod === 200 ? (
        <div>
          <p className={classes.BoldText}>
            <strong>{props.responseObj.name}</strong>
          </p>
          <p>
            It is currently {Math.round(props.responseObj.main.temp)} degrees
            out with {props.responseObj.weather[0].description}, but it feels
            like {Math.round(props.responseObj.main.feels_like)} degrees with a
            humidity of {Math.round(props.responseObj.main.humidity)}.
          </p>
          <img
            src={getImageSource(props.responseObj.weather[0].icon)}
            alt="Weather Icon"
          ></img>
        </div>
      ) : null}
    </div>
  );
};
export default conditions;
