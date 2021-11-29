import React, { useEffect, useState } from "react";

import { Buttons, Buttons2 } from "./buttons/Buttons";
import "../../css/header.css";
const Header = () => {
  const windowsPath = window.location.pathname;
  const myArr = windowsPath.split("/");

  useEffect(() => {
    if (windowsPath === "/activate/" + myArr[2]) {
      document.getElementById("buttons_login").style.display = "none";
    }
    console.log(myArr);
  });

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
              <a href="/login" className="connect_btn1">
                {" "}
                <Buttons name="Login" />
              </a>
              <a href="/signup" className="connect_btn1">
                {" "}
                <Buttons2 name="Sign up" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
