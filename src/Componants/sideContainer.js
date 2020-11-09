import React, { useState, useEffect } from "react";
import { Col, Row, Button, Card, Container, Table } from "react-bootstrap";

export const SideContainer = props => {
    return (
        <div className={props.listClass.join(" ")}>
            <div className="h-list-header" style={{ border: 0 }}>
                <Row className="align-content-center">
                    <Col className="float-left">
                        <Button
                            className="btn-icon btn-rounded align-content-center   d-flex justify-content-center justify-content-sm-start"
                            style={{ backgroundColor: "rgb(208, 222, 227)" }}
                        >
                            <svg
                                fill="#000"
                                height="28"
                                width="28"
                                viewBox="5 7 22 22"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={props.closed}
                                style={{ cursor: "pointer" }}
                                className="align-content-center justify-content-center float-center"
                            >
                                <path
                                    d="M24.4 7.61a1.33 1.33 0 0 0-1.88 0L16 14.12 9.48 7.6A1.33 1.33 0 1 0 7.6 9.48L14.12 16 7.6 22.52a1.33 1.33 0 1 0 1.88 1.88L16 17.88l6.52 6.52a1.33 1.33 0 1 0 1.88-1.88L17.88 16l6.52-6.52c.5-.5.5-1.36 0-1.87z"
                                    fill="inherit"
                                ></path>
                            </svg>
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className="h-list-body">
                <div className="main-friend-cont scroll-div my-auto">
                    <div
                        className="main-friend-list my-auto"
                        style={{ height: "calc(100vh - 85px)" }}
                    >
                        {/* <PerfectScrollbar
                  style={{ overflowX: "hidden", paddingLeft: 0, paddingRight: 0 }}
                > */}
                        <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
                            {props.children}
                        </Container>
                        {/* </PerfectScrollbar> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

