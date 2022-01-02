import axios from "axios";
import { setAlert } from "./alert";

import {
  // REGISTER_SUCCESS,
  // REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  // LOG_OUT,
  API_URL as api_url,
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    // setAuthToken(localStorage.token);
    const res = localStorage.token;
    //console.log("Load User is called");
    dispatch({
      type: USER_LOADED,
      payload: res,
    });
  } else {
    // const res = localStorage.token;
    // //console.log('Load User is empty');
    dispatch({
      type: AUTH_ERROR,
      payload: "",
    });
  }

  // try {
  //   const res = await axios.get(api_url+'/auth/employee/signin');

  //   dispatch({
  //     type: USER_LOADED,
  //     payload: res.data
  //   });
  // } catch (err) {
  //   dispatch({
  //     type: AUTH_ERROR
  //   });
  // }
};

// Get Social Media Handles
export const getAuthentication =
  (username, email, password, ref) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      username,
      email,
      password,
      // walletAddress,
      ref,
    });

    //console.log(body);

    try {
      const res = await axios.post(api_url + "/v1/user/register", body, config);
      console.log(res);

      return {
        success: true,
        data: res.data,
      };
    } catch (err) {
      //console.log(err.response);

      return {
        success: false,
        data: err.response,
      };

      // const errors = err.response.data.errors;
      // //console.log(errors);
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      // }

      //   return {
      //   status: false,
      //   id: null
      // }
    }
  };

// Get Social Media Handles
export const activate = (email_auth) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify({
    email_auth,
  });

  //console.log(body);

  try {
    const res = await axios.post(api_url + "/v1/user/activate", body, config);
    //console.log(res);
    //console.log("yyyyy");

    return res;
  } catch (err) {
    //console.log(err);

    //console.log("ok");

    // const errors = err.response.data.errors;
    // //console.log(errors);
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }

    //   return {
    //   status: false,
    //   id: null
    // }
  }
};


export const resendEmail = (email) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify({
    email,
  });

  // console.log(body);

  try {
    const res = await axios.post(api_url + "/v1/user/resend/activation", body, config);
    console.log(res);

    return {
      success: true,
      data: res.data,
    };
    
  } catch (err) {
    console.log(err.response.data);

    return {
      success: false,
      data: err.response,
    };

  }
};

export const reset =
  ({ password, email_auth }) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      password,
      email_auth,
    });

    //console.log(body);

    try {
      const res = await axios.post(api_url + "/v1/user/reset", body, config);
      //console.log(res);

      return {
        status: true,
        data: res.data,
      };
    } catch (err) {
      //console.log(err.response);

      //console.log("ok");

      const errors = err.response.data.errors;
      // //console.log(errors);
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      // }

      return {
        status: false,
        data: errors,
      };
    }
  };

export const changePassword =
  ({ oldpassword, newpassword }) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      oldpassword,
      newpassword,
    });

    //console.log(body);

    try {
      const res = await axios.post(
        api_url + "/v1/user/change/password",
        body,
        config
      );
      //console.log(res);
      // //console.log("yyyyy");

      return res;
    } catch (err) {
      //console.log(err.response);

      //console.log("ok");

      // const errors = err.response.data.errors;
      // //console.log(errors);
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      // }

      //   return {
      //   status: false,
      //   id: null
      // }
    }
  };

export const ForgetPassword = (email) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const body = JSON.stringify({
    email,
  });

  // console.log(body);

  try {
    const res = await axios.post(api_url + "/v1/user/forgot", body, config);
    console.log(res);

    return {
      success: true,
      data: res.data,
    };
    
  } catch (err) {
    console.log(err.response.data);

    return {
      success: false,
      data: err.response,
    };

  }
};

// login Authentication============

export const getLoginAuthentication =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        Accept: "*",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    const body = JSON.stringify({
      email,
      password,
    });

    //console.log(body);

    try {
      const res = await axios.post(api_url + "/v1/user/login", body, config);
      // //console.log(res.data.success);

      if (res.data.success === false) {
        //console.log(res.data);
        const errors = res.data.errors;
        //console.log(errors);
        // if (errors) {
        //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        // }
        dispatch({
          type: LOGIN_FAIL,
          payload: errors[0].msg,
        });

        return {
          status: false,
          data: errors[0].msg,
        };
      } else {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        return {
          status: true,
          data: res.data,
        };
      }

      // return res;
    } catch (err) {
      //console.log(err.response);

      // const errors = err.response.data.errors;
      // //console.log(errors);
      // if (errors) {
      //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      // }
      // dispatch({
      //   type: LOGIN_FAIL,
      //   // payload: errors[0].msg,
      // });

      // return {
      //   status: false,
      //   data: err.response,
      // };
    }
  };
