import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import moment from "moment";
import { useState, useEffect } from "react";
import CloseButton from "react-bootstrap/CloseButton";


moment().format()

function SavedCitiesComponent({ savedCities, callWeatherAPI, removeFromFavouriteCities }) {

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
    
            setSavedCityWeather(newCityArray)
        }
        getWeatherForSavedCities(savedCities)
    }, [savedCities, callWeatherAPI])


    return (
        <Container className="px-4">
            {savedCities.length === 0 ? <section> No cities saved!</section> :
            <Row xs={1} id="citiesContainerRow">
                {savedCityWeather.map(city => {
                    return <Col id={city.id} className="mb-5 py-4 savedCity">
                                <CloseButton onClick={removeFromFavouriteCities}/>
                                <Container className="d-flex align-items-center">
                                    <h1 className="me-3">{Math.round(city.temp)}°C</h1>
                                    <h2 className="d-block text-center p-2 w-50 mx-auto fw-bold">{city.name}, {city.country}</h2>
                                    <div className="d-flex flex-column align-items-center">
                                        <img src={`https://openweathermap.org/img/wn/${city.weather_icon}@2x.png`} style={{height: "128px", width:"128px"}} />
                                        <p>{city.weather_description}</p>
                                    </div>
                                </Container>
                            </Col>
                })}
            </Row>}
        </Container>
    )
}

export default SavedCitiesComponent