import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { activate } from "../../../actions/Auth";

import "./signup-form.css";

const Activation = ({ match, activate }) => {
  const [email_auth, setEmail_auth] = useState(match.params.id);

  //console.log(email_auth);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await activate(email_auth);
      //console.log(response.data.statusCode);
      if (response.data.statusCode === 200) {
        //console.log("okay Good Server");
      } else {
        //console.log("Nooo Bad Server");
      }
    }

    fetchMyAPI();
  }, []);

  return (
    <div>
      <section className="activation_section">
        <div className="container">
          <div className="activation_area">
            <div className="activation_div">
              <img src="/img/activate.svg" alt="" className="activate_img" />
              <h1>Success</h1>
              <div className="">Your account has been verified</div>
              <button
                // type="submit"
                className="loginButton activate_btn"
              >
                <a href="/login" className="login activate_link">
                  Login
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// export default Activation;

export default connect(null, { activate })(Activation);
