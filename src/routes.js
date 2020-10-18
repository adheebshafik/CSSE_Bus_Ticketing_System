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
import Dashboard from "views/Dashboard.jsx";
import PassengerTimeDistribution from "views/PassengerTimeDIstribution";
import PassengerRouteDistribution from "views/PassengerRouteDistribution";
import FareCollectionSummary from "views/FareCollectionSummary";
import FareCollectedByTime from "views/FareCollectedByTime";
import FareCollectedByRoute from "views/FareCollectedByRoute";
import ViolationTimeDistribution from "views/ViolationTimeDistribution";
import ViolationRouteDistribution from "views/ViolationRouteDistribution";
import Login from "views/Login.jsx";
import AddTimetableSubView from "views/AddTimetableSubView";
import ViewTimetable from "views/ViewTimetable";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/passengerTimeDistribution",
    name: "Passenger Time Distribution",
    component: PassengerTimeDistribution,
    layout: "/admin"
  },
  {
    path: "/passengerRouteDistribution",
    name: "Passenger Route Distribution",
    component: PassengerRouteDistribution,
    layout: "/admin"
  },
  {
    path: "/fareCollectionSummary",
    name: "Fare Collection Summary",
    component: FareCollectionSummary,
    layout: "/admin"
  },
  {
    path: "/fareCollectedByTime",
    name: "Fare Collected By Time",
    component: FareCollectedByTime,
    layout: "/admin"
  },
  {
    path: "/fareCollectedByRoute",
    name: "Fare Collected By Route",
    component: FareCollectedByRoute,
    layout: "/admin"
  },
  {
    path: "/violationTimeDistribution",
    name: "Violation Time Distribution",
    component: ViolationTimeDistribution,
    layout: "/admin"
  },
  {
    path: "/violationRouteDistribution",
    name: "Violation Route Distribution",
    component: ViolationRouteDistribution,
    layout: "/admin"
  },
  {
    path: "/addTimetable",
    name: "Add Timetable",
    icon: "pe-7s-map-marker",
    component: AddTimetableSubView,
    layout: "/admin"
  },
  {
    path: "/viewTimetable",
    name: "View Timetable",
    icon: "pe-7s-id",
    component: ViewTimetable,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "pe-7s-wallet",
    component: Login,
    layout: "/admin"
  },
 

  
];

export default dashboardRoutes;
