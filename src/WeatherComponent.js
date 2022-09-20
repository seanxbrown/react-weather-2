import Container from "react-bootstrap/Container";
import CurrentWeatherComponent from "./CurrentWeatherComponent";
import ForecastComponent from "./ForecastComponent";

function WeatherComponent({ addToFavouriteCities, weatherInformation, geoInformation }) {
    return (
        <Container id="weatherDiv">
          {weatherInformation && geoInformation ? <CurrentWeatherComponent addToFavouriteCities={addToFavouriteCities} currentWeatherData={weatherInformation} geoData={geoInformation}/> : null}
          {weatherInformation && geoInformation ? <ForecastComponent forecastData={weatherInformation} geoData={geoInformation}/> : null}
        </Container>
    )
}

export default WeatherComponent