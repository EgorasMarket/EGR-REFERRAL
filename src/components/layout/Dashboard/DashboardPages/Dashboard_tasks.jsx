import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import {
  getMyReferrals,
  getSocialHandles,
} from "../../../../actions/getreferer";
import { CloseIcon } from "../../icons/CloseIcon";
import { setAlert } from "../../../../actions/alert";
import jwt from "jsonwebtoken";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import GroupIcon from "@mui/icons-material/Group";
// import axios from "axios";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import { API_URL as api_url } from "../../../../actions/types";

import { BoxLoading } from "react-loadingg";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../DashboardStyles/dashboard_home.css";
import "../DashboardStyles/dasboard_tasks.css";
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
// ==============================
const Dashboard_tasks = ({ getSocialHandles, auth }) => {
  const [username, setGetUsername] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading3, setIsLoading3] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [disable, setDisable] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState("not_error_message_div");
  const [errorMessage1, setErrorMessage1] = useState("not_error_message_div1");
  const [errorMessage2, setErrorMessage2] = useState("not_error_message_div2");

  const [errorMessage3, setErrorMessage3] = useState("not_error_message_div3");
  const [userData, setUserData] = useState({
    // username: getUsername,
    twitterHandle: "",
    telegramHandle: "",
    linkedInHandle: "",
    facebookHandle: "",
    // walletAddress: "0xd68edd5c52f7563486cc1a15d00efa12c8644a907e",
    // applicant_businessAddress: "",
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const {
    // username,
    twitterHandle,
    telegramHandle,
    linkedInHandle,
    facebookHandle,
    // walletAddress,
  } = userData;
  // ======
  // ======
  // ======
  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });

    if (e.target.value === "") {
      console.log("input something here");
    } else {
      console.log("something is here");
    }

    const { name, value, id } = e.target;

    switch (name) {
      case "twitterHandle":
        // code block
        if (e.target.value === "") {
          console.log("input something here");
          setErrorMessage("error_message_div");
        } else {
          console.log("something is here");
          setErrorMessage("not_error_message_div");
        }

        break;
      case "telegramHandle":
        if (e.target.value === "") {
          console.log("input something here");
          setErrorMessage1("error_message_div1");
        } else {
          console.log("something is here");
          setErrorMessage1("not_error_message_div1");
        }
        // code block
        break;
      case "facebookHandle":
        // code block
        if (e.target.value === "") {
          console.log("input something here");
          setErrorMessage2("error_message_div2");
        } else {
          console.log("something is here");
          setErrorMessage2("not_error_message_div2");
        }

        break;
      case "linkedInHandle":
        // code block
        if (e.target.value === "") {
          console.log("input something here");
          setErrorMessage3("error_message_div3");
        } else {
          console.log("something is here");
          setErrorMessage3("not_error_message_div3");
        }

        break;
      default:
      // code block
    }

    if (twitterHandle === "") {
      setDisable(true);
    } else if (telegramHandle === "") {
      setDisable(true);
    } else if (linkedInHandle === "") {
      setDisable(true);
    } else if (facebookHandle === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  useEffect(() => {
    // fetchDepositLinks();
    console.log(auth.user);
    if (auth.user !== null) {
      var todecoded = auth.user;
      var decoded = jwt.decode(todecoded, {
        complete: true,
      });

      console.log("====================================");
      console.log(decoded.payload.user.username);
      console.log("====================================");
      setGetUsername(decoded.payload.user.username);
      // setIsLoggedIn(true);
    }
  }, [auth]);

  useEffect(() => {
    if (twitterHandle === "") {
      setDisable(true);
    } else if (telegramHandle === "") {
      setDisable(true);
    } else if (linkedInHandle === "") {
      setDisable(true);
    } else if (facebookHandle === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  });

  // =========
  // =========

  const submitData = async (e) => {
    console.log("====================================");
    console.log(username);
    console.log("====================================");
    setIsLoading3(true);
    if (
      twitterHandle === "" &&
      telegramHandle === "" &&
      facebookHandle === "" &&
      linkedInHandle === ""
    ) {
      console.log("please supply");
      setErrorMessage("error_message_div");
      setErrorMessage1("error_message_div1");
      setErrorMessage2("error_message_div2");
      setErrorMessage3("error_message_div3");
    } else if (twitterHandle === "") {
      console.log("please supply");
      setErrorMessage("error_message_div");
    } else if (telegramHandle === "") {
      console.log("please supply");
      setErrorMessage1("error_message_div1");
    } else if (facebookHandle === "") {
      console.log("please supply");
      setErrorMessage2("error_message_div2");
    } else if (linkedInHandle === "") {
      console.log("please supply");
      setErrorMessage3("error_message_div3");
    } else {
      setErrorMessage("not_error_message_div");
      setErrorMessage1("not_error_message_div1");
      setErrorMessage2("not_error_message_div2");
      setErrorMessage3("not_error_message_div3");
      let res = await getSocialHandles({
        // username,
        twitterHandle,
        telegramHandle,
        linkedInHandle,
        facebookHandle,
        // walletAddress,
      });

      console.log(res);

      if (res.success === true) {
        setIsSuccessful(true);
        setUserData({
          twitterHandle: "",
          telegramHandle: "",
          linkedInHandle: "",
          facebookHandle: "",
        });
      } else {
        setAlert(res.data[0].msg, "danger");
      }
    }
  };

  function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

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
              <div className="assets_cont1 large_width flex_us">
                <div className="tasks_details">
                  <div className="assets_cont_heading_txt">
                    <PlaylistAddRoundedIcon className="sidebarIcona" />
                    Tasks
                    <p className="tasks_caption">
                      In order to participate in this referral contest you need
                      to fulfil the below requirements:
                    </p>
                  </div>

                  <div className="tasks_write_up">
                    <h6
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      Follow Egoras Twitter Account
                    </h6>

                    <a
                      href="https://twitter.com/egorasmarket?t=9Gj3dQJUiPLzpq7bfoOGBg&s=09"
                      className="link_btn"
                    >
                      Follow @egorasmarket
                    </a>
                  </div>
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  <div className="tasks_write_up">
                    <h6
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      Retweet pinned post
                    </h6>

                    <a href="#" className="link_btn">
                      Follow @Egoras
                    </a>
                  </div>
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  <div className="tasks_write_up">
                    <h6
                      s
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      Follow Egoras/ Facebook Page{" "}
                    </h6>

                    <a
                      href="https://www.facebook.com/egorasmarket/"
                      className="link_btn"
                    >
                      Follow @Egoras
                    </a>
                  </div>
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  <div className="tasks_write_up">
                    <h6
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      Subscribe to Egoras youtube account
                    </h6>

                    <a
                      href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ"
                      className="link_btn"
                    >
                      Follow @Egoras
                    </a>
                  </div>
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  <div className="tasks_write_up">
                    <h6
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      Join our network on Linkedin
                    </h6>

                    <a
                      href="https://www.linkedin.com/company/egorasmarket/mycompany/"
                      className="link_btn"
                    >
                      Follow @Egoras
                    </a>
                  </div>
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  <div className="tasks_write_up">
                    <h6
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        fontWeight: "700",
                      }}
                    >
                      {" "}
                      Join Egoras Telegram Channel
                    </h6>

                    <a href="https://t.me/egorasmarket" className="link_btn">
                      Follow @Egoras
                    </a>
                  </div>
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}

                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                  {/* ======================= */}
                </div>
                {/* ========================= */}
                {/* ========================= */}
                {/* ========================= */}
                {/* ========================= */}
                {/* ========================= */}
                {/* ========================= */}
                {/* ========================= */}
                {/* ========================= */}
                {/*========= modal div start============ */}
                {!isSuccessful ? (
                  <div className="tasks_inputs">
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    <div className="modal_form_area1">
                      <div className="modal_form_area1_input_heading">
                        Twitter Handle
                      </div>
                      <input
                        type="text"
                        placeholder="@JohnDoe "
                        id="twitterHandle"
                        name="twitterHandle"
                        value={twitterHandle}
                        onChange={onChange}
                        className="modal_form_area1_input1"
                      />
                      <div
                        className={
                          errorMessage == "not_error_message_div"
                            ? "not_error_message_div"
                            : "error_message_div"
                        }
                      >
                        Please input at least 1 character.
                      </div>
                    </div>
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    <div className="modal_form_area1">
                      <div className="modal_form_area1_input_heading">
                        Telegram Handle
                      </div>
                      <input
                        type="text"
                        id="telegramHandle"
                        placeholder="@JohnDoe "
                        name="telegramHandle"
                        value={telegramHandle}
                        onChange={onChange}
                        className="modal_form_area1_input1"
                      />
                      <div
                        className={
                          errorMessage1 == "not_error_message_div1"
                            ? "not_error_message_div1"
                            : "error_message_div1"
                        }
                      >
                        Please input at least 1 character.
                      </div>
                    </div>
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    <div className="modal_form_area1">
                      <div className="modal_form_area1_input_heading">
                        Facebook Handle
                      </div>
                      <input
                        type="text"
                        id="facebookHandle"
                        placeholder="JohnDoe12 "
                        name="facebookHandle"
                        value={facebookHandle}
                        onChange={onChange}
                        className="modal_form_area1_input1"
                      />
                      <div
                        className={
                          errorMessage2 == "not_error_message_div2"
                            ? "not_error_message_div2"
                            : "error_message_div2"
                        }
                      >
                        Please input at least 1 character.
                      </div>
                    </div>
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    <div className="modal_form_area1">
                      <div className="modal_form_area1_input_heading">
                        LinkedIn Handle
                      </div>
                      <input
                        type="text"
                        id="linkedInHandle"
                        placeholder="@JohnDoe "
                        name="linkedInHandle"
                        value={linkedInHandle}
                        onChange={onChange}
                        className="modal_form_area1_input1"
                      />
                      <div
                        className={
                          errorMessage3 == "not_error_message_div3"
                            ? "not_error_message_div3"
                            : "error_message_div3"
                        }
                      >
                        Please input at least 1 character.
                      </div>
                    </div>

                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}

                    <div className="note_area">
                      I understand and acknowledge that fulfilling the
                      aforementioned conditions DOES NOT guarantee success as
                      the winners will be determined solely by the contest
                      committee according to their selection criteria.
                      <div className="custom_radio_btn">
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round"></span>
                        </label>
                      </div>
                    </div>
                    {/* ========== */}
                    {/* ========== */}
                    {/* <button
                      type="submit"
                      onClick={submitData}
                      className="generate_ref_link linear-color w-100"
                    >
                      Submit
                    </button> */}
                    <button
                      type="submit"
                      className="generate_ref_link linear-color w-100"
                      onClick={submitData}
                      disabled={disable}
                      // disabled={isLoading ? "true" : null}
                      // value="Login"
                    >
                      {isLoading3 ? (
                        <span>
                          Submitting{" "}
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faSpinner}
                            spin
                          />
                        </span>
                      ) : (
                        <span> Submit</span>
                      )}{" "}
                    </button>
                    {/* ===== */}
                    {/* ===== */}
                    {/* ===== */}

                    {/* ===== */}
                    {/* ===== */}
                    {/* ===== */}
                    {/* ===== */}

                    {/* <div className="copy_referral_link"> */}
                    {/* <div className="tooltip">
                    <button onclick={myFunction} onmouseout={outFunc}>
                      <span className="tooltiptext" id="myTooltip">
                        Copy to clipboard
                      </span>
                      Copy text
                    </button>
                  </div> */}
                    {/* </div> */}
                    {/* <div className="referral_area">
                    <div className="referral_heading">
                      Invite People to get 30% EGR on every airdrop.
                    </div>
                    <div className="modal_form_area1"></div>
                    <button className="generate_ref_link w-100">
                      Get Ref Link
                    </button>
                  </div> */}
                  </div>
                ) : (
                  <div className="tasks_inputs">
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    <div className="modal_form_area1">
                      <div className="modal_form_area1_input_heading">
                        Twitter Handle
                      </div>
                      <input
                        type="text"
                        placeholder="@JohnDoe "
                        id="twitterHandle"
                        name="twitterHandle"
                        value={twitterHandle}
                        onChange={onChange}
                        className="modal_form_area1_input1"
                      />
                      <div
                        className={
                          errorMessage == "not_error_message_div"
                            ? "not_error_message_div"
                            : "error_message_div"
                        }
                      >
                        Please input at least 1 character.
                      </div>
                    </div>
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    <div className="modal_form_area1">
                      <div className="modal_form_area1_input_heading">
                        Telegram Handle
                      </div>
                      <input
                        type="text"
                        id="telegramHandle"
                        placeholder="@JohnDoe "
                        name="telegramHandle"
                        value={telegramHandle}
                        onChange={onChange}
                        className="modal_form_area1_input1"
                      />
                      <div
                        className={
                          errorMessage1 == "not_error_message_div1"
                            ? "not_error_message_div1"
                            : "error_message_div1"
                        }
                      >
                        Please input at least 1 character.
                      </div>
                    </div>
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    <div className="modal_form_area1">
                      <div className="modal_form_area1_input_heading">
                        Facebook Handle
                      </div>
                      <input
                        type="text"
                        id="facebookHandle"
                        placeholder="JohnDoe12 "
                        name="facebookHandle"
                        value={facebookHandle}
                        onChange={onChange}
                        className="modal_form_area1_input1"
                      />
                      <div
                        className={
                          errorMessage2 == "not_error_message_div2"
                            ? "not_error_message_div2"
                            : "error_message_div2"
                        }
                      >
                        Please input at least 1 character.
                      </div>
                    </div>
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    {/* ========= */}
                    <div className="modal_form_area1">
                      <div className="modal_form_area1_input_heading">
                        LinkedIn Handle
                      </div>
                      <input
                        type="text"
                        id="linkedInHandle"
                        placeholder="@JohnDoe "
                        name="linkedInHandle"
                        value={linkedInHandle}
                        onChange={onChange}
                        className="modal_form_area1_input1"
                      />
                      <div
                        className={
                          errorMessage3 == "not_error_message_div3"
                            ? "not_error_message_div3"
                            : "error_message_div3"
                        }
                      >
                        Please input at least 1 character.
                      </div>
                    </div>

                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}
                    {/* ========== */}

                    <div className="activation_div no_bg">
                      <img
                        src="/img/activate.svg"
                        alt=""
                        className="activate_img"
                      />
                      <h1>Success</h1>
                      <div className="">
                        Your entry have been successfully recorded.
                      </div>
                    </div>

                    {/* ===== */}
                    {/* ===== */}
                    {/* ===== */}
                    {/* ===== */}
                    {/* ===== */}
                    {/* ===== */}
                    {/* ===== */}

                    {/* <div className="copy_referral_link"> */}
                    {/* <div className="tooltip">
                    <button onclick={myFunction} onmouseout={outFunc}>
                      <span className="tooltiptext" id="myTooltip">
                        Copy to clipboard
                      </span>
                      Copy text
                    </button>
                  </div> */}
                    {/* </div> */}
                    {/* <div className="referral_area">
                    <div className="referral_heading">
                      Invite People to get 30% EGR on every airdrop.
                    </div>
                    <div className="modal_form_area1"></div>
                    <button className="generate_ref_link w-100">
                      Get Ref Link
                    </button>
                  </div> */}
                  </div>
                )}

                {/* ========================= */}
                {/* ========================= */}
                {/* ========================= */}
                {/* ========================= */}
                {/* ========================= */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getSocialHandles })(Dashboard_tasks);
