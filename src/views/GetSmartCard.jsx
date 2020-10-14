import Card from 'components/Card/Card';
import FormInputs from 'components/FormInputs/FormInputs';
import Button from "components/CustomButton/CustomButton.jsx";
import React from 'react';
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    InputGroup,
    // Input
} from "react-bootstrap";
// import { Button } from 'reactstrap';

function GetSmartCard() {
    return (
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Order My Smart Travel Card"
                            content={
                                <form>
                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <label>
                                                Full Name
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Willy Wonka" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-6">
                                            <label>
                                                NIC Number
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="1254256484V" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label>
                                                Mobile Number
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="07XXXXXXX" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <label>
                                                Address - Line One
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Enter Address Line 1" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <label>
                                                Address - Line Two
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Enter Address Line 2" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-6">
                                            <label>
                                                District
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Kandy" />
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label>
                                                Postal Code
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="20000" />
                                            </div>
                                        </div>
                                    </div>


                                    <Button block  fill color="info" size="lg" type="button">
                                        Submit
                                    </Button>
                                </form>
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default GetSmartCard
