//import "./weatherStyling.css"
import moment from "moment";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup"

moment().format();

const CurrentWeatherComponent = ({currentWeatherData, currentWeatherData:{current}, geoData}) => {

    return (
    <Container id="currentWeatherDiv" className="border border-5 border-info rounded">
        <Row className="weatherForecast p-4" lg={2}>
          <Col>
          <h3 id="location" className="text-center bg-white text-info h3 p-2 w-50 mx-auto">{geoData.name}, {geoData.country}</h3>
            <div className="d-flex flex-column ">
            <img alt={current.weather[0].description} className="mx-auto" src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} style={{height: "128px", width:"128px"}} />
            <p className="temp text-center">{Math.round(current.temp)} °C</p>
            <p className="weatherDescription text-center">{current.weather[0].main}: {current.weather[0].description}</p>
            </div>
          </Col>
          <Col>
          <ListGroup variant="flush">
              <ListGroup.Item>Sunrise: {moment.unix(current.sunrise)["_d"].toTimeString()}</ListGroup.Item>
              <ListGroup.Item>Sunset: {moment.unix(current.sunset)["_d"].toTimeString()}</ListGroup.Item>
              <ListGroup.Item className="hidden">Feels like: {Math.round(current.feels_like)}°C</ListGroup.Item>
              <ListGroup.Item className="hidden">Humidity: {current.humidity}%</ListGroup.Item>
              <ListGroup.Item className="hidden">Cloud coverage: {current.clouds}%</ListGroup.Item>
              <ListGroup.Item className="hidden">Wind speed: {current.wind_speed}m/s</ListGroup.Item>
              <ListGroup.Item className="hidden">Visibility: {current.visibility}m</ListGroup.Item>
              <ListGroup.Item className="hidden">{currentWeatherData.timezone}</ListGroup.Item>
            </ListGroup>
          </Col>          
        </Row>   
    </Container>)
}

export default CurrentWeatherComponent