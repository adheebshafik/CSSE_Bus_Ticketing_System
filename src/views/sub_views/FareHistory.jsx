import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";

function FareHistory() {
    return (
        <div className="col-md-12">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Fare History"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Journeys Taken</th>
                                            <th>Total Spent</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6 Oct</td>
                                            <td>2</td>
                                            <td>73</td>
                                        </tr>
                                        <tr>
                                            <td>6 Oct</td>
                                            <td>2</td>
                                            <td>73</td>
                                        </tr>
                                        <tr>
                                            <td>6 Oct</td>
                                            <td>2</td>
                                            <td>73</td>
                                        </tr>
                                        <tr>
                                            <td>6 Oct</td>
                                            <td>2</td>
                                            <td>73</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default FareHistory
