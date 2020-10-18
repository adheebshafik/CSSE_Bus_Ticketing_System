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
    Table,
    InputGroup,
    // Input
} from "react-bootstrap";
import {
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import ReactDatetime from "react-datetime";

function ViewTimetable() {
    return (
        <div className="col-md-12">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Timetable"
                            // category="Here is a subtitle for this table"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            <th>Bus No Plate</th>
                                            <th>Start Halt</th>
                                            <th>End Halt</th>
                                            <th>Start Time</th>
                                            <th>End Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>PE 9501</td>
                                            <td>Colombo</td>
                                            <td>Kandy</td>
                                            <td>11:20</td>
                                            <td>14:00</td>
                                        </tr>
                                        <tr>
                                            <td>PE 9501</td>
                                            <td>Colombo</td>
                                            <td>Kandy</td>
                                            <td>11:20</td>
                                            <td>14:00</td>
                                        </tr>
                                        <tr>
                                            <td>PE 9501</td>
                                            <td>Colombo</td>
                                            <td>Kandy</td>
                                            <td>11:20</td>
                                            <td>14:00</td>
                                        </tr>
                                        <tr>
                                            <td>PE 9501</td>
                                            <td>Colombo</td>
                                            <td>Kandy</td>
                                            <td>11:20</td>
                                            <td>14:00</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            }
                        />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={12}>
                        <Card
                            title="Edit Time Slot"
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

export default ViewTimetable
