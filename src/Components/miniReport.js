import React from "react";
import { Col, Row, Card, Table } from "react-bootstrap";
import {
    SideContainer,
} from "./sideContainer";

const MiniReport = props => {
    let listClass = ["header-user-list"];
    if (props.listOpen) {
        listClass = [...listClass, "open"];
    }
    return (
        <SideContainer
            listOpen={props.listOpen}
            closed={props.closed}
            listClass={listClass}
        >
            <Row className="justify-content-center row">
            </Row>
            <Col md={12} xl={12}>
                <Card>
                    <Card.Body className='p-0'>
                        <Card.Img src={props.node.image_url} />
                        <div style={{ margin: 5 }}>
                            <h5>{props.node.name}</h5>
                            <span>{props.node.description}</span>
                        </div>
                        <Table responsive hover>

                            <tbody>
                                <tr>
                                    <td>
                                        <h6 className="m-0">Contributed by</h6>
                                    </td>
                                    <td>
                                        <h6 className="m-0">{props.node.contributed_by}</h6>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <h6 className="m-0">First Brewed</h6>
                                    </td>
                                    <td>
                                        <h6 className="m-0">{props.node.first_brewed}</h6>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <h6 className="m-0">volume</h6>
                                    </td>
                                    <td>
                                        <h6 className="m-0">{props.node.volume.value + " " + props.node.volume.unit}</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className="m-0">PH Level</h6>
                                    </td>
                                    <td>
                                        <h6 className="m-0">{props.node.ph}</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h6 className="m-0">IBU</h6>
                                    </td>
                                    <td>
                                        <h6 className="m-0">{props.node.ibu}</h6>
                                    </td>
                                </tr>


                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>

            </Col>

        </SideContainer >
    );
};

export default MiniReport;
