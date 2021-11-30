import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
// import loans from "./loans";
// import companies from "./companies";
// import requests from "./requests";
// import statistics from "./statistics";

export default combineReducers({
    alert,
    auth,
  //   loans,
  //   companies,
  //   requests,
  //   statistics,
});
