import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from 'react-spinners/ClipLoader';

// 1. 앱이 실행되자마자 현재위치 기반의 날씨가 보인다.
// 2. 날씨 정보에는 도씨, 섭씨, 화씨 날씨상태
// 3. 버튼 5개(현재위치, 다른지역 4개)
// 4. 도시 버튼 누를 때  마다 도시 별  날씨가 나온다.
// 5. 현재 위치 버튼을 누르면 현재위치기반의 날씨가 나온다.
// 6. 데이터를 들고 오는 동안 로딩 스피너

function App() {
  const [wether, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const cities = ['paris', 'new york', 'tokyo', 'seoul'];
  const [loading, setLoading] = useState(true);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };
  useEffect(() => {
    //ui가 처음 실행될 때, 재렌더링 될 때
    if (city === '') {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div className="App">
      {loading ? (
        <div className="container">
          <ClipLoader color="#ffffff" loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={wether} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            getCurrentLocation={getCurrentLocation}
          />
        </div>
      )}
    </div>
  );
}

export default App;
