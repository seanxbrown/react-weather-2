import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import WeatherComponent from "./WeatherComponent";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

function Search({ handleSubmit, weatherInformation, geoInformation, addToFavouriteCities, warningStatus, closeWarning, closeAlert, alertMessage }) {
    return (
        <>
        <Container className="px-5 mx-auto">
          <Form className="mx-auto pb-2" onSubmit={handleSubmit}>
            <Form.Group action="#" method="GET" className="mb-4">
              <Form.Control className="p-3" type="text" placeholder="Enter name of city" name="cityName" id="cityInput"></Form.Control>
            </Form.Group>
            <Button type="submit" id="submitButton" className="btn mb-5 mx-auto">Submit</Button>
          </Form>

          {warningStatus.display && <Alert className="text-center" variant="danger" dismissible onClose={closeWarning}>{warningStatus.message}</Alert> }

          {alertMessage.display && <Alert className="text-center" variant="info" dismissible onClose={closeAlert}>{alertMessage.message}</Alert> }

        </Container>

        <WeatherComponent weatherInformation={weatherInformation} geoInformation={geoInformation} addToFavouriteCities={addToFavouriteCities}/> 

        </>

    )
}

export default Search