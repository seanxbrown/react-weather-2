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
    <Container id="currentWeatherDiv" className="border border-5 border-info rounded bg-gradient bg-info opacity-75">
        <Row className="weatherForecast p-4" xs={1} md={2}>
          <Col>
          <h2 id="location" className="text-center text-light h3 p-2 w-50 mx-auto fw-bold">{geoData.name}, {geoData.country}</h2>
            <div className="d-flex flex-column ">
            <img alt={current.weather[0].description} className="mx-auto" src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} style={{height: "128px", width:"128px"}} />
            <h3 className="temp text-center text-light">{Math.round(current.temp)} °C</h3>
            <p className="weatherDescription text-center text-light">{current.weather[0].main}: {current.weather[0].description}</p>
            </div>
          </Col>
          <Col>
          <ListGroup className="border-0">
              <ListGroup.Item className="bg-transparent text-light border-end-0 border-start-0">Sunrise: {moment.unix(current.sunrise)["_d"].toTimeString()}</ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-light border-end-0 border-start-0">Sunset: {moment.unix(current.sunset)["_d"].toTimeString()}</ListGroup.Item>
              <ListGroup.Item className="hidden bg-transparent text-light border-end-0 border-start-0">Feels like: {Math.round(current.feels_like)}°C</ListGroup.Item>
              <ListGroup.Item className="hidden bg-transparent text-light border-end-0 border-start-0">Humidity: {current.humidity}%</ListGroup.Item>
              <ListGroup.Item className="hidden bg-transparent text-light border-end-0 border-start-0">Cloud coverage: {current.clouds}%</ListGroup.Item>
              <ListGroup.Item className="hidden bg-transparent text-light border-end-0 border-start-0">Wind speed: {current.wind_speed}m/s</ListGroup.Item>
              <ListGroup.Item className="hidden bg-transparent text-light border-end-0 border-start-0">Visibility: {current.visibility}m</ListGroup.Item>
              <ListGroup.Item className="hidden bg-transparent text-light border-end-0 border-start-0">{currentWeatherData.timezone}</ListGroup.Item>
            </ListGroup>
          </Col>          
        </Row>   
    </Container>)
}

export default CurrentWeatherComponent