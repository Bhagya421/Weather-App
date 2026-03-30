import { useState } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './Components/WeatherBox';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  function getWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9f2c6da6952aab94c69bd3bf25f38a9&units=metric`)
    .then((res) => res.json())
    .then((data) =>{
      setWeather(data);
    })
  }
  function closeBox(){
    setWeather(null);
  }

  


  return (
    <>
    <div id='head'>
      <h1>Weather App</h1>
      <input type="text" placeholder='Enter City Name' value={city} onChange={e => setCity(e.target.value)}/>
      <br />
      <button onClick={getWeather}>Search</button>
    </div>
    {weather && (
      <WeatherBox weather={weather} closeBox = {closeBox}/>
     )
    } 
    </>
  )
}
export default App
