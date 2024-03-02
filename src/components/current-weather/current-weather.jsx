import "./current-weather.css";

import React from "react";

export const CurrentWeather = ({data}) => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">{data.city}</p>
        <p className="weather-description">{data.weather[0].description}</p>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom">
        <div className="parameter-col">
          <span className="parameter-label">
            🌡️ {Math.round(data.main.temp)} °C
          </span>
        </div>
        <div className="parameter-col">
          <span className="parameter-label">
            🍃 {Math.round(data.wind.speed)} m/s
          </span>
        </div>
        <div className="parameter-col">
          <span className="parameter-label">
            ♒ {Math.round(data.main.humidity)} %
          </span>
        </div>
      </div>
    </div>
  );
};
