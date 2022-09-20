import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search({ handleSubmit }) {
    return (
        <Form className="border-primary w-75 mx-auto pb-2" onSubmit={handleSubmit}>
          <Form.Group action="#" method="GET" className="mb-4">
            <Form.Control className="p-3" type="text" placeholder="Enter name of city" name="cityName" id="cityInput"></Form.Control>
          </Form.Group>
          <Button type="submit" className="btn btn-large bg-success border-success">Submit</Button>
        </Form>
    )
}

export default Search