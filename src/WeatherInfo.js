import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <img
                className="image img-fluid"
                alt="weather-icon"
                src={props.data.mainIcon}
                size="25"
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div>
            <WeatherTemperature fahrenheit={props.data.temperature} />
          </div>
          <br></br>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
            <li>Feels Like: {Math.round(props.data.feel)}ºF</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
