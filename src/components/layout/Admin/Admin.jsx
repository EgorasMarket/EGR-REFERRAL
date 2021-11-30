import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { getUsersData } from "../../../actions/getreferer";

import axios from "axios";
import {
    API_URL as api_url
} from "../../../actions/types.js";

const Admin = () => {
  const config = {
    headers: {
        'Content-Type': 'application/json'
    },
};
  useEffect(() => {

    axios.get(
        api_url + "/v1/user/all/participant/response",
        null,
        config
    ).then((data) => {
      console.log(data.data);
        // setData(data.data.data);
        // if (data.data.status === 402) {
        //     // setIsEmpty(true);
        // } else {

        //     console.log(data.data);

        //     // const arr1 = data.data.data.filter(d => d.contacted === false);
        //     // console.log('arr1', arr1);
        //     // setData(arr1);
        //     // setIsLoading(false);

        //     // data.data.data.map((win) => {
        //     //     console.log(data.data.data[0]);
        //     // })
        // }

    })
    // }

}, []);
  return <div></div>;
};

export default Admin;
