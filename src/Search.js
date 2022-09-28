import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import WeatherComponent from "./WeatherComponent";

function Search({ handleSubmit, weatherInformation, geoInformation, addToFavouriteCities }) {
    return (
        <>
        <Form className="border-primary w-75 mx-auto pb-2" onSubmit={handleSubmit}>
          <Form.Group action="#" method="GET" className="mb-4">
            <Form.Control className="p-3" type="text" placeholder="Enter name of city" name="cityName" id="cityInput"></Form.Control>
          </Form.Group>
          <Button type="submit" id="submitButton" className="btn btn-large mb-5 mx-auto">Submit</Button>
        </Form>
        <WeatherComponent weatherInformation={weatherInformation} geoInformation={geoInformation} addToFavouriteCities={addToFavouriteCities}/>       
        </>

    )
}

export default Search