import moment from "moment"
moment().format()

const CurrentWeatherComponent = ({currentWeatherData, currentWeatherData:{current}, geoData}) => {

    console.log(moment.unix(currentWeatherData.current.dt)["_d"].toUTCString())

    return (
    <div id="currentWeatherDiv">
          <h3>Current Weather from Component</h3>
          <img alt={current.weather[0].description} src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} />
          <p>{Math.round(current.temp)} °C</p>
          <p>{geoData.name}, {geoData.country}</p>
          <p>{current.weather[0].main}</p>
          <p>{current.weather[0].description}</p>
          <p>Sunrise: {moment.unix(current.sunrise)["_d"].toTimeString()}</p>
          <p>Sunset: {moment.unix(current.sunset)["_d"].toTimeString()}</p>
          
          
      
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