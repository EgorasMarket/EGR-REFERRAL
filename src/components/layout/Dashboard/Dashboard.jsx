import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./DashboardStyles/dashboard.css";
import DashboardSideBar from "./DashboardSideBar.jsx";
import Dashboard_home from "./DashboardPages/Dashboard_home";
import Dashboard_ranking from "./DashboardPages/Dashboard_ranking";

function Dashboard() {
  return (
    <Router>
      {/* <DashBoardHeader /> */}
      {/* <DashBoardHeader /> */}
      <div className="dashboard">
        <DashboardSideBar />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard_home} />
          <Route exact path="/dashboard/ranking" component={Dashboard_ranking} />
          {/* <Route exact path="/dashboard/swap" component={DashBoardSwap} /> */}
          {/* <Route exact path="/vault/:asset/:base" component={OpenVaultPage} /> */}
          {/* <Route
            exact
            path="/deposit_vault/:asset/:base"
            component={Withdraw_vault_form}
          /> */}
          {/* <Route
            exact
            path="/dashboard/governance"
            component={DashboardGovernance}
          /> */}
          {/* <Route
            exact
            path="/dashboard/governance/details"
            component={DashboardEgrBalancePage}
          /> */}
          {/* <Route
            exact
            path="/dashboard/transaction"
            component={DashBoardTransaction}
          /> */}
          {/* <Route
            exact
            path="/dashboard/whitepaper"
            component={DashBoardWhitePaper}
          /> */}

          {/* <Route exact path="/dashboard/vault">
            <OpenVaultPage />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default Dashboard;
