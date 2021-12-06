import React, { useState, useEffect } from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import DisplayMoney from "../../../DisplayMoney";
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
  const [referralCount, setReferralCount] = useState("");
  const [noData, setNoData] = useState("no_data");
  const [noData2, setNoData2] = useState("no_data");
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

      if (data.data.user.length === 0) {
        setNoData2("data");
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

        if (data.data.allData.length === 0) {
          setNoData("data");
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
    // <div>
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
              <div className="rankings_home_cont">
                <div className="assets_cont1 ab">
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
                          Name
                        </th>
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
                  <div>
                    {" "}
                    <div className={noData == "no_data" ? "no_data" : "data"}>
                      <img src="/img/no_data.svg" alt="" />
                    </div>
                  </div>
                  <a href="/dashboard/ranking">
                    <button className="see_more_refers">See more</button>
                  </a>
                </div>

                <div className="mini_cont1 ab">
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
                      <div className="ref_num_cont">
                        <div className="circle">
                          <img
                            src="/img/circle.svg"
                            alt=""
                            className="circle_img"
                          />{" "}
                          <h4 className="refferal_count">{referralCount}</h4>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/*==================================================================================== */}
              {/*==================================================================================== */}
              {/*==================================================================================== */}
              {/*==================================================================================== */}
              {/*==================================================================================== */}
              {/*==================================================================================== */}
              <div className="assets_cont1_second">
                <div className="assets_cont1a">
                  <div className="assets_cont_heading_txt">
                    <GroupIcon className="sidebarIcona" />
                    Referrals
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

                  <div>
                    {" "}
                    <div className={noData2 == "no_data" ? "no_data" : "data"}>
                      <img src="/img/no_data.svg" alt="" />
                    </div>
                  </div>
                  <a href="/dashboard/referrals">
                    <button className="see_more_refers">See all</button>
                  </a>
                </div>
                {/* ====================== */}
                {/* ====================== */}
                {/* ====================== */}
                <div className="egc_token_price_area">
                  {/* ========== */}

                  <div className="referral_prizes">
                    Referral Contest Prize List
                  </div>
                  {/* ========== */}
                  {/* ========== */}
                  <div className="egc_token_price_heading">
                    <h6 className="price_list_position">1st </h6>
                    <h6 className="price_list_position"><DisplayMoney amount="3000000" /></h6>
                  </div>
                  <div className="egc_token_price_heading">
                    <h6 className="price_list_position">2nd </h6>
                    <h6 className="price_list_position"><DisplayMoney amount="2000000" /></h6>
                  </div>
                  <div className="egc_token_price_heading">
                    <h6 className="price_list_position">3rd </h6>
                    <h6 className="price_list_position"><DisplayMoney amount="1500000" /></h6>
                  </div>
                  <div className="egc_token_price_heading">
                    <h6 className="price_list_position">4th </h6>
                    <h6 className="price_list_position"><DisplayMoney amount="1000000" /></h6>
                  </div>
                  <div className="egc_token_price_heading">
                    <h6 className="price_list_position">5th </h6>
                    <h6 className="price_list_position"><DisplayMoney amount="500000" /></h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="Invite_refer_area">
              <h4 className="invite_refer_area_heading">Invite and Earn </h4>
              <p className="invite_refer_area_para">
                For each registered user you get rewarded in egc 
              </p>

              <a href="/dashboard/referrals">
                <button className="see_more_refersa">Go to referrals</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    // </div>
  );
};

export default Dashboard_home;
