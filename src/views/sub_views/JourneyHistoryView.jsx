import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";

function JourneyHistoryView() {
    return (
        <div className="col-md-12">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Journey History"
                            // category="Here is a subtitle for this table"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>6 Oct</td>
                                            <td>Malabe</td>
                                            <td>Koswatta</td>
                                            <td>51</td>
                                        </tr>
                                        <tr>
                                            <td>6 Oct</td>
                                            <td>Malabe</td>
                                            <td>Koswatta</td>
                                            <td>51</td>
                                        </tr>
                                        <tr>
                                            <td>6 Oct</td>
                                            <td>Malabe</td>
                                            <td>Koswatta</td>
                                            <td>51</td>
                                        </tr>
                                        <tr>
                                            <td>6 Oct</td>
                                            <td>Malabe</td>
                                            <td>Koswatta</td>
                                            <td>51</td>
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

export default JourneyHistoryView
