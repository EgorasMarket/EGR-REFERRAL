import React, { useEffect, useState } from "react";
import Activation from "./Forms/Activation";
import "../../css/footer.css";
// import { activa } from ".actions/Auth";
function Footer1() {
  const windowsPath = window.location.pathname;
  const myArr = windowsPath.split("/");
  useEffect(() => {
    if (windowsPath === "/signup") {
      document.getElementById("footerId").style.display = "none";
    }
    if (windowsPath === "/login") {
      document.getElementById("footerId").style.display = "none";
    }
    if (windowsPath === "/forgot-password") {
      document.getElementById("footerId").style.display = "none";
    }
    if (windowsPath === "/activate/" + myArr[2]) {
      document.getElementById("footerId").style.display = "none";
    }
    console.log(myArr);
  });

  return (
    <div id="footerId">
      <section className="footer_section">
        <div className="container">
          <div className="footer_area">
            <div className="footer_txts">
              <hr className="hr2" />
              ©️ 2021 Egoras Technologies LTD(RC - 1832671). All rights
              reserved.
            </div>
          </div>
        </div>
        <img src="/img/footer_blur.svg" alt="" className="footer_blur" />
      </section>
    </div>
  );
}

export default Footer1;
