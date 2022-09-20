import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CurrentWeatherComponent from "./CurrentWeatherComponent";

const testGeoObj = {
    "name": "London",
    "lat": 51.5073219,
    "lon": -0.1276474,
    "country": "GB",
    "state": "England"
  }

const testWeatherObj = {
"lat": 33.44,
"lon": -94.04,
"timezone": "America/Chicago",
"timezone_offset": -18000,
"current": {
  "dt": 1663702626,
  "sunrise": 1663675378,
  "sunset": 1663719377,
  "temp": 307.63,
  "feels_like": 311.23,
  "pressure": 1016,
  "humidity": 46,
  "dew_point": 294.33,
  "uvi": 6.21,
  "clouds": 20,
  "visibility": 10000,
  "wind_speed": 4.02,
  "wind_deg": 116,
  "wind_gust": 5.81,
  "weather": [
    {
      "id": 801,
      "main": "Clouds",
      "description": "few clouds",
      "icon": "02d"
    }
  ]
}
}

test("Save button should render correctly", ()=> {

    const { getByTestId } = render(<CurrentWeatherComponent currentWeatherData={testWeatherObj} geoData={testGeoObj} ></CurrentWeatherComponent>);
    const favouritesButton = getByTestId("favouritesButton");

    expect(favouritesButton.textContent).toBe("Add to Favourites")
})

