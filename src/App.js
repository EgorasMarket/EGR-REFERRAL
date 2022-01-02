import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"

import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

// import { loadUser } from "./actions/auth";
import store from "./store";
import Landing from "./components/layout/Landing";
import Paginationd from "./components/layout/Admin/AllUsers";
import Header from "./components/layout/Header";
import Footer1 from "./components/layout/Footer1";
import LoginForm from "./components/layout/Forms/LoginForm";
import ForgotPasswordForm from "./components/layout/Forms/ForgotPasswordForm";
import SignUpForm from "./components/layout/Forms/SignUpForm";
import { Provider } from "react-redux";
import Activation from "./components/layout/Forms/Activation.jsx";
import ResetPassword from "./components/layout/Forms/ResetPassword";
import Admin from "./components/layout/Admin/Admin";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/Auth";
// import Alert from "./components/layout/Alert";
import Alert from "./components/Alert";
import ChangePassword from "./components/layout/Forms/ChangePassword";
import Referal from "./components/layout/Forms/Referal";
import Dashboard from "./components/layout/Dashboard/Dashboard";

import PrivateRoute from "./components/routing/PrivateRoute";
import ResendActivation from "./components/layout/Forms/ResendActivation";
import ActiveUsers from "./components/layout/Admin/ActiveUsers";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  //console.log("setAuthToken");
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  useEffect(() => {
    localStorage.setItem("xrate", 410);
    Aos.init({});
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      axios
        .get("https://geolocation-db.com/json/", null, config)
        .then((data) => {
          //console.log(data, "The Country");
          localStorage.setItem("origin", data.data.country_name);
        });
    } catch (err) {
      //console.log(err, "Call from exchange rate");
    }
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div   className="app_div" >
          <Header />
          <Alert />
          <Switch>
            {/* <Dashboard /> */}

            <Route exact path="/" component={Landing} />

            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/referral/:ref" component={Referal} />
            {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            <Route exact path="/activate/:id" component={Activation} />
            <Route exact path="/resend-activation-email" component={ResendActivation} />
            <Route exact path="/reset/:id" component={ResetPassword} />
            <Route exact path="/change/password" component={ChangePassword} />
            <Route exact path="/super-admin/registered/users" component={Paginationd} />
            <Route exact path="/super-admin/active/users" component={ActiveUsers} />
            <Route
              exact
              path="/super-admin/all/particpants"
              component={Admin}
            />
            <Route
              exact
              path="/forgot-password"
              component={ForgotPasswordForm}
            />
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          </Switch>
          <Footer1 />
        </div>
      </Router>
    </Provider>
  );
}

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default App;
