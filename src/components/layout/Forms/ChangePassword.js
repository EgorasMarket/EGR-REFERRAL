import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { changePassword } from "../../../actions/Auth";

const ChangePassword = ({ match, changePassword }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [visibility3, setVisibility3] = useState(false);

  const [isSuccessful, setIsSuccessful] = useState(false);

  const [formData, setFormData] = useState({
    oldpassword: "",
    password: "",
    newpassword: "",
  });

  const { oldpassword, password, newpassword } = formData;

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
    // console.log(oldpassword, password, newpassword);

    if (oldpassword === '' || password === '' || newpassword === '') {
        console.log('please suppply all fields');
    } else {
        if (password !== newpassword) {
            console.log('passwords do not match');
        } else {
            let res = await changePassword({ oldpassword, newpassword });
            console.log(res);
            // if (res.data.success === true) {
            //   setIsSuccessful(true);
            //   console.log("okay Good Server");
            // } else {
            //   console.log("Nooo Bad Server");
            // }
        }
    }
  
  };

  const setPasswordVisibilty = () => {
    setVisibility(!visibility);
  };

  const setPasswordVisibilty2 = () => {
    setVisibility2(!visibility2);
  };

  const setPasswordVisibilty3 = () => {
    setVisibility3(!visibility3);
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
                        name="oldpassword"
                        required
                        className="input_me show"
                        value={oldpassword}
                        onChange={onChange}
                      />

                      <div className="show_pass_div">
                        
                        {visibility ? (
                            <img
                                src="/img/close-pass.svg"
                                alt=""
                                onClick={setPasswordVisibilty}
                                className="hide_pass"
                            />
                        ) : (
                            <img
                                src="/img/show-icon.svg"
                                alt=""
                                onClick={setPasswordVisibilty}
                                className="hide_pass"
                            />
                        )}
                      </div>
                    </div>
                    <label for="psw"></label>
                    <div className="input_area_field">
                      <input
                        type={visibility2 ? "text" : "password"}
                        placeholder="Enter Password"
                        name="password"
                        required
                        className="input_me show"
                        value={password}
                        onChange={onChange}
                      />

                      <div className="show_pass_div">
                        {visibility2 ? (
                            <img
                                src="/img/close-pass.svg"
                                alt=""
                                onClick={setPasswordVisibilty2}
                                className="hide_pass"
                            />
                        ) : (
                            <img
                                src="/img/show-icon.svg"
                                alt=""
                                onClick={setPasswordVisibilty2}
                                className="hide_pass"
                            />
                        )}
                      </div>
                    </div>
                    <label for="psw"></label>
                    <div className="input_area_field">
                      <input
                        type={visibility3 ? "text" : "password"}
                        placeholder="Re-Enter Password"
                        name="newpassword"
                        required
                        className="input_me show"
                        value={newpassword}
                        onChange={onChange}
                      />

                      <div className="show_pass_div">
                      {visibility3 ? (
                            <img
                                src="/img/close-pass.svg"
                                alt=""
                                onClick={setPasswordVisibilty3}
                                className="hide_pass"
                            />
                        ) : (
                            <img
                                src="/img/show-icon.svg"
                                alt=""
                                onClick={setPasswordVisibilty3}
                                className="hide_pass"
                            />
                        )}
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
export default connect(null, { changePassword })(ChangePassword);
