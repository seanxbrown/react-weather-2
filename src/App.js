import './App.css';
import {useState, useEffect} from "react";
import moment from 'moment';
import Container from "react-bootstrap/Container";
import NavbarComponent from "./NavbarComponent"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search"
import SavedCitiesComponent from "./SavedCitiesComponent";
import FooterComponent from './FooterComponent';

moment().format();

function App() {

  const [{weatherInformation, geoInformation}, setWeatherInformation] = useState({});
  const [savedCities, setSavedCities] = useState([]);
  const [warningStatus, setWarningStatus] = useState({display: false, message: ""})
  const [alertMessage, setAlertMessage] = useState({display: false, message: ""});

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
 
  //This function is used to get the latitude and longitude for the location entered by the user. 
  //The latitude and longitude are required to use the daily forecast API
  async function callGeoAPI(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=e7d76388b5f60a3e534c45325d4d2be9`, {mode: "cors"});
        let dataArray = await response.json();

        if (dataArray.cod) {
         return
        } else {
       let data = await dataArray[0];
       return data;
     }      
    }
    catch(err) {
      alert(err);
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

  function addToFavouriteCities() {

    const newId = "" + geoInformation.lat + geoInformation.lon;
    const newSavedCities = [...savedCities];

    for (let city of newSavedCities) {
      if (newId === city.id) {
        setWarningStatus({display: true, message:"City has already been saved."})
        return;
      }      
    }

    const newCity = {
      id: newId,
      name: geoInformation.name,
      lat: geoInformation.lat,
      lon: geoInformation.lon,
      country: geoInformation.country
    }

    newSavedCities.push(newCity);
    updateLocalStorage(newSavedCities);
    setAlertMessage({display: true, message: "City saved to favourites."})
    setTimeout(closeAlert, 5000)

  }

  function removeFromFavouriteCities(e) {
    const selectedId = e.target.parentElement.id;
    const newArray = [...savedCities].filter(city => city.id !== selectedId);
    updateLocalStorage(newArray);
  }

  function updateLocalStorage(array) {
    localStorage.setItem("citiesInLocalStorage", JSON.stringify(array));
    getFromLocalStorage();
  }

  function getFromLocalStorage() {
    const citiesFromLocalStorage = localStorage.getItem("citiesInLocalStorage");

    if(citiesFromLocalStorage) {
      setSavedCities(JSON.parse(citiesFromLocalStorage));
    }
  }

  function closeWarning() {
    setWarningStatus({display: false, message: ""})

  }

  function closeAlert() {
    setAlertMessage({display: false, message: ""})

  }


  useEffect(() => {
    getFromLocalStorage();
  }, [])

  return (
    <BrowserRouter>
      <Container fluid className="p-0">
        <NavbarComponent />      
        <Routes>
          <Route path="/react-weather-2/" element={<Search closeAlert={closeAlert} alertMessage={alertMessage} closeWarning={closeWarning} warningStatus={warningStatus} addToFavouriteCities={addToFavouriteCities} handleSubmit={handleSubmit} weatherInformation={weatherInformation} geoInformation={geoInformation}/>}/>
          <Route path="/react-weather-2/savedcities" element={<SavedCitiesComponent removeFromFavouriteCities={removeFromFavouriteCities} callWeatherAPI={callWeatherAPI} savedCities={savedCities} />} />
        </Routes> 
        <FooterComponent />
      </Container>
    </BrowserRouter>
    
  );
}

export default App;