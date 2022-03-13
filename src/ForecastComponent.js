import moment from "moment";
moment().format();

function ForecastComponent(forecast) {

    const forecastArray = forecast.forecast
    console.log("forecast from component", forecast.forecast)
    return (
        <div>
            <h3>Forecast</h3>
            {forecastArray.map(forecast => {
                return <div>
                            <p>{moment.unix(forecast.dt)["_d"].toString()}</p>
                            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} />
                            <p>{forecast.weather[0].main}: {forecast.weather[0].description}</p>
                            <p>Max Temp: {forecast.temp.max}°C</p>
                            <p>Min Temp: {forecast.temp.min}°C</p>
                            <p>Sunrise: {moment.unix(forecast.sunrise)["_d"].toTimeString()}</p>
                            <p>Sunset: {moment.unix(forecast.sunset)["_d"].toTimeString()}</p>

                       </div>
            })}
        
        </div>
        
    )
}

export default ForecastComponent