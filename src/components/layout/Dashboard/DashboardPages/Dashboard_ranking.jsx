import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import GroupIcon from "@mui/icons-material/Group";

import "../DashboardStyles/dashboard_home.css";
const Dashboard_ranking = () => {
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
                  <tbody
                    className="assets-table-body popular-categories"
                    id="popular-categories"
                  >
                    {" "}
                    {/* =============== */}
                    {/* =============== */}
                    {/* =============== */}
                    {assets.map((asset) => (
                      <tr className="assets-category-rowa">
                        <td className="assets-category-data">
                          <div className="assets-data">
                            <div className="assets-data-nameLeft">
                              {asset.name}
                            </div>
                          </div>
                        </td>
                        <td className="assets-category-data1">
                          <div className="assets-data-nameRight">
                            {asset.refferals}
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
                  {/* {{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}} */}
                </table>
                <button className="see_more_refers">See more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard_ranking;
