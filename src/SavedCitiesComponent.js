import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import moment from "moment";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import SavedCity from "./SavedCity";
import Spinner from "react-bootstrap/Spinner";

moment().format()

function SavedCitiesComponent({ savedCities, callWeatherAPI, removeFromFavouriteCities }) {

    const [savedCityWeather, setSavedCityWeather] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        async function getWeatherForSavedCities(cityArray) {

            const newCityArray = [];
            for (let city of cityArray) {
               const response = await callWeatherAPI(city.lat, city.lon);
               city.temp = response.current.temp;
               city.weather_description = response.current.weather[0].main;
               city.weather_icon = response.current.weather[0].icon;
               newCityArray.push(city);
            }
    
            setSavedCityWeather(newCityArray);
            setLoading(false)
        }

        getWeatherForSavedCities(savedCities);

    }, [savedCities, callWeatherAPI])


    return (
        <Container className="px-4">
            {savedCities.length === 0 ? <Alert variant="info" className="text-center"> No cities saved!</Alert> :
            loading ? <Spinner animation="border" role="status"/> :
            <Row xs={1} id="citiesContainerRow">
                {savedCityWeather.map(city => {
                    return <SavedCity key={city.id} city={city} removeFromFavouriteCities={removeFromFavouriteCities} />
                })}
            </Row>}
        </Container>
    )
}

export default SavedCitiesComponent