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
import { Navbar, Nav, NavItem, Form, FormControl, Button } from "react-bootstrap";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  render() {
    return (
      <Navbar fluid style={{ backgroundColor: "#85C1E9" }}>
        <Navbar.Header>
          <Navbar.Brand>
            <h5 style={{ color: "black", fontWeight: "bold" }}>{this.props.brandText}</h5>
            <h1 style={{ color: "black", fontWeight: "bold" }}>Bus Route 17</h1>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* <AdminNavbarLinks /> */}
          <Nav pullRight>
            <Form inline>
              <br />
              <label style={{ fontSize: 30 }}>Change Route </label>
              <br />
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Nav>
          <br />
        </Navbar.Collapse>
        <Nav>
          <h2 style={{ color: "black", fontWeight: "bold" }}>Kandy - Panadura</h2>
        </Nav>
        {/* <Nav>
        <h2 >Kandy - Panadura</h2>
        </Nav> */}
        <Nav pullRight>
          <NavItem eventKey={3} href="#">
            <p style={{ color: "black", fontWeight: "bold" }}>Log Out</p>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
