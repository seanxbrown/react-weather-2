import logo from './logo.svg';
import './App.css';
import {useState} from "react";



function App() {

  function handleSubmit(event) {
    //Submit handler function that takes the location data and uses it to call the api
  
    event.preventDefault();
    const location = document.querySelector("#cityInput").value;
    callGeoAPI(location);
    document.querySelector("#cityInput").value = "";
  }
  
  
  /*Next step is a redesign. Needs to 
  Call the Geolocation API to convert a typed name into a latitude and longitude.
  
  Store the response in state (geolocation, setGeolocation?).
  
  Call the daily forecast API with the stored lat and lon
  
  Store weather location (weatherData, setWeatherData)
  
   Links:
  
  https://openweathermap.org/api/geocoding-api
  
  https://openweathermap.org/api/one-call-api

  "temp", "feels_like", "sunrise", "sunset", "weatherObj"
  
  */
  
  
  async function callGeoAPI(location) {
    
    try{
     const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=e7d76388b5f60a3e534c45325d4d2be9`, {mode: "cors"});
  console.log(response)
     let dataArray = await response.json();
     let data = dataArray[0]

     setGeoData({location: data.name, lat: data.lat, lon:data.lon})
     console.log(geoData)

     callWeatherAPI(geoData.lat, geoData.lon)
      
    }
    catch(err) {
      console.log(err)
    }
  }

  async function callWeatherAPI(lat, lon) {

    try {
     let response =  await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=e7d76388b5f60a3e534c45325d4d2be9`);

     let data = await response.json()
     console.log(data)
    }

    catch(err) {
      console.log(err)
    }

    


  }

  const [geoData, setGeoData] = useState({});
  const [currentWeather, setCurrentWeather] = useState({})

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
      


    </div>
  );
}

export default App;
