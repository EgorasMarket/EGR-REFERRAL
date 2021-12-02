import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// import { loadUser } from "./actions/auth";
import store from "./store";
import Landing from "./components/layout/Landing";
import Header from "./components/layout/Header";
import Footer1 from "./components/layout/Footer1";
import LoginForm from "./components/layout/Forms/LoginForm";
import ForgotPasswordForm from "./components/layout/Forms/ForgotPasswordForm";
import SignUpForm from "./components/layout/Forms/SignUpForm";
import { Provider } from "react-redux";
import Dashboard from "./components/layout/Dashboard/Dashboard";
import Activation from "./components/layout/Forms/Activation.jsx";
import ResetPassword from "./components/layout/Forms/ResetPassword";
import Admin from "./components/layout/Admin/Admin";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/Auth";
// import Alert from "./components/layout/Alert";
import Alert from "./components/Alert";
import ChangePassword from "./components/layout/Forms/ChangePassword";
import Referal from "./components/layout/Forms/Referal";

if (localStorage.token) {
  setAuthToken(localStorage.token);
  console.log("setAuthToken");
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Alert />

          <Switch>
            {/* <Dashboard /> */}

            <Route exact path="/" component={Landing} />

            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/referal/:ref" component={Referal} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/activate/:id" component={Activation} />
            <Route exact path="/reset/password/:id" component={ResetPassword} />
            <Route exact path="/change/password" component={ChangePassword} />
            <Route exact path="/all-registered/users" component={Admin} />
            <Route
              exact
              path="/forgot-password"
              component={ForgotPasswordForm}
            />
            <Dashboard />
          </Switch>
          <Footer1 />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
