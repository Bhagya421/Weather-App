import { useState } from 'react'
import './App.css'

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
        <div id='box'>
            <h3>{weather.name}</h3>
            <p>{weather.weather[0].description}</p>
            <p>Temperature : {weather.main.temp}  </p>
            <p>humidity : {weather.main.humidity} %</p>
            <p>Wind speed : {weather.wind.speed} m/s </p>
            <button onClick={closeBox}>Close</button>
        </div>    
     )
    } 
    </>
  )
}

export default App
