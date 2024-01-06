import './App.css'
import Search from './components/Search'
import CurrentWeather from './components/CurrentWeather';
import { Weathr_Api_Url, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import Forecast from './components/forecast/Forecast';
function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);



  const handleonsearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherfetch = fetch(`${Weathr_Api_Url}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastfetch = fetch(`${Weathr_Api_Url}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    Promise.all([currentWeatherfetch, forecastfetch]).then(async (Response) => {
      const weatherResponse = await Response[0].json();
      const forecastresponse = await Response[1].json();


      setCurrentWeather({ city: searchData.label, ...weatherResponse });
      setForecast({ city: searchData.label, ...forecastresponse });
    }).catch((err) => console.log(err));


  }

  console.log(currentWeather, "cw");
  console.log(forecast, "fw");

  return (
    <div className='container'>
      <Search onSearchchange={handleonsearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast&& <Forecast data={forecast}/>}
    </div>
  )
}

export default App
 
