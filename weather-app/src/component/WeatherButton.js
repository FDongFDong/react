import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, getCurrentLocation }) => {
  return (
    <div>
      <Button
        variant="secondary"
        onClick={() => {
          getCurrentLocation();
        }}
      >
        Current Location
      </Button>
      ;
      {cities.map((item, index) => (
        // map함수를 이용해 cities 목록을 보여준다.
        <Button variant="secondary" key={index} onClick={() => setCity(item)}>
          {item}
        </Button>
        // App.js로 city값 전달.
      ))}
    </div>
  );
};

export default WeatherButton;
