import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { ForgetPassword } from "../../../actions/Auth";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setAlert } from "../../../actions/alert";

const ForgotPasswordForm = ({ ForgetPassword, setAlert }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [disable, setDisable] = React.useState(false);
  const [userAuth, setUserAuth] = useState({
    email: "",
    // applicant_businessAddress: "",
  });

  const { email } = userAuth;

  const onChange = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });

    if (e.target.value === "") {
      //console.log("input something here");
    } else {
      //console.log("something is here");
    }
    if (email === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  console.log('forgot');

  const submitData = async (e) => {
    setIsLoading(true);
    // if (res)
    //console.log(email);
    let res = await ForgetPassword(email);
    console.log(res);
    if (res.data.success === true) {
      setIsSuccessful(true);
      //console.log("okay Good Server");
    } else {
      setAlert(res.data.data.errors[0].msg, "danger");
      // console.log(res.data.data.errors[0].msg);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (email === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  });

  return (
    <div>
      {!isSuccessful ? (
        <section className="sign_up_section">
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
                    <h4>Welcome aboard my friend.</h4>
                    <p>just a couple of clicks and we start</p>
                  </div>
                  <img
                    src="/img/sign_up_half_ball.png"
                    alt=""
                    className="half_ball"
                  />
                </div>
                <div className="sign_up_area2 ">
                  <div className="sign_up_area1_cont1">
                    <div className="forgot_password_div">
                      <h4 className="check_mail">Forgot password? </h4>

                      <p>
                        Enter your email below, you will receive an email with
                        instructions on how to reset your password in a few
                        minutes. You can also set a new password if you’ve never
                        set one before.
                      </p>
                    </div>
                  </div>
                  <form class="sign_up_form" action="/action_page.php">
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

                    {/* <div className="forgot_link">
                    <a href="#" className="forgot_password">
                    Forgot Password?
                    </a>
                  </div> */}
                  </form>
                  <div className="sign_up_btns">
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
                          Sending instructions{" "}
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faSpinner}
                            spin
                          />
                        </span>
                      ) : (
                        <span>Send instructions</span>
                      )}{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="sign_up_section success_section">
          <div className="container">
            <div className="sign_up_area">
              <div className="sign_up_cont  success_div">
                <div className="sign_up_area2 ">
                  <div className="sign_up_area1_cont1">
                    <div className="forgot_password_div center_me">
                      <img
                        src="/img/success-mail-icon.svg"
                        alt=""
                        className="success_img"
                      />
                      <h4 className="check_mail">Check your email</h4>

                      <p>
                        An email has been sent to{" "}
                        <span className="email_name">{email}</span> with
                        instructions to reset your password.
                      </p>
                      <p className="note">
                        {" "}
                        * If the email doesn’t show up soon, check your spam
                        folder or make sure you enter the email you used for
                        registration.
                      </p>
                    </div>
                  </div>

                  <div className="sign_up_btns">
                    <button
                      className="signupbtn"
                      // type="submit"
                    >
                      <a href="/login" className="login2">
                        Return to login
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default connect(null, { ForgetPassword, setAlert })(ForgotPasswordForm);
