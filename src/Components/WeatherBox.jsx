import React from 'react'
import './WeatherBox.css'

function WeatherBox({weather, closeBox, addtofav}) {

  // In condition the value of main from the json data is stored
  const condition = weather.weather[0].main;

  //initially icon is empty 
  let icon = " ";


  // if else condition where the particluar icon is set based on condition with color using bootstrap
  if (condition === "Clear") {
    icon = "bi bi-cloud-sun text-warning";
  }
  else if (condition === "Clouds") {
    icon = "bi bi-clouds-fill text-secondary";
  }
  else if (condition === "Rain") {
    icon = "bi bi-cloud-rain-heavy-fill text-primary";
  }
  else if (condition === "Drizzle") {
    icon = "bi bi-cloud-drizzle-fill text-info";
  }
  else if (condition === "Thunderstorm") {
    icon = "bi bi-cloud-lightning-fill text-danger";
  }
  else if (condition === "Snow") {
    icon = "bi bi-snow3 text-light";
  }
  else if (condition === "Mist" || condition === "fog" || condition === "dust" || condition === "smoke" ) {
    icon = "bi bi-cloud-fog2-fill text-muted";
  }
  else {
    icon  = "bi bi-cloud-fill text-info";
  }


  return (
    <div>
        <div id='box'>
            {/* City name */}
            <h3><i class="bi bi-geo-alt-fill text-danger"></i> {weather.name}</h3>

            {/* shows the Decription of the weather and using i tag the icon is displayed, where in icon, the color is also mentioned */}
            <p ><i className={icon} ></i>  {weather.weather[0].description}</p>

            {/*  shows temperature of the particular city and icon is added using bootstrap with color */}
            <p><i class="bi bi-thermometer-half text-danger"></i> Temperature : {weather.main.temp}  </p>

            {/* shows humidity of the particular city and icon is added using bootstrap with color */}
            <p><i className="bi bi-droplet text-primary"></i> humidity : {weather.main.humidity} %</p>

            {/* shows wind speed of the particular city and icon is added using bootstrap with color */}
            <p> <i class="bi bi-wind text-info"></i> Wind speed : {weather.wind.speed} m/s </p>

            {/* when this btn is clicked addtofav fn is triggered where it adds the city to the array of fav city */}
            <button onClick={()=>{addtofav(weather.name)}}>Add to Favorites</button>

            {/* closes the weathebox */}
            <button onClick={closeBox}>Close</button>
        </div> 
      
    </div>
  )
}

export default WeatherBox
