import Card from 'components/Card/Card';
import FormInputs from 'components/FormInputs/FormInputs';
import Button from "components/CustomButton/CustomButton.jsx";
import React, { useState } from 'react';
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
import CreditCardInput from 'react-credit-card-input';

function TopUpAccount() {

    const [state, setState] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        cardNumber: '',
    })

    const handleCardNumberChange = (e) => {
        setState({ 
            ...state,
            cardNumber: e.target.value
         });
    }
    const handleCardExpiryChange = (e) => {
        setState({ 
            ...state,
            expiry: e.target.value
         });
    }
    const handleCardCVCChange = (e) => {
        setState({ 
            ...state,
            cvc: e.target.value
         });
    }

    return (
        <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Top-Up Your Account"
                            content={
                                <form>
                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <h3 className="text-center">
                                                Current Balance
                                            </h3>
                                            <h3 className="text-center">
                                                150.00
                                            </h3>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <label>
                                                Amount
                                            </label>
                                            <div class="form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="0.00" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-2">
                                            <Button
                                                block
                                                bsStyle="info"
                                                fill
                                                type="submit">
                                                100
                                            </Button>
                                        </div>
                                        &nbsp;
                                        <div class="col-md-2">
                                            <Button
                                                bsStyle="info"
                                                fill
                                                block
                                                type="submit">
                                                500
                                            </Button>
                                        </div>
                                        &nbsp;
                                        <div class="col-md-2">
                                            <Button
                                                bsStyle="info"
                                                fill
                                                block
                                                type="submit">
                                                1000
                                            </Button>
                                        </div>
                                        &nbsp;
                                        <div class="col-md-2">
                                            <Button
                                                bsStyle="info"
                                                fill
                                                block
                                                type="submit">
                                                1500
                                            </Button>
                                        </div>
                                        &nbsp;
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-12 p-3">
                                            <label>
                                                Pay by
                                            </label>
                                            <div class="form-group">
                                                <CreditCardInput
                                                    cardNumberInputProps={{ value: state.cardNumber, onChange: handleCardNumberChange }}
                                                    cardExpiryInputProps={{ value: state.expiry, onChange: handleCardExpiryChange }}
                                                    cardCVCInputProps={{ value: state.cvc, onChange: handleCardCVCChange }}
                                                    fieldClassName="input"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-4">
                                        <div class="col-md-12">
                                            <Button fill block color="info" size="lg" type="button">
                                                Top Up
                                            </Button>
                                        </div>
                                    </div>


                                </form>
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default TopUpAccount