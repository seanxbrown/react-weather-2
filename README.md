# React Weather App

## Table of Contents
 * [How it works](#how-it-works)
 * [Overview of functions](#overview-of-functions)
  * [History](#history)
 * [Future enhancements](#future-enhancements)

 ## How it works

 The user input from the search bar is used as part of an API call the the OpenWeather API. The response is used to call two APIs and the result is stored in state. The weather data is passed into two different components to be rendered as appropriate.

 Technologies used include:

 * React Bootstrap
 * React Hooks (State and Effect)
 
  ## Overview of functions

  ### handleSubmit

  Certain weather data can only be retrieved if the API call is made with the latitude and longitude of the target city / location.

  Instead of expecting the user to know or search for this information, the app allows you to enter a city, which retrieves the geographical data ("geodata") which includes information on latitude and longitude. 

  This function:
  * Calls the geodata API
  * Uses the geodata latitude and longitude to call the weather API
  * Store the weather data in state
  * Clear the input field (signal that submission has worked) 

### callGeoAPI

Takes a location (e.g. London) and returns data on that location, including latitude and longitude. As mentioned, the latitude and longitude are required to use the daily forecast API.

 ### callWeatherAPI

 Takes the latitude and longitude of the location input by the user and returns detailed weather data for that location.

   ## Future enhancements

* Ability to save locations (to local storage) as favourites
* Separate pages for days or forecast types using React Router
* New design methodology
* Dark/light mode implementation using the Context API

