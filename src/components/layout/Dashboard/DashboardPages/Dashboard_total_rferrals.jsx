import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { getMyReferrals } from "../../../../actions/getreferer";
import { getMyReferralCount } from "../../../../actions/getreferer";
// import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";
import axios from "axios";
import { API_URL as api_url } from "../../../../actions/types";

import { BoxLoading } from "react-loadingg";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../DashboardStyles/dashboard_home.css";
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
const Dashboard_total_rferrals = () => {
  const [myReferral, setMyReferral] = useState([]);
  const [referralCount, setReferralCount] = useState("");
  const [copyValue, setCopyValue] = useState(
    "https://egoras.com/ref234/456763rwtfsdstxaudt5w"
  );
  const [isLoading, setIsLoading] = useState(true);
  const assets2 = [
    {
      name: "ifea****muel",
      refferals: "500",
    },
    {
      name: "Dod****nce",
      refferals: "400",
    },
    {
      name: "Dov****nce",
      refferals: "300",
    },
  ];
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    setIsLoading(true);

    axios.get(api_url + "/v1/user/my/referers", null, config).then((data) => {
      console.log(data.data.user);
      setMyReferral(data.data.user);
      if (data.status === 200) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    });
    axios.get(api_url + "/v1/user/referal/count", null, config).then((data) => {
      console.log(data.data.user.count);
      setReferralCount(data.data.user.count);
      if (data.status === 200) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    });

    // }
  }, []);

  const copyText = () => {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied Link ";
    tooltip.style.display = "block";
  };

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
    tooltip.style.display = "none";
  }
  // ========================
  // ========================
  // ========================
  // ========================
  return (
    <div className="other2">
      {/* get started section start */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* Tokens Section Start */}
      <section className=" no-bg">
        <div className="container">
          <div className="assets_area">
            <div className="assets-container column_me">
              <div className="assets_cont1 large_width">
                <div className="assets_cont_heading_txt">
                  <GroupIcon className="sidebarIcona" />
                  My referrals
                </div>
                {/* <div className="assets-cont-head-area">
              <div className="search-input">
                {" "}
                <input
                  type="search"
                  name="search"
                  id="searchCollaterals"
                  className="assets-header3"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                ></input>{" "}
                <SearchIcon className="search-icon" />
              </div>
            </div> */}
                <table className="assets-table">
                  <thead className="assets-category-titles">
                    <tr className="assets">
                      <th className="assets-category-titles-heading1a">
                        User Name
                      </th>
                      <th className="assets-category-titles-heading1Last">
                        Email Address
                      </th>
                    </tr>
                  </thead>
                  {isLoading ? (
                    <tbody>
                      <tr>
                        <td
                          colSpan="2"
                          style={{ padding: "2em", paddingBottom: "1em" }}
                        >
                          <BoxLoading />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="2" style={{ textAlign: "center" }}>
                          <span>Fetching data...</span>
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <tbody
                      className="assets-table-body popular-categories"
                      id="popular-categories"
                    >
                      {/* =============== */}
                      {/* =============== */}
                      {/* =============== */}
                      {myReferral.map((asset) => (
                        <tr className="assets-category-rowa">
                          <td className="assets-category-data">
                            <div className="assets-data">
                              <div className="assets-data-nameLeft">
                                {asset.username}
                              </div>
                            </div>
                          </td>
                          <td className="assets-category-data1">
                            <div className="assets-data-nameRight">
                              {asset.email}
                            </div>
                          </td>

                          {/* <td className="assets-category-data-last">
                    <div className="assets-data-name-last">
                      <a
                        href="#"
                        className="assets-collateralize-button"
                        style={{ border: "none" }}
                      >
                        Open Vault
                      </a>
                    </div>
                  </td> */}
                        </tr>
                      ))}
                      {/* =============== */}
                      {/* =============== */}
                      {/* =============== */}
                    </tbody>
                  )}
                  {}
                  {/* {{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}} */}
                </table>
              </div>

              {/* ======== */}
              {/* ======== */}
              {/* ======== */}
              <div className="mini_containers">
                <div className="mini_cont1">
                  <h3 className="number_of_referrals">My total referrals</h3>

                  {isLoading ? (
                    <div className="loader_div">
                      <div style={{ padding: "2em", paddingBottom: "1em" }}>
                        <BoxLoading />
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <span>Fetching data...</span>
                      </div>
                    </div>
                  ) : (
                    <div className="refferal_number_count">
                      <h4 className="refferal_count">{referralCount}</h4>
                    </div>
                  )}
                </div>
                <div className="mini_cont2">
                  <h6 className="referral_txt">
                    Invite more friends with your unique referral link and stand
                    a chance to win.
                  </h6>
                  <input
                    type="text"
                    value={copyValue}
                    className="referral_default_value"
                    id="myInput"
                  />
                  <button
                    className="ref_btn"
                    onClick={copyText}
                    onMouseOut={outFunc}
                  >
                    Copy referral link
                    <span className="tooltiptext" id="myTooltip"></span>
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

export default Dashboard_total_rferrals;
