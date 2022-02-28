import React from "react";

import "./CurrentDayForecast.css";

function CurrentDayForecast({
  city,
  country,
  lat,
  lon,
  temperature,
  minTemperature,
  maxTemperature,
  weather,
  icon,
  weatherDesc,
  feelsLike,
  humidity,
  windSpeed,
}) {
  return (
    <div className="currentday-container">
      <div className="data-left">
        <h1>
          {city}, {country}
        </h1>
        <p style={{ fontSize: "13px" }}>
          {lat}, {lon}
        </p>
      </div>
      <div className="data-middle">
        <span style={{ textTransform: "capitalize" }}>
          Weather: <b>{weatherDesc}</b>
        </span>
        <span>
          Fells like: <b>{feelsLike}ºC</b>
        </span>
        <span>
          Humidity: <b>{humidity}%</b>
        </span>
        <span>
          Wind speed: <b>{windSpeed}m/s</b>
        </span>
      </div>
      <div className="data-right">
        <h1>{Math.round(temperature)}ºC</h1>
        <div className="data-min-max">
          <span className="data-min">{Math.round(minTemperature)}ºC</span>
          <span className="data-max">{Math.round(maxTemperature)}ºC</span>
        </div>
        <div
          style={{
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span>{weather}</span>
          <img
            src={`/img/${icon}.png`}
            alt="weather icon"
            className="weather-icon"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default CurrentDayForecast;
