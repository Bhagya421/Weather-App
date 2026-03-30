import React, { useState } from 'react'

function WeatherBox({weather, closeBox}) {

  const condition = weather.weather[0].main;
  // let icon = "";


  // if (condition === "Clear") {
  //   icon = "bi bi-cloud-sun";
  // }
  // else if (condition === "Clouds") {
  //   icon = "bi bi-clouds-fill";
  // }
  // else if (condition === "Rain") {
  //   icon = "bi bi-cloud-rain-heavy-fill";
  // }
  // else if (condition === "Drizzle") {
  //   icon = "bi bi-cloud-drizzle-fill";
  // }
  // else if (condition === "Thunderstorm") {
  //   icon = "bi bi-cloud-lightning-fill";
  // }
  // else if (condition === "Snow") {
  //   icon = "bi bi-snow3";
  // }
  // else if (condition === "Mist" || condition === "fog" || condition === "dust" || condition === "smoke" ) {
  //   icon = "bi bi-cloud-fog2-fill";
  // }
  // else {
  //   icon  = "bi bi-cloud";
  // }

  const [icon, setIcon] = useState("");
  if (condition === "Clear") {
    setIcon("bi bi-cloud-sun");
  }
  else if (condition === "Clouds") {
    setIcon("bi bi-clouds-fill");
  }
  else if (condition === "Rain") {
    setIcon("bi bi-cloud-rain-heavy-fill");
  }
  else if (condition === "Drizzle") {
    setIcon("bi bi-cloud-drizzle-fill");
  }
  else if (condition === "Thunderstorm") {
    setIcon("bi bi-cloud-lightning-fill");
  }
  else if (condition === "Snow") {
    setIcon("bi bi-snow3");
  }
  else if (condition === "Mist" || condition === "fog" || condition === "dust" || condition === "smoke" ) {
    setIcon("bi bi-cloud-fog2-fill");
  }
  else {
    setIcon("bi bi-cloud");
  }

  return (
    <div>
        <div id='box'>
            <h3><i class="bi bi-geo-alt-fill"></i> {weather.name}</h3>
            <p className='{icon}' >{weather.weather[0].description}</p>
            <p><i class="bi bi-thermometer-half"></i> Temperature : {weather.main.temp}  </p>
            <p><i className="bi bi-droplet"></i> humidity : {weather.main.humidity} %</p>
            <p> <i class="bi bi-wind"></i> Wind speed : {weather.wind.speed} m/s </p>
            <button onClick={closeBox}>Close</button>
        </div> 
      
    </div>
  )
}

export default WeatherBox
