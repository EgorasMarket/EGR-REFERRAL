import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
// import { setAlert } from "../../actions/alert";
import { setAlert } from "../../../actions/alert";
import "./signup-form.css";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getLoginAuthentication } from "../../../actions/Auth";

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

const LoginForm = ({ getLoginAuthentication, isAuthenticated, setAlert }) => {
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [disable, setDisable] = React.useState(false);
  const [passImg, setPassImg] = useState("show_pass");
  const [passImg2, setPassImg2] = useState("show_pass2");
  const [userAuth, setUserAuth] = useState({
    email: "",
    password: "",
    // applicant_businessAddress: "",
  });

  // console.log(isAuthenticated);

  // ggggggg
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  // hghfhgjhghf

  const { email, password } = userAuth;

  const onChange = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });

    if (e.target.value === "") {
      console.log("input something here");
    } else {
      console.log("something is here");
    }

    // if (e.target.value === "" && e.target.value === "") {
    //   setDisable(true);
    // } else {
    //   setDisable(false);
    // }
    if (email === "") {
      setDisable(true);
    } else if (password === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  useEffect(() => {
    if (email === "") {
      setDisable(true);
    } else if (password === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  });

  const submitData = async (e) => {
    // setAlert('Check your internet connection', 'danger');
    console.log(email, password);
    console.log("okay Good look at me");
    setIsLoading(true);

    let res = await getLoginAuthentication({
      email,
      password,
    });
    console.log(res);
    if (res === undefined) {
      setAlert("Check your internet connection", "danger");
      setIsLoading(false);
    } else {
      if (res.data.success === true) {
        setIsLoading(false);
        // return <Redirect to="/" />;
        // return window.location.replace("/dashboard");
      } else {
        setAlert(res.data, "danger");
        setIsLoading(false);
        // console.log('res.data.errorMessage');
        // setIsLoading(false);
      }
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    // return <Redirect to="/dashboard" />;
    return window.location.replace("/dashboard");
  }

  const setPasswordVisibilty = () => {
    setVisibility(true);
    setPassImg("hide_pass");
  };
  const closetPasswordVisibilty = () => {
    setVisibility(false);
    setPassImg("show_pass");
  };

  // Redirect if logged in
  // if (isAuthenticated) {
  //   return <Redirect to="/dashboard" />;
  //   // return window.location.replace("/dashboard");
  // }

  return (
    <div style={{ height: "100vh" }}>
      <section className="sign_up_section" style={{ height: "100%" }}>
        <div className="container">
          <div className="sign_up_area">
            <div className="sign_up_cont">
              <div className="sign_up_area1">
                <img
                  src="/img/signup_image.svg"
                  alt=""
                  className="sign_up_img"
                />
                <div className="signup_area1_txts">
                  <h4 className="welcome_aboard">Welcome aboard my friend.</h4>
                  <p className="couple_clicks">
                    just a couple of clicks and we start
                  </p>
                </div>
                <img
                  src="/img/sign_up_half_ball.png"
                  alt=""
                  className="half_ball"
                />
              </div>
              <div className="sign_up_area2">
                <div className="sign_up_area1_cont1">
                  <h4 className="h444k">Welcome Back</h4>
                </div>
                <form class="sign_up_form baba" action="/action_page.php">
                  <label for="email"></label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    required
                    className="input_me"
                    value={email}
                    onChange={onChange}
                  />

                  <label for="psw"></label>
                  <div className="input_area_field">
                    <input
                      type={visibility ? "text" : "password"}
                      placeholder="Enter Password"
                      name="password"
                      required
                      className="input_me show"
                      value={password}
                      onChange={onChange}
                      placeholder="***********"
                      minLength="8"
                    />

                    <div className="show_pass_div">
                      <img
                        src="/img/show-icon.svg"
                        alt=""
                        onClick={setPasswordVisibilty}
                        className={
                          passImg == "show_pass" ? "show_pass" : "not_show_pass"
                        }
                      />
                      <img
                        src="/img/close-pass.svg"
                        alt=""
                        onClick={closetPasswordVisibilty}
                        className={
                          passImg == "hide_pass" ? "hide_pass" : "not_hide_pass"
                        }
                      />
                    </div>
                  </div>

                  <div className="forgot_link">
                    <a href="/forgot-password" className="forgot_password">
                      Forgot Password?
                    </a>
                  </div>
                </form>

                <div className="sign_up_btns sign_up_login">
                  <button
                    type="submit"
                    className="signupbtn"
                    onClick={submitData}
                    disabled={disable}
                    // disabled={isLoading ? "true" : null}
                    value="Login"
                  >
                    {isLoading ? (
                      <span>
                        Logging in{" "}
                        <FontAwesomeIcon
                          className="ml-2"
                          icon={faSpinner}
                          spin
                        />
                      </span>
                    ) : (
                      <span>Login</span>
                    )}{" "}
                  </button>
                  <div className="login_btn">
                    <div className="or">Don't have an account?</div>
                    <a href="/signup" className="login2">
                      {" "}
                      <button
                        className="signupbtn sm_width"
                        // type="submit"
                      >
                        {" "}
                        signup
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
// export default connect(null, { getLoginAuthentication })(LoginForm);

LoginForm.propTypes = {
  getLoginAuthentication: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getLoginAuthentication, setAlert })(
  LoginForm
);
