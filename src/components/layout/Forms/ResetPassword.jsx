import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { reset } from "../../../actions/Auth";

const ResetPassword = ({ match, reset }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [passImg, setPassImg] = useState("show_pass");
  const [passImg2, setPassImg2] = useState("show_pass2");
  const [isSuccessful, setIsSuccessful] = useState(false);

  console.log(match.params.id);

  const [formData, setFormData] = useState({
    email_auth: match.params.id,
    password: "",
  });

  const { password, email_auth } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.value === "") {
      console.log("input something here");
    } else {
      console.log("something is here");
    }
  };

  const submitData = async (e) => {
    // setIsLoading(true);
    // if (res)
    console.log(email_auth, password);
    // let res = await reset({ password, email_auth });
    // console.log(email);
    // if (res.data.success === true) {
    //   setIsSuccessful(true);
    //   console.log("okay Good Server");
    // } else {
    //   console.log("Nooo Bad Server");
    // }
  };

  const setPasswordVisibilty = () => {
    setVisibility(true);
    setPassImg("hide_pass");
  };
  const closetPasswordVisibilty = () => {
    setVisibility(false);
    setPassImg("show_pass");
  };
  // =====
  // =====
  // =====
  // =====
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
      <section className="activation_section">
        <div className="container">
          <div className="activation_area">
            <div className="sign_up_cont  success_div">
              <div className="sign_up_area2">
                <div className="forgot_password_div center_me">
                  <h1 className="check_mail"> Update your password </h1>
                  <div className="">
                    To ensure that account is well protected, please use 8 or
                    more characters with a mix of letters, numbers & symbols.
                  </div>
                  <form class="sign_up_form" action="/action_page.php">
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

                    {/* <div className="forgot_link">
                    <a href="#" className="forgot_password">
                    Forgot Password?
                    </a>
                  </div> */}
                  </form>
                </div>

                <div className="sign_up_btns">
                  <button
                    // type="submit"
                    className="signupbtn"
                    onClick={submitData}
                  >
                    {!isLoading ? "Update Password" : "Updating Password"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default connect(null, { reset })(ResetPassword);
