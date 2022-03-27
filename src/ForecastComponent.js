import moment from "moment";
moment().format();

function ForecastComponent({forecastData, geoData}) {

    return (
        <div id="weatherForecastDiv">
            <h3 className="weatherHeader heading">Forecast</h3>
            <div id="weatherForecastContainer">
                {forecastData.daily.map((day, index)  => {
                return <div key={index} className="weatherForecast">
                    <p className="date">{moment.unix(day.dt)["_d"].toDateString()}</p>
                    <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                            <p>{day.weather[0].main}: {day.weather[0].description}</p>
                            <p>Max Temp: <span className="temp">{Math.round(day.temp.max)}°C</span></p>
                            <p>Min Temp: <span className="temp">{Math.round(day.temp.min)}°C</span></p>
                            <p>Sunrise: {moment.unix(day.sunrise)["_d"].toTimeString()}</p>
                            <p>Sunset: {moment.unix(day.sunset)["_d"].toTimeString()}</p>
                    </div>
                
            })}
            </div>
           
        </div>
        
    )
}

export default ForecastComponent

/*  <p>{moment.unix(forecast.dt)["_d"].toString()}</p>
                            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} />
                            <p>{forecast.weather[0].main}: {forecast.weather[0].description}</p>
                            <p>Max Temp: {forecast.temp.max}°C</p>
                            <p>Min Temp: {forecast.temp.min}°C</p>
                            <p>Sunrise: {moment.unix(forecast.sunrise)["_d"].toTimeString()}</p>
                            <p>Sunset: {moment.unix(forecast.sunset)["_d"].toTimeString()}</p>*/