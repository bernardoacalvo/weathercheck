import React from "react";

import "./NextDaysForecastItem.css";

function NextDaysForecastItem({ date, icon, min, max }) {
  return (
    <div className="item-container">
      <div>{date}</div>
      <img src={`/img/${icon}.png`} alt="weather icon"></img>
      <div className="temp">
        <span className="min-temp">{Math.round(min)}º</span>
        <span className="max-temp">{Math.round(max)}º</span>
      </div>
    </div>
  );
}

export default NextDaysForecastItem;
