import React, { useState } from "react";
import { connect } from "react-redux";
import "./signup-form.css";

import { setAlert } from "../../../actions/alert";

import { getAuthentication } from "../../../actions/Auth";

const SignUpForm = ({ getAuthentication, setAlert }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [passImg, setPassImg] = useState("show_pass");
  const [passImg2, setPassImg2] = useState("show_pass2");
  // const [ref, setRef] = useState("");
  const [userAuth, setUserAuth] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    walletAddress: "",
    // ref: "",
    // applicant_businessAddress: "",
  });

  const { username, firstname, lastname, email, password, confirmpassword, walletAddress } =
    userAuth;


    

  const onChange = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });

    if (e.target.value === "") {
      console.log("input something here");
    } else {
      console.log("something is here");
    }
  };

  

  const submitData = async (e) => {
    setIsLoading(true);
    console.log(
      username,
      firstname,
      lastname,
      email,
      password,
      walletAddress,
      // ref
    );

    if (
      username === "" ||
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === "" ||
      walletAddress === ""
    ) {
      setAlert("All fields are required", "danger");
    } else {
      if (password !== confirmpassword) {
        setAlert("Passwords do not match", "danger");
      } else {

        if (typeof localStorage.referrer !== 'undefined') {
          console.log(localStorage.referrer);
          // setUserAuth()
          let res = await getAuthentication(
            username,
            firstname,
            lastname,
            email,
            password,
            walletAddress,
            localStorage.referrer,
          );
          // console.log(res.data);
          if (res.data.success === true) {
            setIsSuccessful(true);
            // console.log("okay Good Server");
          } else {
            setAlert(res.data.data.errors[0].msg, "danger");
            
          }
        } else {
          let res = await getAuthentication(
            username,
            firstname,
            lastname,
            email,
            password,
            walletAddress,
            '',
          );
          // console.log(res.data);
          if (res.data.success === true) {
            setIsSuccessful(true);
            // console.log("okay Good Server");
          } else {
            setAlert(res.data.data.errors[0].msg, "danger");
            
          }
        }
        
        
      }
    }
  };

  const setPasswordVisibilty = () => {
    setVisibility(true);
    setPassImg("hide_pass");
  };
  const closetPasswordVisibilty = () => {
    setVisibility(false);
    setPassImg("show_pass");
  };
  const setPasswordVisibilty2 = () => {
    setVisibility2(true);
    setPassImg2("hide_pass2");
  };
  const closetPasswordVisibilty2 = () => {
    setVisibility2(false);

    setPassImg2("show_pass2");
  };

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
                    <h4 className="welcome_aboard">
                      Welcome aboard my friend.
                    </h4>
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
                    <h4>Welcome</h4>
                  </div>
                  <form class="sign_up_form" action="/action_page.php">
                    <label for="name"></label>
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      required
                      className="input_me"
                      value={username}
                      onChange={onChange}
                    />
                    <label for="name"></label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      required
                      className="input_me"
                      value={firstname}
                      onChange={onChange}
                    />
                    <label for="name"></label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      required
                      className="input_me"
                      value={lastname}
                      onChange={onChange}
                    />
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
                      />

                      <div className="show_pass_div">
                        <img
                          src="/img/show-icon.svg"
                          alt=""
                          onClick={setPasswordVisibilty}
                          className={
                            passImg == "show_pass"
                              ? "show_pass"
                              : "not_show_pass"
                          }
                        />
                        <img
                          src="/img/close-pass.svg"
                          alt=""
                          onClick={closetPasswordVisibilty}
                          className={
                            passImg == "hide_pass"
                              ? "hide_pass"
                              : "not_hide_pass"
                          }
                        />
                      </div>
                    </div>
                    <label for="psw"></label>
                    <div className="input_area_field">
                      <input
                        type={visibility2 ? "text" : "password"}
                        placeholder="Re-Enter Password"
                        name="confirmpassword"
                        required
                        className="input_me show"
                        value={confirmpassword}
                        onChange={onChange}
                      />

                      <div className="show_pass_div">
                        <img
                          src="/img/show-icon.svg"
                          alt=""
                          onClick={setPasswordVisibilty2}
                          className={
                            passImg2 == "show_pass2"
                              ? "show_pass2"
                              : "not_show_pass2"
                          }
                        />
                        <img
                          src="/img/close-pass.svg"
                          alt=""
                          onClick={closetPasswordVisibilty2}
                          className={
                            passImg2 == "hide_pass2"
                              ? "hide_pass2"
                              : "not_hide_pass2"
                          }
                        />
                      </div>
                    </div>
                    {/* <label for="walletAddress"></label>
                    <input
                      type="text"
                      placeholder="Bep20 Wallet Address"
                      name="walletAddress"
                      required
                      className="input_me"
                      value={walletAddress}
                      onChange={onChange}
                    /> */}

                    {/* <div className="forgot_link">
                    <a href="#" className="forgot_password">
                    Forgot Password?
                    </a>
                  </div> */}
                  </form>

                  <div className="sign_up_btns">
                    <button
                      // type="submit"
                      className="signupbtn"
                      onClick={submitData}
                    >
                      {!isLoading
                        ? "   Create an account"
                        : "   Creating an account"}
                    </button>
                    <div className="login_btn">
                      <div className="or">Have an account?</div>
                      <button
                        // type="submit"
                        className="loginButton"
                      >
                        <a href="/login" className="login">
                          Login
                        </a>
                      </button>
                    </div>
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

      {/*=========================== */}
      {/*=========================== */}
      {/*=========================== */}
      {/*=========================== */}
      {/*=========================== */}
      {/*=========================== */}
      {/*=========================== */}
    </div>
  );
};
export default connect(null, { getAuthentication, setAlert })(SignUpForm);
