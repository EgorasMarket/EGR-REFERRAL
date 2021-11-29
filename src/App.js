import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import store from "./store";
import Landing from "./components/layout/Landing";
import Header from "./components/layout/Header";
import Footer1 from "./components/layout/Footer1";
import LoginForm from "./components/layout/Forms/LoginForm";
import ForgotPasswordForm from "./components/layout/Forms/ForgotPasswordForm";
import SignUpForm from "./components/layout/Forms/SignUpForm";
import { Provider } from "react-redux";
import Activation from "./components/layout/Forms/Activation.jsx";
import ResetPassword from "./components/layout/Forms/ResetPassword";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/activate/:id" component={Activation} />
            <Route exact path="/reset/password/:id" component={ResetPassword} />
            <Route
              exact
              path="/forgot-password"
              component={ForgotPasswordForm}
            />
            <Landing />
          </Switch>
          <Footer1 />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
