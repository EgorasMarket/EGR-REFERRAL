import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";

import { Buttons, Buttons2, ButtonsDashboard } from "./buttons/Buttons";
import "../../css/header.css";
const Header = ({auth, isAuthenticated }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const windowsPath = window.location.pathname;
  const myArr = windowsPath.split("/");

  // console.log(isAuthenticated);

  useEffect(() => {
    if (windowsPath === "/dashboard") {
      document.getElementById("header").style.display = "none";
    }
    if (windowsPath === "/dashboard/ranking") {
      document.getElementById("header").style.display = "none";
    }
    if (windowsPath === "/activate/" + myArr[2]) {
      document.getElementById("buttons_login").style.display = "none";
    }
  });

  useEffect(() => {
    // fetchDepositLinks();
    console.log(auth.user);
    if (auth.user !== null) {
      // var todecoded = auth.user;
      // var decoded = jwt.decode(todecoded, {
      //     complete: true
      // });
      // setStaffEmail(decoded.payload.email)
      setIsLoggedIn(true);
    }
  }, [auth]);

  const triggerLogout = (event) => {
    // setBusinessDuration(event.target.value);
    // console.log('okkkk');
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div id="header">
      <section className="header_section">
        <div className="container-fluid">
          <div className="header_area">
            <a href="/">
              {" "}
              <img src="/img/egoras-logo.svg" alt="" className="header_img" />
            </a>

            <div className="buttons-login" id="buttons_login">
              {!isAuthenticated ? (
                <a href="/login" className="connect_btn1">
                  {" "}
                  <Buttons name="Login" />
                </a>
              ) : null}

              {!isAuthenticated ? (
                <a href="/signup" className="connect_btn1 cnt-bt">
                  {" "}
                  <Buttons2 name="Sign up" />
                </a>
              ) : (
                <Fragment>
                  <a
                    href="/dashboard"
                    // onClick={triggerLogout}
                    className="connect_btn1 "
                  >
                    {" "}
                    <ButtonsDashboard name="Dashboard" />
                  </a>
                  <a
                    href="#"
                    onClick={triggerLogout}
                    className="connect_btn1 cnt-bt"
                  >
                    {" "}
                    <Buttons2 onClick={triggerLogout} name="Log Out" />
                  </a>
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

// export default Header;
export default connect(mapStateToProps, {})(Header);
