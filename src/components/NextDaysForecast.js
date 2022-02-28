import React from "react";

import "./NextDaysForecast.css";
import NextDaysForecastItem from "./NextDaysForecastItem";

function NextDaysForecast({ list }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontFamily: "sans-serif", color: "white", margin: "30px" }}>
        Next Days Forecast
      </h1>
      <div className="nextDays-container">
        {list.map((day) => {
          return <NextDaysForecastItem {...day} key={day.date} />;
        })}
      </div>
    </div>
  );
}

export default NextDaysForecast;
