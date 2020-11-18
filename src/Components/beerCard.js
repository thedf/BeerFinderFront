import React from "react";
import { Col, Card } from "react-bootstrap";

const BeerCard = (props) => {

    const handleChoice = () => {
        props.onClick(props.node);
    };

    return (
        <Col
            xs={12}
            sm={12}
            md={6}
            lg={4}
            xl={4}
        >
            <Card
                onClick={handleChoice}
                style={{ cursor: "pointer", marginBottom: 10, flex: 1 }}

            >
                <Card.Img variant="top" style={{
                    maxWidth: "100%",
                    width: "100%",
                    height: "300px",
                    objectFit: "cover"
                }} src={props.node.image_url} alt={"Product Photo of : " + props.node.name} />
                <Card.Body>
                    <Card.Title as="h5">{props.node.name ? props.node.name : "New Product"}</Card.Title>
                    <Card.Text>
                        {props.node.description && (props.node.description.substring(0, 100) +
                            (props.node.description.length >= 100 ? "..." : " ".repeat(100 - props.node.description.length)))}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">First Brewed : {props.node.first_brewed}</small>
                </Card.Footer>
            </Card>
        </Col>
    );

}

export default BeerCard;
