//import './App.css';
import {useState, useEffect} from "react";
import moment from 'moment';
import ForecastComponent from "./ForecastComponent"
import CurrentWeatherComponent from "./CurrentWeatherComponent";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import NavbarComponent from "./NavbarComponent"

moment().format();

function App() {

  const [{weatherInformation, geoInformation}, setWeatherInformation] = useState({});

   async function handleSubmit(event) {
    //Submit handler function that takes the location data and uses it to call the api  
    event.preventDefault();

    try {
          const location = document.querySelector("#cityInput").value;
          const geoData = await callGeoAPI(location);

          if (geoData === undefined) { 
            return
          } else {

            const weatherData = await callWeatherAPI(geoData.lat, geoData.lon);
            setWeatherInformation({weatherInformation: weatherData, geoInformation: geoData});
            document.querySelector("#cityInput").value = "";

          }
    }
    catch(err) {
      alert(err);
    }    
  }  
 
  //This function is used to get the latitude and longitude for the location entered by the user. The latitude and longitude are required to use the daily forecast API
  async function callGeoAPI(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=e7d76388b5f60a3e534c45325d4d2be9`, {mode: "cors"});
        let dataArray = await response.json();

        if (dataArray.cod) {
         return
        } else {
       let data = await dataArray[0];
       return data
     }      
    }
    catch(err) {
      alert(err)
    }
  }

  async function callWeatherAPI(lat, lon) {
    try {
        let response =  await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=e7d76388b5f60a3e534c45325d4d2be9`);
        let data = await response.json();
       return data;
      }

    catch(err) {
      alert(err);
    }
  }

  return (
    <Container fluid className="p-0">
      <NavbarComponent />      
      <Form className="border-primary w-75 mx-auto pb-2" onSubmit={handleSubmit}>
        <Form.Group action="#" method="GET" className="mb-4">
          <Form.Control className="p-3" type="text" placeholder="Enter name of city" name="cityName" id="cityInput"></Form.Control>
        </Form.Group>
        <Button type="submit" className="btn btn-large bg-success border-success">Submit</Button>
      </Form>
      <Container id="weatherDiv">
        {weatherInformation && geoInformation ? <CurrentWeatherComponent currentWeatherData={weatherInformation} geoData={geoInformation}/> : null}
        {weatherInformation && geoInformation ? <ForecastComponent forecastData={weatherInformation} geoData={geoInformation}/> : null}
      </Container>
    </Container>
  );
}

export default App;