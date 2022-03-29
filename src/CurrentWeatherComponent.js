import moment from "moment"
import "./weatherStyling.css"
moment().format()

const CurrentWeatherComponent = ({currentWeatherData, currentWeatherData:{current}, geoData}) => {

    //console.log(moment.unix(currentWeatherData.current.dt)["_d"].toUTCString())

    return (
    <div id="currentWeatherDiv" >
        <h3 className="weatherHeader heading">Current Weather</h3>
        <div className="weatherForecast">
        <h4 id="location">{geoData.name}, {geoData.country}</h4>         
          <img  alt={current.weather[0].description} src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} />
          <p className="temp">{Math.round(current.temp)} °C</p>
          <p className="weatherDescription">{current.weather[0].main}: {current.weather[0].description}</p>
          <div id="currentWeatherDetailDiv">
            <p>Sunrise: {moment.unix(current.sunrise)["_d"].toTimeString()}</p>
            <p>Sunset: {moment.unix(current.sunset)["_d"].toTimeString()}</p>
            <p className="hidden">Feels like: {Math.round(current.feels_like)}°C</p>
            <p className="hidden">Humidity: {current.humidity}%</p>
            <p className="hidden">Cloud coverage: {current.clouds}%</p>
            <p className="hidden">Wind speed: {current.wind_speed}m/s</p>
            <p className="hidden">Visibility: {current.visibility}m</p>
            <p className="hidden">{currentWeatherData.timezone}</p>
          </div>
        </div>
          
      
    </div>)
}

export default CurrentWeatherComponent

/*    <div id="currentWeatherDiv">
          <h3>Current Weather from Component</h3>
          {currentWeatherData ? <img alt={currentWeatherData.weather[0].description} src={`https://openweathermap.org/img/wn/${currentWeatherData.weather[0].icon}@2x.png`} /> : ""}
          {currentWeatherData ? <p>{currentWeatherData.temp} °C</p> : ""}

          {geoData ? <p>{geoData.name}, {geoData.country}</p> : ""}
          {currentWeatherData ? <p>{currentWeatherData.weather[0].main} </p> : ""}
          {currentWeatherData ? <p>{currentWeatherData.weather[0].description} </p> : ""}
          {currentWeatherData ? <p>Sunrise: {moment.unix(currentWeatherData.sunrise)["_d"].toTimeString()}</p> : ""}
          {currentWeatherData ? <p>Sunset: {moment.unix(currentWeatherData.sunset)["_d"].toTimeString()}</p> : ""}
            
        </div> */