import moment from "moment";
moment().format();

function ForecastComponent({forecastData, geoData}) {

    return (
        <div>
            <h3>Forecast from Component</h3>
            {forecastData.daily.map(day => {
                return <div>
                    <p>{moment.unix(day.dt)["_d"].toDateString()}</p>
                    <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} />
                            <p>{day.weather[0].main}: {day.weather[0].description}</p>
                            <p>Max Temp: {Math.round(day.temp.max)}°C</p>
                            <p>Min Temp: {Math.round(day.temp.min)}°C</p>
                            <p>Sunrise: {moment.unix(day.sunrise)["_d"].toTimeString()}</p>
                            <p>Sunset: {moment.unix(day.sunset)["_d"].toTimeString()}</p>

                    </div>
                
            })}
           
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