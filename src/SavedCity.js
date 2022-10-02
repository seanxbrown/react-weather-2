import Col from "react-bootstrap/Col";
import CloseButton from "react-bootstrap/CloseButton";
import Container from "react-bootstrap/Container";

function SavedCity({ city, removeFromFavouriteCities }) {

    return (
        <Col id={city.id} className="mb-5 py-4 savedCity">
            <CloseButton onClick={removeFromFavouriteCities}/>
            <Container className="d-flex align-items-center">
                <h1 className="me-3">{Math.round(city.temp)}°C</h1>
                <h2 className="d-block text-center p-2 w-50 mx-auto fw-bold">{city.name}, {city.country}</h2>
                <div className="d-flex flex-column align-items-center">
                    <img src={`https://openweathermap.org/img/wn/${city.weather_icon}@2x.png`} style={{height: "128px", width:"128px"}} />
                    <p>{city.weather_description}</p>
                </div>
            </Container>
        </Col>
    )
}

export default SavedCity