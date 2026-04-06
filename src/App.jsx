import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import WeatherBox from './Components/WeatherBox';
import FavcityBox from './Components/FavcityBox';

function App() {

  // stores city value that user type 
  const [city, setCity] = useState("");

  //to manage whether the weather box is open or not
  const [weather, setWeather] = useState(null);

  //getweather fn to fetch data from api triggers when search btn is clicked
  function getWeather(){
    
    //if user click search button without entering any value and alert message pops up
    if(city.trim() === ""){
      alert("Please enter a city name");
      console.log("Empty string")
      return;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b9f2c6da6952aab94c69bd3bf25f38a9&units=metric`)
    .then((res) => res.json())
    .then((data) =>{
      setWeather(data); // set weather from api to weather box
    })
  }

  //fn to close weather box triggers when close btn s clicked un weather box
  function closeBox(){
    setWeather(null);
  }

  // to manage favorite city, stored as an array 
  const [favcity, setFavCity ] = useState([]);

  // mamage state of fav city box
  const [fav, setFav] = useState(false);

  //triggers when add to fav btn clicked in weather box
  const addToFav = (city) =>{
      if(!favcity.includes(city)){ //checks whether the ciy is already in array
        setFavCity([...favcity,city]); //if not then the city is added to the existing array
      }
  }

  // triggers when Favorite Cities btn is clicked 
  function favCitybtn(){
    setFav(!fav); // changes the state of fav . initially false !fav change state to true so fav city box appears
  }

  //triggers when close btn is clicked in fav city box
  function closefavcity(){
    setFav(false)
  }


  //UI
  
  return (
    <>

    <div id='head'>

      {/* heading */}
      <h1>Weather App</h1>

      {/* input box that stores city as value onchange used to update city value using setcity  */}
      <input type="text" placeholder='Enter City Name' value={city} onChange={e => setCity(e.target.value)}/>

      <br />

      {/* search button */}
      <button onClick={getWeather}>Search</button>

    </div>

    {/* if weather has data the weatherbox is triggered with props as data, closeboxfn, addtofav fn */}
    {weather && (
      <WeatherBox weather={weather} closeBox = {closeBox} addtofav={addToFav}/>
    )} 

    {/* if weather has no data and weather box is not displayed then at this stage if favcity btn is clicked it triggers favcitybox */}
    {!weather && (
      <button onClick={favCitybtn}>Favorite Cities</button>
    )}    

    {/* Favcitybox is triggered if fav is true (favcity btn is clicked) and weather has no data and weather box is not displayed */}
    {fav && !weather && (
      <FavcityBox favcity={favcity} closefavcity={closefavcity} />
    )}

  </>
  )
}

export default App
