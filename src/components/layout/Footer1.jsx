import React from "react";

import "../../css/footer.css";
function Footer1() {
  return (
    <div>
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
