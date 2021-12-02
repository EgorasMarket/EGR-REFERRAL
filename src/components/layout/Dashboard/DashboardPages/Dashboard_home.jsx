import React, { useState, useEffect } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";
import { connect } from "react-redux";
import { getTopReferrer } from "../../../../actions/getreferer";
import { getMyReferrals } from "../../../../actions/getreferer";
import axios from "axios";
import { API_URL as api_url } from "../../../../actions/types";
import { BoxLoading } from "react-loadingg";
import "../DashboardStyles/dashboard_home.css";
const Dashboard_home = () => {
  const [myReferral, setMyReferral] = useState([]);
  const [topReferral, setTopReferral] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const assets = [
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
    {
      name: "Ded****nce",
      refferals: "200",
    },
    {
      name: "hod****nce",
      refferals: "100",
    },
  ];
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
      // console.log(data.data.user);
      setMyReferral(data.data.user);
      if (data.status === 200) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    });

    axios
      .get(api_url + "/v1/user/all/top/referers", null, config)
      .then((data) => {
        // console.log(data.data.user);
        setTopReferral(data.data.allData);
        if (data.status === 200) {
          setIsLoading(false);
        } else {
          setIsLoading(true);
        }
      });

    // }
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);

  //   axios.get(api_url + "/v1/user/my/referers", null, config) &&
  //     axios
  //       .get(api_url + "/v1/user/all/top/referers", null, config)
  //       .then((data) => {
  //         console.log(data.data.user);
  //         setMyReferral(data.data.user);
  //         setTopReferral(data.data.allData);
  //         if (data.status === 200) {
  //           setIsLoading(false);
  //         } else {
  //           setIsLoading(true);
  //         }
  //       });

  //   // }
  // }, []);

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
              <div className="assets_cont1">
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
                      <th className="assets-category-titles-heading1a">Name</th>
                      <th className="assets-category-titles-heading1Last">
                        Total Referrals
                      </th>
                    </tr>
                  </thead>

                  {/* <div className="table-body-content">

// =====================
// =====================
// =====================


// =====================
// =====================
// =====================

                
              </div> */}
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
                      {" "}
                      {/* =============== */}
                      {/* =============== */}
                      {/* =============== */}
                      {topReferral.map((asset) => (
                        <tr className="assets-category-rowa">
                          <td className="assets-category-data">
                            <div className="assets-data">
                              <div className="assets-data-nameLeft">
                                {asset.firstname + asset.lastname}
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
                  {/* {{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}} */}
                </table>
                <button className="see_more_refers">See more</button>
              </div>
              <div className="assets_cont1_second">
                <div className="assets_cont1a">
                  <div className="assets_cont_heading_txt">
                    <GroupIcon className="sidebarIcona" />
                    Referrals
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

                    {/* <div className="table-body-content">

// =====================
// =====================
// =====================
// =====================
// =====================
// =====================

                
              </div> */}
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
                        {" "}
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
                    {/* {{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}} */}
                  </table>
                  <button className="see_more_refers">See all</button>
                </div>
                {/* ====================== */}
                {/* ====================== */}
                {/* ====================== */}
                <div className="egc_token_price_area">
                  <div className="egc_token_price_heading">
                    <h4 className="invite_refer_area_heading">
                      <span className="dollar_sign">$</span>
                      101.3000
                    </h4>{" "}
                    <p className="egc_price_name">EGC Price</p>
                  </div>

                  <BarChartIcon className="bar_icon" />
                </div>
              </div>
            </div>

            <div className="Invite_refer_area">
              <h4 className="invite_refer_area_heading">Invite and Earn </h4>
              <p className="invite_refer_area_para">
                For each registered user you get rewarded in egc 
              </p>

              <button className="see_more_refersa">Go to referrals</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard_home;
