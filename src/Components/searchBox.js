import React, { useState } from "react";
import { Row, Card } from "react-bootstrap";

const SearchBox = props => {


    const [specificName, setSpecificName] = useState("");
    const handleChange = value => {
        setSpecificName(value);
        if (props.searchParams.timeout) clearTimeout(props.searchParams.timeout);
        props.searchParams.timeout = setTimeout(() => {
            props.setSearch({ ...props.searchParams, name: value })
        }, 500);

    }
    return (
        <Card>
            <Card.Body>
                <Row>
                    <strong>
                        <h5>Look for your Beer: </h5>
                    </strong>
                </Row>
                <form

                    onSubmit={event => {
                        event.preventDefault();
                    }
                    }
                >
                    <Row className="align-content-center justify-content-center">

                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="For eg: Sunk Punk"
                                value={specificName === "" ? "" : specificName}
                                onChange={event => handleChange(event.target.value)}

                                required
                            />

                        </div>

                    </Row>
                </form>
            </Card.Body>
        </Card>
    );
}

export default SearchBox;