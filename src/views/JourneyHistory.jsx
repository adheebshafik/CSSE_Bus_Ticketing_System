import React, { Component, useState, useEffect } from 'react';
import FareHistory from "./sub_views/FareHistory";
import JourneyHistoryView from "./sub_views/JourneyHistoryView";
import { Container, Button } from "reactstrap";
import { Card } from "components/Card/Card.jsx";
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
  } from "react-bootstrap";

function JourneyHistory() {

    const [currentPage, setcurrentPage] = useState(<JourneyHistoryView />);

    return (

        <div className="content">
            <Grid fluid>
            <Row>
            <Col md={12}>
            <hr />
            <Row>
            <div className="col-md-3">
                <Button color="primary" size="lg" onClick={(e) => { setcurrentPage(<JourneyHistoryView />) }}>Journey History</Button>
            </div>
            &nbsp;
            <div className="col-md-3">
            <Button color="primary" size="lg" onClick={(e) => { setcurrentPage(<FareHistory />) }}>Fare History</Button>
            </div>
            </Row>
            <hr style={{ borderColor: "black" }} />
            <Row>
            <Col md={12}>
                {
                    currentPage
                }
            </Col>
            </Row>
            </Col>
            </Row>
            </Grid>
        </div>
    )
}

export default JourneyHistory
