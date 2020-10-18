import Card from 'components/Card/Card';
import FormInputs from 'components/FormInputs/FormInputs';
import Button from "components/CustomButton/CustomButton.jsx";
import moment from 'moment';
// import 'moment/locale/fr';
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
import {
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import ReactDatetime from "react-datetime";

function AddTimetable() {
    return (
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Add Time Slot"
                            content={
                                <form>

                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <label>
                                                Bus Number Plate
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="PE 9501" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <label>
                                                Start Halt
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Colombo Main Bus Stand" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <label>
                                                End Halt
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Kandy" />
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-6">
                                            <label>
                                                Start Time
                                            </label>
                                            <div class="form-group">
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-calendar-grid-58" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <ReactDatetime
                                                        inputProps={{
                                                            placeholder: "Enter Start Time"
                                                        }}
                                                        dateFormat={false}
                                                    />
                                                </InputGroup>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label>
                                                End Time
                                            </label>
                                            <div class="form-group">
                                                <InputGroup className="input-group-alternative">
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            <i className="ni ni-calendar-grid-58" />
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <ReactDatetime
                                                        inputProps={{
                                                            placeholder: "Enter End Time"
                                                        }}
                                                        dateFormat={false}
                                                    />
                                                </InputGroup>
                                            </div>
                                        </div>
                                    </div>

                                    <Button block fill color="info" size="lg" type="button">
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

export default AddTimetable
