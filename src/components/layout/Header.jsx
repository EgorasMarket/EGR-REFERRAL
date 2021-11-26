import React from "react";

import { Buttons, Buttons2 } from "./buttons/Buttons";
import "../../css/header.css";
const Header = () => {
  return (
    <div>
      <section className="header_section">
        <div className="container-fluid">
          <div className="header_area">
            <img src="/img/egoras-logo.svg" alt="" />

            <div className="buttons-login">
              <div className="connect_btn1">
                {" "}
                <Buttons name="Login" />
              </div>
              <div className="connect_btn1">
                {" "}
                <Buttons2 name="Sign up" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
