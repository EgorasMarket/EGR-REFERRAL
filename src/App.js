import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import store from "./store";
import Landing from "./components/layout/Landing";
import Header from "./components/layout/Header";
import Footer1 from "./components/layout/Footer1";
import LoginForm from "./components/layout/Forms/LoginForm";
import SignUpForm from "./components/layout/Forms/SignUpForm";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Landing />
          </Switch>

          <Footer1 />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
