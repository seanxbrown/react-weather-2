import './App.css';
import {useState, useEffect} from "react";
import moment from 'moment';
import ForecastComponent from "./ForecastComponent"
import CurrentWeatherComponent from "./CurrentWeatherComponent"
moment().format();

function App() {

  /*const [geoData, setGeoData] = useState(); //Geolocation data. Mainly used to get latitude and logitude but also contains other useful data;
  const [weatherData, setWeatherData] = useState(); //Saves the response from the call weather API function. Can work with data in state instead of having to call the API for data queries.
  const [currentWeather, setCurrentWeather] = useState();
  const [weatherForecast, setWeatherForecast] = useState([]);*/

  const [{weatherInformation, geoInformation}, setWeatherInformation] = useState({});

   async function handleSubmit(event) {
    //Submit handler function that takes the location data and uses it to call the api
  
    event.preventDefault();
    try {

      const location = document.querySelector("#cityInput").value;
    const geoData = await callGeoAPI(location);
    if (geoData === undefined){ console.log("No geodata. 2.")}
    const weatherData = await callWeatherAPI(geoData.lat, geoData.lon);
    setWeatherInformation({weatherInformation: weatherData, geoInformation: geoData})
    document.querySelector("#cityInput").value = "";

    }

    catch(err) {
      alert(err);
    }
    
  }
  
  
 
  //This function is used to get the latitude and longitude for the location entered by the user. The latitude and longitude are required to use the daily forecast API
  async function callGeoAPI(location) {
    
    try{
     const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=e7d76388b5f60a3e534c45325d4d2be9`, {mode: "cors"});
      console.log(response)
     let dataArray = await response.json();
     console.log(dataArray)
     let data = await dataArray[0]

     return data
     //console.log("geodata", geoData)

     //console.log(moment.unix(1646979848)["_d"])
      
    }
    catch(err) {
      console.log(err)
    }
  }

  async function callWeatherAPI(lat, lon) {

    try {
     let response =  await fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=e7d76388b5f60a3e534c45325d4d2be9`);

     let data = await response.json();
     //console.log("weather api", data);

     return data;

     //console.log("weather state", weatherData);

    }

    catch(err) {
      console.log(err)
    }


  }

  //function to take the main weather data (saved in the weatherData state object) and assign it to either the currentweather state object, or the forecast state object.

  /*function allocateWeatherData() {
    setCurrentWeather(weatherData.current);
    setWeatherForecast(weatherData.daily);

    console.log("current weather", currentWeather);
    //console.log("forecast", weatherForecast)


  }*/


  return (
    <div className="App">
      <header>
        <h1>React Weather Application</h1>
        <p>Search for a location and receive a weather forecast.</p>
      </header>
      <div id="formSection">
        <form action="#" method="GET" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter name of city" name="cityName" id="cityInput"></input>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div id="weatherDiv">
        {weatherInformation && geoInformation ? <CurrentWeatherComponent currentWeatherData={weatherInformation} geoData={geoInformation}/> : null}

       
     
        
      </div>
      


    </div>
  );
}

export default App;


 /*
 
  {weatherInformation && geoInformation ? <ForecastComponent forecastData={weatherInformation} geoData={geoInformation}/> : null}
  
  Next step is a redesign. Needs to 
  Call the Geolocation API to convert a typed name into a latitude and longitude.
  
  Store the response in state (geolocation, setGeolocation?).
  
  Call the daily forecast API with the stored lat and lon
  
  Store weather location (weatherData, setWeatherData)
  
   Links:
  
  https://openweathermap.org/api/geocoding-api
  
  https://openweathermap.org/api/one-call-api

  "temp", "feels_like", "sunrise", "sunset", "weatherObj"

  HTTP in browser causing mixed active content issue. Investigate after app is built. "HTTPS everywhere" option in Firefox settings fixes problem when tested on GH-Pages.
  
  */
  