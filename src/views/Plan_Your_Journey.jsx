import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const CustomMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function Plan_Your_Journey({ ...prop }) {
  return (
    <div className="content">
      <Row>
        <Col md={12}>
          <CustomMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAW9kZrtWBK-tW-n8tPOBxMeUEi2efhNXg"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card
            content={
              <form>
                <div class="row mt-4">
                  <div class="col-md-12">
                   <h3 class="text-center">55.55 LKR</h3>
                   <p class="text-center">Charge for the journey</p>
                   <hr/>
                   <p class="text-center">50 min(12.3km)</p>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-6">
                    <label>
                      From
                  </label>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Kaduwela" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label>
                      To
                  </label>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Nugegoda" />
                    </div>
                  </div>
                </div>
              </form>

            }
          />
        </Col>
      </Row>
    </div>

  );
}

export default Plan_Your_Journey;
