import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./DashboardStyles/dashboard.css";
import DashboardSideBar from "./DashboardSideBar.jsx";
import Dashboard_home from "./DashboardPages/Dashboard_home";
import Dashboard_ranking from "./DashboardPages/Dashboard_ranking";
import Dashboard_total_rferrals from "./DashboardPages/Dashboard_total_rferrals";
import PrivateRoute from "../../routing/PrivateRoute";

function Dashboard({auth, isAuthenticated}) {
  // console.log(isAuthenticated);

  if (isAuthenticated == false) {
    // return <Redirect to="/" />;
    return window.location.replace("/");
  }
  return (
    <Route>
     
      <div className="dashboard">
        <DashboardSideBar />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard_home} />
          <Route
            exact
            path="/dashboard/ranking"
            component={Dashboard_ranking}
          />
          <Route
            exact
            path="/dashboard/referrals"
            component={Dashboard_total_rferrals}
          />
       
        </Switch>
      </div>
     </Route>
  );
}

Dashboard.propTypes = {

  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Dashboard);