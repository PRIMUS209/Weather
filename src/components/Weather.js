import React from "react";

const Weather = (props) => (
  <div className="infoWeath">
    {props.city && (
      <div>
        <p>{`Location: ${props.city}, ${props.country}`}</p>
        <p>{`Temperature: ${props.temp} C`}</p>
        <p>{` Wind speed: ${props.wind} m/s`}</p>
        <p>{`Visibility: ${props.visibility} m `}</p>
        <p> {`Air pressure: ${props.pressure} Pa`}</p>
      </div>
    )}
    <p className="error">{props.error}</p>
  </div>
);

export default Weather;
