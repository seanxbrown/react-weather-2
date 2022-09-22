import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
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
        <Row xs={1} >
            {savedCities.map(city => {
                return <Col id={city.id} className="border border-1 border-info mb-5">
                        <Container className="d-flex justify-content-between align-items-center">
                            <h3>{Math.round(city.temp)}°C</h3>
                            <h2 className="text-center text-dark h3 p-2 w-50 mx-auto fw-bold">{city.name}, {city.country}</h2>
                            <img src={`https://openweathermap.org/img/wn/${city.weather_icon}@2x.png`} style={{height: "128px", width:"128px"}} />
                            <p>{city.weather_description}</p>

                        </Container>
                    
                            

                    </Col>
            })}
        </Row>
        </Container>
    )
}

export default SavedCitiesComponent