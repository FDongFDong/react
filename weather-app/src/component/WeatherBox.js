import React from 'react';

const WeatherBox = ({ weather }) => {
  console.log(weather);
  return (
    <div className="weatherBox">
      {
        // weather && weather.name과 같은 역할을 함
      }
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp} / {weather?.main.temp * 1.8 + 32}
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
