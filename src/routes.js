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
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Plan_Your_Journey from "views/Plan_Your_Journey.jsx";
import Notifications from "views/Notifications.jsx";
import GetSmartCard from "views/GetSmartCard";
import TopUpAccount from "views/TopUpAccount";
import Timetables from "views/Timetables";
import JourneyHistory from "views/JourneyHistory";
import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/planYourJourney",
    name: "Plan Your Journey",
    icon: "pe-7s-map-marker",
    component: Plan_Your_Journey,
    layout: "/admin"
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  {
    path: "/getSmartCard",
    name: "Get Your Smart Card",
    icon: "pe-7s-id",
    component: GetSmartCard,
    layout: "/admin"
  },
  {
    path: "/topUpAccount",
    name: "Top Up My Account",
    icon: "pe-7s-wallet",
    component: TopUpAccount,
    layout: "/admin"
  },
  {
    path: "/timetable",
    name: "Timetables",
    icon: "pe-7s-stopwatch",
    component: Timetables,
    layout: "/admin"
  },
  {
    path: "/journeyHistory",
    name: "Journey History",
    icon: "pe-7s-display1",
    component: JourneyHistory,
    layout: "/admin"
  }
  
];

export default dashboardRoutes;
