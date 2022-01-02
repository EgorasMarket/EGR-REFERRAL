import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { resendEmail } from "../../../actions/Auth";
import { setAlert } from "../../../actions/alert";

import "./signup-form.css";

const ResendActivation = ({ match, resendEmail, setAlert }) => {
//   const [email_auth, setEmail_auth] = useState(match.params.id);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [userEmail, setUserEmail] = useState({
        email: "",
    });

  const { email } = userEmail;

  const onChange = (e) => {
    setUserEmail({ ...userEmail, [e.target.name]: e.target.value });

  }


  const submitData = async (e) => {
      console.log(email);
      if (email === '') {
          setAlert('Please provide your email address.', "danger");
          
      } else {
        let res = await resendEmail(email);

        if (res.data.success === true) {
            setIsSuccessful(true);
            //console.log("okay Good Server");
          } else {
            // console.log(res.data.data.errors[0].msg);
            setAlert(res.data.data.errors[0].msg, "danger");
          }
      }
  }

  //console.log(email_auth);

//   useEffect(() => {
//     async function fetchMyAPI() {
//       let response = await activate(email_auth);
//       //console.log(response.data.statusCode);
//       if (response.data.statusCode === 200) {
//         //console.log("okay Good Server");
//       } else {
//         //console.log("Nooo Bad Server");
//       }
//     }

//     fetchMyAPI();
//   }, []);

  return (
    <div>
      <section className="activation_section">
        <div className="container">
            <div className='row'>
                <div className="col-md-8 mx-auto">
                    <div className="activation_area">
                    <div className="activation_div">
                        {!isSuccessful ? (
                            <div>
                                <img src="/img/email-icon.svg" alt="" className="activate_img" />
                                <h1>Resend Activation Email</h1>
                                {/* <div className="">Your account has been verified</div> */}

                                <form class="sign_up_form baba" style={{width:"100%"}}>
                                    <label for="email"></label>
                                    <input
                                        type="text"
                                        placeholder="Enter Email"
                                        name="email"
                                        required
                                        className="input_me"
                                        value={email}
                                        onChange={onChange}
                                        style={{width:"100%"}}
                                    />

                                </form>
                                <button
                                    // type="submit"
                                    className="signupbtn  mt-4"
                                    onClick={submitData}
                                >
                                    {/* <a href="/login" className="login activate_link">
                                    Login
                                    </a> */}
                                    Resend Email

                                </button>
                            </div>
                        ) : (
                            <div className="forgot_password_div center_me pt-3">
                                <img
                                    src="/img/success-mail-icon.svg"
                                    alt=""
                                    className="success_img"
                                />
                                <h4 className="check_mail">Check your email</h4>

                                <p>
                                    An activation email has been sent to{" "}
                                    <span className="email_name">{email}</span> with
                                    instructions to activate your account.
                                </p>
                                <p className="note">
                                    {" "}
                                    * If the email doesn’t show up soon, check your spam
                                    folder or make sure you enter the email you used for
                                    registration.
                                </p>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

// export default ResendActivation;

export default connect(null, { resendEmail, setAlert })(ResendActivation);
