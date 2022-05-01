import moment from "moment";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
moment().format();

function ForecastComponent({forecastData}) {

    return (
        <Container id="weatherForecastDiv" className="bg-white bg-gradient mt-3">
            <h2 className="text-center">Forecast</h2>
            <Row id="weatherForecastContainer" lg={3} md={2} xs={1}>
                {forecastData.daily.map((day, index)  => {
                return  <Col>
                <Card key={index} className="weatherForecast my-1 bg-gradient bg-light text-dark">
                    <Card.Header className="date text-center">{moment.unix(day.dt)["_d"].toDateString()}</Card.Header>
                    <img className="mx-auto" src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} style={{height: "128px", width:"128px"}}/>
                    <Container className="pb-3">
                            <Card.Text className="text-center">{day.weather[0].main}: {day.weather[0].description}</Card.Text>
                            <Card.Text>Max Temp: <span className="temp">{Math.round(day.temp.max)}°C</span></Card.Text>
                            <Card.Text>Min Temp: <span className="temp">{Math.round(day.temp.min)}°C</span></Card.Text>
                            <Card.Text>Sunrise: {moment.unix(day.sunrise)["_d"].toTimeString()}</Card.Text>
                            <Card.Text>Sunset: {moment.unix(day.sunset)["_d"].toTimeString()}</Card.Text>
                        </Container>
                    </Card> 


                </Col>             
                })}
            </Row>           
        </Container>
        
    )
}

export default ForecastComponent

/*

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

*/

/*

<Card key={index} className="weatherForecast">
                    <Card.Header className="date">{moment.unix(day.dt)["_d"].toDateString()}</Card.Header>
                    <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} style={{height: "128px", width:"128px"}}/>
                            <Card.Text>{day.weather[0].main}: {day.weather[0].description}</Card.Text>
                            <Card.Text>Max Temp: <span className="temp">{Math.round(day.temp.max)}°C</span></Card.Text>
                            <Card.Text>Min Temp: <span className="temp">{Math.round(day.temp.min)}°C</span></Card.Text>
                            <Card.Text>Sunrise: {moment.unix(day.sunrise)["_d"].toTimeString()}</Card.Text>
                            <Card.Text>Sunset: {moment.unix(day.sunset)["_d"].toTimeString()}</Card.Text>
                    </Card> 

*/