import moment from "moment"
import {useState} from "react";
moment().format()

const CurrentWeatherComponent = ({currentWeatherData, geoData}) => {

    console.log("CW component:", currentWeatherData, geoData);

    return (
    <div id="currentWeatherDiv">
          <h3>Current Weather from Component</h3>
          {currentWeatherData ? <img alt={currentWeatherData.weather[0].description} src={`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`} /> : ""}
          {currentWeatherData ? <p>{currentWeatherData.temp} °C</p> : ""}

          {geoData ? <p>{geoData.name}, {geoData.country}</p> : ""}
          {currentWeatherData ? <p>{currentWeatherData.weather[0].main} </p> : ""}
          {currentWeatherData ? <p>{currentWeatherData.weather[0].description} </p> : ""}
          {currentWeatherData ? <p>Sunrise: {moment.unix(currentWeatherData.sunrise)["_d"].toTimeString()}</p> : ""}
          {currentWeatherData ? <p>Sunset: {moment.unix(currentWeatherData.sunset)["_d"].toTimeString()}</p> : ""}
            
        </div>)
}

export default CurrentWeatherComponent