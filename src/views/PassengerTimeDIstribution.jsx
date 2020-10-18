import React, { useState } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Navbar, Nav, NavItem, Form, FormControl, Button } from "react-bootstrap";


function PassengerTimeDIstribution() {

    const [state, setState] = useState({
        chartData: {
            labels: ['Colombo', 'Kandy', 'Gampaha', 'Malabe'],
            datasets: [{
                label: 'Population',
                data: ['1233', '1213', '4533', '8787'],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                ]
            }]
        }
    })

    return (
        <div>
            <Navbar fluid style={{ backgroundColor: "#85C1E9" }}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <h5 style={{ color: "black", fontWeight: "bold" }}>PassengerTimeDIstribution</h5>
                        <h1 style={{ color: "black", fontWeight: "bold" }}>Bus Route 17</h1>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle onClick={this.mobileSidebarToggle} /> */}
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
            <br/>
            <br/>
            <div style={{ float: "left", width: 800, height: 500 }}>
                <Bar
                    data={state.chartData}
                    width={100}
                    height={50}
                    options={{
                        title: {
                            display: true,
                            text: 'Population Affected By Covid-19',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />

            </div>
            <div style={{ float: "right", width: 800, height: 500 }}>
                <Bar
                    data={state.chartData}
                    width={100}
                    height={50}
                    options={{
                        title: {
                            display: true,
                            text: 'Population Affected By Covid-19',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />

            </div>
            <div style={{ float: "left", width: 800, height: 500 }}>
                <Bar
                    data={state.chartData}
                    width={100}
                    height={50}
                    options={{
                        title: {
                            display: true,
                            text: 'Population Affected By Covid-19',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />

            </div>
            <div style={{ float: "right", width: 800, height: 500 }}>
                <Bar
                    data={state.chartData}
                    width={100}
                    height={50}
                    options={{
                        title: {
                            display: true,
                            text: 'Population Affected By Covid-19',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />

            </div>
        </div>
    )
}

export default PassengerTimeDIstribution
