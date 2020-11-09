import React, { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import Aux from "../hoc/_Aux";
class beerCard extends Component {
    handleChoice = () => {
        this.props.onClick(this.props.node);
        // console.log(this.props.id);
    };
    render() {
        return (
            <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
            >
                <Card
                    onClick={this.handleChoice}
                    // className={
                    //   "rounded " +
                    //   (this.props.isActive
                    //     ? " zoomerIsActive"
                    //     : " bg-white shadow card-shadow zoomer")
                    // }
                    style={{ cursor: "pointer", marginBottom: 10, flex: 1 }}

                >
                    <Card.Img variant="top" style={{
                        maxWidth: "100%",
                        width: "100%",
                        height: "300px",
                        objectFit: "cover"
                    }} src={this.props.node.image_url} alt={"Product Photo of : " + this.props.node.name} />
                    <Card.Body>
                        <Card.Title as="h5">{this.props.node.name ? this.props.node.name : "New Product"}</Card.Title>
                        <Card.Text>
                            {this.props.node.description && (this.props.node.description.substring(0, 100) +
                                (this.props.node.description.length >= 100 ? "..." : " ".repeat(100 - this.props.node.description.length)))}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">First Brewed : {this.props.node.first_brewed}</small>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }
}

export default beerCard;
