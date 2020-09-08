import React from "react";

const Weather = props =>  (
      <div className="infoWeath">
      { props.city &&
      <div>
        <p> Местоположение: {props.city}, {props.country} </p>
        <p> Температура: {props.temp} C</p>
        <p> Скорость ветра: {props.wind} m/s</p>
        <p> Видимость: {props.visibility} m </p>
        <p> Давление Воздуха: {props.pressure} Pa</p>
      </div>
  }
  <p className="error">{ props.error }</p>
      </div>
    );



export default Weather;