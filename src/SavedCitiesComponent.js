import Container from "react-bootstrap/Container";
import moment from "moment";
import { useState, useEffect } from "react";

moment().format()

function SavedCitiesComponent({ savedCities, callWeatherAPI }) {

    const [savedCityWeather, setSavedCityWeather] = useState([]);

    

    useEffect(() => {
        async function getWeatherForSavedCities(cityArray) {

            const newCityArray = []
            for (let city of cityArray) {
               const response = await callWeatherAPI(city.lat, city.lon)
               city.temp = response.current.temp
               city.weather_description = response.current.weather[0].main
               city.weather_icon = response.current.weather[0].icon
               newCityArray.push(city)
            }
    
            setSavedCityWeather()
        }
        getWeatherForSavedCities(savedCities)
    }, [savedCities, callWeatherAPI])


    return (
        <Container>
            {savedCities.map(city => {
                return <div id={city.id}>
                    {city.name}, {city.country}, {Math.round(city.temp)}, {city.weather_description}
                    <img className="mx-auto" src={`https://openweathermap.org/img/wn/${city.weather_icon}@2x.png`} style={{height: "128px", width:"128px"}} />

                    </div>
            })}
        </Container>
    )
}

export default SavedCitiesComponent