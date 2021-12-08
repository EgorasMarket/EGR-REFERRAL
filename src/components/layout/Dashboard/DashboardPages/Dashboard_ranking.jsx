import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { getTopReferrer } from "../../../../actions/getreferer";
import BarChartIcon from "@mui/icons-material/BarChart";
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
const Dashboard_ranking = () => {
  const [topReferral, setTopReferral] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noData, setNoData] = useState("no_data");

  //   const assets = [
  //     {
  //       name: "ifea****muel",
  //       refferals: "500",
  //     },
  //     {
  //       name: "Dod****nce",
  //       refferals: "400",
  //     },
  //     {
  //       name: "Dov****nce",
  //       refferals: "300",
  //     },
  //     {
  //       name: "Ded****nce",
  //       refferals: "200",
  //     },
  //     {
  //       name: "hod****nce",
  //       refferals: "100",
  //     },
  //   ];
  //   const assets2 = [
  //     {
  //       name: "ifea****muel",
  //       refferals: "500",
  //     },
  //     {
  //       name: "Dod****nce",
  //       refferals: "400",
  //     },
  //     {
  //       name: "Dov****nce",
  //       refferals: "300",
  //     },
  //   ];

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(api_url + "/v1/user/all/top/referers", null, config)
      .then((data) => {
        // console.log(data.data.allData[0].firstname);
        // let initial = data.data.allData.firstname.match(/\b(\w)/g).join("mama");
        // console.log(initial);
        setTopReferral(data.data.allData);
        if (data.status === 200) {
          setIsLoading(false);
        } else {
          setIsLoading(true);
        }

        if (data.data.allData.length === 0) {
          setNoData("data");
        }
      });

    // }
  }, []);
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
            <div className="assets-container">
              <div className="assets_cont1 large_width">
                <div className="assets_cont_heading_txt">
                  <BarChartIcon className="sidebarIcona" />
                  Rankings
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
                        Username
                      </th>
                      <th className="assets-category-titles-heading1Last">
                        Total Referrals
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
                      {topReferral.map((asset) => (
                        <tr className="assets-category-rowa">
                          <td className="assets-category-data">
                            <div className="assets-data">
                              <div className="assets-data-nameLeft">
                                {asset.username.substring(0, 1) +
                                  "****" +
                                  asset.username.substr(
                                    asset.username.length - 2
                                  )}
                              </div>
                            </div>
                          </td>
                          <td className="assets-category-data1">
                            <div className="assets-data-nameRight">
                              {asset.counts}
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
                <div>
                  {" "}
                  <div className={noData == "no_data" ? "no_data" : "data"}>
                    <img src="/img/no_data.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard_ranking;
