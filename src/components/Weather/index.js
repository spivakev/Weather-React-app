import React from 'react';

const Weather = props => ( //Упрощенный компонент
  <div className="infoWeath">
    {props.city &&
      <div>
        <p>Температура: {props.temp}</p>
        <p>Местоположение: {props.city}, {props.country}</p>
        <p>Давление: {props.pressure}</p>
        <p>Закат: {props.sunset}</p>
      </div>
    }
    <p className="error">{props.error}</p>
  </div>
);

export default Weather;