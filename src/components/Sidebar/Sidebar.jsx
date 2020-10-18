/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";

import logo from "assets/img/bellLogo.jpeg";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div

        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
      >
        {this.props.hasImage ? (
          <div className="sidebar-background" style={sidebarBackground} />
        ) : (
            null
          )}
        <div className="logo" style={{ backgroundColor: "#ECEBEB" }}>

          <div className="logo-img" style={{ backgroundColor: "#ECEBEB", height: 150 }}>
            <img src={logo} style={{ width: 210 }} alt="logo_image" />
          </div>

        </div>


        <div style={{ backgroundColor: "#ECEBEB" }} className="sidebar-wrapper">
          <ul className="nav">

            <li >
              <p style={{ textAlign: "center", fontSize: 14, color: "black" }}>Route Statistics</p>
            </li>
            <li >
              <NavLink
                to='/admin/passengerTimeDistribution'
                className="nav-link"
                activeClassName="active"
                style={{ textAlign: "center", color: "black" }}
              >
                <i className="ac_unit" />
                <p>Passenger-Time Distribution</p>
              </NavLink>
            </li>

            <li >
              <NavLink
                to='/admin/passengerRouteDistribution'
                className="nav-link"
                activeClassName="active"
                style={{ textAlign: "center", color: "black" }}
              >
                <i className="ac_unit" />
                <p>Passenger-Route Distribution</p>
              </NavLink>
            </li>

            <hr />
            <li >
              <p style={{ textAlign: "center", fontSize: 14, color: "black" }}>Fare Statistics</p>
            </li>
            <li >
              <NavLink
                to='/admin/fareCollectionSummary'
                className="nav-link"
                activeClassName="active"
                style={{ textAlign: "center", color: "black" }}
              >
                <i className="ac_unit" />
                <p>Fare Collection Summary</p>
              </NavLink>
            </li>

            <li >
              <NavLink
                to='/admin/fareCollectedByTime'
                className="nav-link"
                activeClassName="active"
                style={{ textAlign: "center", color: "black" }}
              >
                <i className="ac_unit" />
                <p>Fare Collected By Time</p>
              </NavLink>
            </li>
            <li >
              <NavLink
                to='/admin/fareCollectedByRoute'
                className="nav-link"
                activeClassName="active"
                style={{ textAlign: "center", color: "black" }}
              >
                <i className="ac_unit" />
                <p>Fare Collected By Route</p>
              </NavLink>
            </li>
            <hr />
            <li >
              <p style={{ textAlign: "center", fontSize: 14, color: "black" }}>Violation Statistics</p>
            </li>
            <li >
              <NavLink
                to='/admin/violationTimeDistribution'
                className="nav-link"
                activeClassName="active"
                style={{ textAlign: "center", color: "black" }}
              >
                <i className="ac_unit" />
                <p>Violation-Time Distribution</p>
              </NavLink>
            </li>

            <li >
              <NavLink
                to='/admin/violationRouteDistribution'
                className="nav-link"
                activeClassName="active"
                style={{ textAlign: "center", color: "black" }}
              >
                <i className="ac_unit" />
                <p>Violation-Route Distribution</p>
              </NavLink>
            </li>

            <hr />
            <li >
              <NavLink
                to='/admin/addTimetable'
                className="nav-link"
                activeClassName="active"
                style={{ textAlign: "center", color: "black" }}
              >
                <i className="ac_unit" />
                <p>Add Timetable</p>
              </NavLink>
            </li>

            <li >
              <NavLink
                to='/admin/viewTimetable'
                className="nav-link"
                activeClassName="active"
                style={{ textAlign: "center", color: "black" }}
              >
                <i className="ac_unit" />
                <p>View Timetable</p>
              </NavLink>
            </li>

            {/* {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : this.activeRoute(prop.layout + prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <p style={{color: "black"}}>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })} */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
