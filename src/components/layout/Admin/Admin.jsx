import React, { useState, useEffect, useRef } from "react";

import { connect } from "react-redux";
import { getUsersData } from "../../../actions/getreferer";
import SearchIcon from "@mui/icons-material/Search";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import { API_URL as api_url } from "../../../actions/types.js";
import "../../../css/admin.css";
const Admin = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [staffData, setstaffData] = useState([]);
  // const [copySuccess, setCopySuccess] = useState("");
  // const textAreaRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [searchResults, setSearchResults] = useState([]);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(api_url + "/v1/user/all/participant/response", null, config)
      .then((data) => {
        console.log(data);
        setstaffData(data.data.allData);
        if (data.status === 200) {
          setIsLoading(false);
        } else {
          setIsLoading(true);
        }
      });

    // }
  }, []);

  // function copyToClipboard(e) {
  //   textAreaRef.current.select();
  //   document.execCommand("copy");
  //   // This is just personal preference.
  //   // I prefer to not show the whole text area selected.
  //   e.target.focus();
  //   setCopySuccess("Copied!");
  // }

  // const copyText = () => {
  //   axios
  //     .get(api_url + "/v1/user/all/participant/response", null, config)
  //     .then((data) => {
  //       //console.log(data);
  //       setstaffData(data.data.allData);
  //       if (data.status === 200) {
  //         setIsLoading(false);
  //       } else {
  //         setIsLoading(true);
  //       }
  //       data.data.allData.select();
  //       data.data.allData.setSelectionRange(0, 99999);
  //       navigator.clipboard.writeText(data.data.allData);
  //     });
  // var copyText = document.getElementById("copy_usernames");

  // var tooltip = document.getElementById("myTooltip");
  // tooltip.innerHTML = "Copied Link ";
  // tooltip.style.display = "block";
  // };

  // function outFunc() {
  //   var tooltip = document.getElementById("myTooltip");
  //   tooltip.innerHTML = "Copy to clipboard";
  //   tooltip.style.display = "none";
  // }

  // /========
  // /========
  // /========
  // useEffect(() => {
  //   const results = staffData.filter((person) =>
  //     person.username
  //       .toString()
  //       .toLowerCase()
  //       .includes(searchTerm.toLowerCase())
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  return (
    <div className="users_div">
      {isLoading ? (
        <div className="fetch">
          Fetching data{" "}
          <FontAwesomeIcon className="ml-2" icon={faSpinner} spin />
        </div>
      ) : (
        <section className="collateral-assets-section">
          <div className="container-fluid">
            <div className="assets-container">
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
                    <th className="assets-category-titles-heading1">
                      Username
                    </th>
                    <th className="assets-category-titles-heading1">
                      Twitter Handle
                    </th>
                    <th className="assets-category-titles-heading1 right">
                      Telegram Handle
                    </th>
                    <th className="assets-category-titles-heading1 right">
                      LinkedIn Handle
                    </th>
                    <th className="assets-category-titles-heading1 right">
                      Facebook Handle
                    </th>
                    <th className="assets-category-titles-heading1 right">
                      Wallet Address
                    </th>
                    <th className="assets-category-titles-heading1 right">
                      Referral hash
                    </th>
                    <th className="assets-category-titles-heading1 right">
                      Created At
                    </th>
                    {/* <th className="assets-category-titles-heading1 right">
                      Updated At
                    </th> */}
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
                  {staffData.map((asset) => (
                    <tr className="assets-category-row">
                      <td className="assets-category-data">
                        <div className="assets-data">
                          <div className="assets-data-name">
                            {asset.username}
                          </div>
                        </div>
                      </td>
                      <td className="assets-category-data1">
                        <button
                          className="assets-data-name"
                          style={{
                            border: "solid",
                            borderWidth: "1px",
                            padding: "0.3em 1em",
                            borderColor: "lightgrey",
                            background: "none",
                            borderRadius: "20px",
                          }}
                          id="copy_usernames"
                          onClick={() =>
                            navigator.clipboard.writeText(asset.twitterHandle)
                          }
                        >
                          {asset.twitterHandle}
                        </button>
                      </td>
                      <td className="assets-category-data1b">
                        <button
                          className="assets-data-name "
                          style={{
                            border: "solid",
                            borderWidth: "1px",
                            padding: "0.3em 1em",
                            borderColor: "lightgrey",
                            background: "none",
                            borderRadius: "20px",
                          }}
                          onClick={() =>
                            navigator.clipboard.writeText(asset.telegramHandle)
                          }
                        >
                          {asset.telegramHandle}
                        </button>
                      </td>
                      <td className="assets-category-data1b stable-content">
                        <button
                          className="assets-data-name "
                          style={{
                            border: "solid",
                            borderWidth: "1px",
                            padding: "0.3em 1em",
                            borderColor: "lightgrey",
                            background: "none",
                            borderRadius: "20px",
                          }}
                          onClick={() =>
                            navigator.clipboard.writeText(asset.linkedInHandle)
                          }
                        >
                          {asset.linkedInHandle}
                        </button>
                      </td>
                      <td className="assets-category-data1b ratio-content">
                        <button
                          className="assets-data-name "
                          style={{
                            border: "solid",
                            borderWidth: "1px",
                            padding: "0.3em 1em",
                            borderColor: "lightgrey",
                            background: "none",
                            borderRadius: "20px",
                          }}
                          onClick={() =>
                            navigator.clipboard.writeText(asset.facebookHandle)
                          }
                        >
                          {asset.facebookHandle}
                        </button>
                      </td>
                      <td className="assets-category-data1b ratio-content">
                        <button
                          className="assets-data-name "
                          style={{
                            border: "solid",
                            borderWidth: "1px",
                            padding: "0.3em 1em",
                            borderColor: "lightgrey",
                            background: "none",
                            borderRadius: "20px",
                          }}
                          onClick={() =>
                            navigator.clipboard.writeText(asset.mediumHandle)
                          }
                        >
                          {asset.mediumHandle}
                        </button>
                      </td>
                      <td className="assets-category-data1b ratio-content">
                        <button
                          style={{
                            border: "solid",
                            borderWidth: "1px",
                            padding: "0.3em 1em",
                            borderColor: "lightgrey",
                            background: "none",
                            borderRadius: "20px",
                          }}
                          className="assets-data-name "
                          onClick={() =>
                            navigator.clipboard.writeText(asset.referal_hash)
                          }
                        >
                          {asset.referal_hash}
                        </button>
                      </td>
                      <td className="assets-category-data1b ratio-content">
                        <div className="assets-data-name ">
                          {asset.createdAt.split("T")[0]}
                        </div>
                      </td>
                      {/* <td className="assets-category-data1b ratio-content">
                        <div className="assets-data-name ">
                          {asset.updatedAt}
                        </div>
                      </td> */}
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
            </div>
          </div>
        </section>
      )}{" "}
    </div>
  );
};
export default Admin;
