import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';

import { Buttons, Buttons2 } from "./buttons/Buttons";
import "../../css/header.css";
const Header = ({auth}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const windowsPath = window.location.pathname;
  const myArr = windowsPath.split("/");

  useEffect(() => {
    if (windowsPath === "/activate/" + myArr[2]) {
      document.getElementById("buttons_login").style.display = "none";
    }
    console.log(myArr);
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
        setIsLoggedIn(true)
    } 
}, [auth]);

  return (
    <div>
      <section className="header_section">
        <div className="container-fluid">
          <div className="header_area">
            <a href="/">
              {" "}
              <img src="/img/egoras-logo.svg" alt="" />
            </a>

            <div className="buttons-login" id="buttons_login">
              {!isLoggedIn ? (
                <a href="/login" className="connect_btn1">
                  {" "}
                  <Buttons name="Login" />
                </a>
              ) : null}

              {!isLoggedIn ? (
                <a href="/signup" className="connect_btn1">
                  {" "}
                  <Buttons2 name="Sign up" />
                </a>
              ) : (
                <a href="/signup" className="connect_btn1">
                {" "}
                <Buttons2 name="Log Out" />
              </a>
              )}
              
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

// export default Header;
export default connect(mapStateToProps, {  })(Header);
