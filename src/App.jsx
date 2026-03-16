import { useState } from 'react'
import './App.css'

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState('');

  function getWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9f2c6da6952aab94c69bd3bf25f38a9&units=metric`)
    .then((res) => res.json())
    .then((data) =>{
      setWeather(data);
    })
  }

  return (
    <>
    <div id='head'>
      <h1>Weather App</h1>
      <input type="text" placeholder='Enter City Name' value={city} onChange={e => setCity(e.target.value)}/>
      <br />
      <button onClick={getWeather}>Search</button>
    </div>
    {/* {weather && ( */}
      <div id='box'>
        <h3>{weather.name}</h3>
        <p>Temperature : {weather.temperature}</p>
        <p>humidity : {weather.humidity}</p>
        <p>Wind speed : {weather.windspeed}</p>
      </div>
    {/* )
    } */}
    </>
  )
}

export default App
