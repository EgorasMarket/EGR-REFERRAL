import axios from "axios";

import { API_URL as api_url } from "./types";

// Get Social Media Handles
export const getSocialHandles =
  ({
    username,
    twitterHandle,
    telegramHandle,
    linkedInHandle,
    facebookHandle,
    walletAddress,
  }) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      username,
      twitterHandle,
      telegramHandle,
      linkedInHandle,
      facebookHandle,
      walletAddress,
    });

    console.log(body);

    try {
      const res = await axios.post(api_url + "/v1/user/giveaway", body, config);
      // console.log(data);

      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      console.log(err.response);

      const errors = err.response.data.errors;
      // console.log(errors);
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      // }

      return {
        success: false,
        data: errors,
      };
    }
  };

// =============
// =============
// =============
// =============

// Get Social Media Handles
export const getUsersData =
  ({
    id,
    username,
    twitterHandle,
    telegramHandle,
    linkedInHandle,
    facebookHandle,
    walletAddress,
    referal_hash,
    createdAt,
    updatedAt,
  }) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      id,
      username,
      twitterHandle,
      telegramHandle,
      linkedInHandle,
      facebookHandle,
      walletAddress,
      referal_hash,
      createdAt,
      updatedAt,
    });

    console.log(`${body} working fineoooooooo`);

    try {
      const res = await axios.get(
        api_url + "/v1/user/all/participant/response",
        body,
        config
      );
      console.log(res);

      if (res.data.error === false) {
        dispatch({
          //  type: LOAN_AUTH_REQUEST,
          payload: res.data,
        });
        return {
          success: true,
          data: res.data,
        };
      } else {
        dispatch({
          //  type: LOAN_AUTH_REQUEST_FAIL,
          payload: res.data,
        });
        return {
          success: false,
          data: res.data,
        };
      }
    } catch (err) {
      console.log(err.message);

      // const errors = err.response.data.errors;
      // console.log(errors);
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      // }

      //   return {
      //   status: false,
      //   id: null
      // }
    }
  };
// =============
// =============
// =============
// =============

// Get Social Media Handles
export const getTopReferrer = (user) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify({
    user,
  });

  console.log(`${body} working fineoooooooo`);

  try {
    const res = await axios.get(
      api_url + "/v1/user/all/top/referers",
      body,
      config
    );
    console.log(res);

    if (res.data.error === false) {
      dispatch({
        //  type: LOAN_AUTH_REQUEST,
        payload: res.data,
      });
      return {
        success: true,
        data: res.data,
      };
    } else {
      dispatch({
        //  type: LOAN_AUTH_REQUEST_FAIL,
        payload: res.data,
      });
      return {
        success: false,
        data: res.data,
      };
    }
  } catch (err) {
    console.log(err.message);

    // const errors = err.response.data.errors;
    // console.log(errors);
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }

    //   return {
    //   status: false,
    //   id: null
    // }
  }
};
// =============
// =============
// =============
// =============

// Get Social Media Handles
export const getMyReferrals = (user) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify({
    user,
  });

  console.log(`${body} working fineoooooooo`);

  try {
    const res = await axios.get(api_url + "/v1/user/my/referers", body, config);
    console.log(res);

    if (res.data.error === false) {
      dispatch({
        //  type: LOAN_AUTH_REQUEST,
        payload: res.data,
      });
      return {
        success: true,
        data: res.data,
      };
    } else {
      dispatch({
        //  type: LOAN_AUTH_REQUEST_FAIL,
        payload: res.data,
      });
      return {
        success: false,
        data: res.data,
      };
    }
  } catch (err) {
    console.log(err.message);

    // const errors = err.response.data.errors;
    // console.log(errors);
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }

    //   return {
    //   status: false,
    //   id: null
    // }
  }
};
