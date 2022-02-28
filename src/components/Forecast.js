import React from "react";

import "./Forecast.css";

import CurrentDayForecast from "./CurrentDayForecast";
import NextDaysForecast from "./NextDaysForecast";

function Forecast({ forecast }) {
  return (
    <div className="forecast-container">
      <CurrentDayForecast {...forecast.currentDayForecastData} />
      <NextDaysForecast list={forecast.nextDaysForecastData} />
    </div>
  );
}

export default Forecast;
