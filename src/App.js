import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import store from "./store";
import Landing from "./components/layout/Landing";
import Header from "./components/layout/Header";
import Footer1 from "./components/layout/Footer1";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Landing />
        <Footer1 />
      </div>
    </Provider>
  );
}

export default App;
