import React, { useState, useEffect } from "react";

import jwt from "jsonwebtoken";
import { connect } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import SecurityIcon from "@mui/icons-material/Security";
import BarChartIcon from "@mui/icons-material/BarChart";
// import ImportExportIcon from "@mui/icons-material/ImportExport";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import SwapHorizontalCircleIcon from "@mui/icons-material/SwapHorizontalCircle";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import GroupIcon from "@mui/icons-material/Group";
import { Link } from "react-router-dom";

import "./DashboardStyles/dashboard_side.css";
import "./DashboardStyles/dashboard_header.css";
// import { Authenticate } from "../auth/Authenticate";

// ==================
// ==================
// ==================
// ==================
// ==================
const DashboardSideBar = ({ auth, isAuthenticated }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeBg, setActiveBg] = useState("market");
  const [userName, setUserName] = useState("");
  const [click, setClick] = useState("drop");
  const [side, setSide] = useState("sidebar");
  const [sideWrap, setSideWrap] = useState("sidebarWrapper");
  const [openDrop, setOpenDrop] = useState("drop-open-icon");
  const [closeDrop, setCloseDrop] = useState("not-drop-close-icon");

  const changeOnclick = () => {
    if (click === "drop") {
      setClick = () => "notdrop";
    }
  };
  const changeBg = (e) => {
    let currentId = e.currentTarget.id;
    setActiveBg(currentId);
  };

  const openDropDown = () => {
    setOpenDrop("not-drop-open-icon");
    setCloseDrop("drop-close-icon");

    setSide("not-sidebar");

    setSideWrap("not-sidebarWrapper");
  };
  const closeDropDown = () => {
    setOpenDrop("drop-open-icon");
    setCloseDrop("not-drop-close-icon");
    setSide("sidebar");
    setSideWrap("sidebarWrapper");
  };
  const linksActive = window.location.pathname;

  useEffect(() => {
    if (linksActive === "/dashboard/lending") {
      setActiveBg("home");
    }
    if (linksActive === "/dashboard") {
      setActiveBg("market");
    }
    if (linksActive === "/dashboard/transaction") {
      setActiveBg("transaction");
    }
    if (linksActive === "/dashboard/ranking") {
      setActiveBg("governance");
    }
    if (linksActive === "/dashboard/tasks") {
      setActiveBg("tasks");
    }
    if (linksActive === "/dashboard/referrals") {
      setActiveBg("swap");
    }
    if (linksActive === "/dashboard/tasks") {
      setActiveBg("tasks");
    }
    if (linksActive === "/dashboard/whitepaper") {
      setActiveBg("whitepaper");
    }
  }, []);


  const currentTimestamp = new Date().getTime();
  console.log(new Date().toLocaleTimeString());

  useEffect(() => {
    // fetchDepositLinks();
    console.log(auth.user);
    if (auth.user !== null) {
      var todecoded = auth.user;
      var decoded = jwt.decode(todecoded, {
        complete: true,
      });
      setUserName(decoded.payload.user.username);
      setIsLoggedIn(true);
      
      var eee = decoded.payload.exp * 1000;
      var exp = new Date(eee).getTime();

      if (currentTimestamp >= exp) {
        // console.log('ex');
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }
  }, [auth]);

  const triggerLogout = (event) => {
    // setBusinessDuration(event.target.value);
    // console.log('okkkk');
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="side">
      <section className="DashBoardHeaderSection">
        <div className="container-fluid">
          <div className="dashboard-area">
            <div className="egrLogo2Cont3">
              {/* <img
                src="/img/open-drop-icon.svg"
                alt=""
                className={
                  openDrop == "drop-open-icon"
                    ? "drop-open-icon"
                    : "not-drop-open-icon"
                }
                id="open_icon"
                onClick={openDropDown}
              />
              <img
                src="/img/close-drop-icon.svg"
                alt=""
                className={
                  closeDrop == "not-drop-close-icon"
                    ? "not-drop-close-icon"
                    : "drop-close-icon"
                }
                id="close_icon"
                onClick={closeDropDown}
              /> */}
              <a href="/" alt="">
                <img
                  src="/img/egoras-logo.svg"
                  alt="..."
                  className="egr-logo3"
                />
              </a>

              <MenuOpenRoundedIcon
                onClick={openDropDown}
                className={
                  openDrop == "drop-open-icon"
                    ? "drop-open-icon"
                    : "not-drop-open-icon"
                }
              />
              <CloseRoundedIcon
                onClick={closeDropDown}
                className={
                  closeDrop == "not-drop-close-icon"
                    ? " not-drop-close-icon"
                    : "drop-close-icon"
                }
              />
            </div>

            {/* <Authenticate isHome="false" /> */}

            <div className="user_profile_icon_cont">
              <img
                src="/img/profile_icon.svg"
                alt=""
                className="user_profile"
              />
              <div className="welcome_user">
                Welcome
                <span className="userName_name">{userName}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={side == "sidebar" ? "not-sidebar" : "sidebar"}
        id="side_bar"
      >
        <div className="side_out"> </div>
          <div
            className={
              sideWrap == "sidebarWrapper"
                ? "not-sidebarWrapper"
                : "sidebarWrapper"
            }
            id="side_bar_wrapper"
          >
            <a href="/" alt="">
              <img
                src="/img/egoras-logo.svg"
                alt="..."
                className="egr-logo3a"
              />
            </a>
            <div className="sidebarMenu">
              {/* <h3 className="sidebarTitle">Dashboard</h3> */}
              <ul className="sidebarList">
                {/* =================== */}
                {/* =================== */}
                {/* =================== */}
                {/* =================== */}
                <Link
                  to="/dashboard"
                  id="market"
                  className="link"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "market"
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <HomeIcon className="sidebarIcon" />
                    Dashboard
                  </li>
                </Link>
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* <Link
                to="/dashboard/lending"
                id="home"
                className="link"
                onClick={changeBg}
              >
                <li
                  className={
                    activeBg == "home"
                      ? "sidebarListItem list-item-active"
                      : "sidebarListItem"
                  }

                  // "sidebarListItem list-item-active"
                >
                  <AttachMoneyIcon className="sidebarIcon" />
                  Lending
                </li>
              </Link> */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {/* <Link
                to="/dashboard/transaction"
                className="link"
                id="transaction"
                onClick={changeBg}
              >
                <li
                  className={
                    activeBg == "transaction"
                      ? "sidebarListItem list-item-active"
                      : "sidebarListItem"
                  }
                >
                  <ImportExportIcon className="sidebarIcon" />
                  Staking
                </li>
              </Link> */}

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                {/* <Link
                to="/dashboard/vault"
                className="link"
                id="vault"
                onClick={changeBg}
              >
                <li
                  className={
                    activeBg == "vault"
                      ? "sidebarListItem list-item-active"
                      : "sidebarListItem"
                  }
                >
                  <SwapHorizontalCircleIcon className="sidebarIcon" />
                  Vault
                </li>
              </Link> */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <Link
                  to="/dashboard/tasks"
                  className="link"
                  id="tasks"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "tasks"
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <PlaylistAddRoundedIcon className="sidebarIcon" />
                    Tasks
                  </li>
                </Link>
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <Link
                  to="/dashboard/ranking"
                  className="link"
                  id="governance"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "governance"
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <BarChartIcon className="sidebarIcon" />
                    Rankings
                  </li>
                </Link>

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}

                <Link
                  to="/dashboard/referrals"
                  className="link"
                  id="swap"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "swap"
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <GroupIcon className="sidebarIcon" />
                    Referrals
                  </li>
                </Link>

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* <Link
                to="/dashboard/whitepaper"
                className="link"
                id="whitepaper"
                onClick={changeBg}
              >
                <li
                  className={
                    activeBg == "whitepaper"
                      ? "sidebarListItem list-item-active"
                      : "sidebarListItem"
                  }
                >
                  <PowerSettingsNewIcon className="sidebarIcon" />
                  Logout
                </li>
              </Link> */}

                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* ===================== */}
                {/* <Link to="#" className="link" id="security" onClick={changeBg}>
              <li
                className={
                  activeBg == "security"
                    ? "sidebarListItem list-item-active"
                    : "sidebarListItem"
                }
              >
                <SecurityIcon className="sidebarIcon" />
                Security
              </li>
            </Link> */}
                {/* <a className="nav-item_link__yU0Vp" href="/staking">
              <span
                className="nav-item_linkWrapper__1IVev"
                role="button"
                tabindex="0"
              >
                <div
                  className="nav-item_spacer__3_Yzq nav-item_spacerTop__2C-7C"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                >
                  <div
                    className="nav-item_spacerInner__HJWlk"
                    style={{ backgroundColor: "rgb(28, 34, 48)" }}
                  ></div>
                </div>
                <div
                  className="nav-item_linkBody__2ilRo"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                >
                  <img src="/static/media/stake-active.62f4330e.svg" alt="" />
                  <span className="nav-item_text__1Kr9k">Staking</span>
                </div>
                <div
                  className="nav-item_spacer__3_Yzq nav-item_spacerBottom__EdM8-"
                  style={{ backgroundColor: "rgb(255, 255, 255)" }}
                >
                  <div
                    className="nav-item_spacerInner__HJWlk"
                    style={{ backgroundColor: "rgb(28, 34, 48)" }}
                  ></div>
                </div>
              </span>
            </a> */}
              </ul>
              <hr />
              <ul className="sidebarListb">
                {!isAuthenticated ? (
                  <a href="/login" className="connect_btn1">
                    {" "}
                    {/* <Buttons name="Login" /> */}
                  </a>
                ) : null}

                {/* ========= */}
                {/* ========= */}
                {/* ========= */}
                {/* {!isAuthenticated ? (
                <a href="/signup" className="connect_btn1 cnt-bt">
                  {" "}
                  <Buttons2 name="Sign up" />
                </a>
              ) : (
                <Fragment>
                  <a
                    href="/dashboard"
                    // onClick={triggerLogout}
                    className="connect_btn1 "
                  >
                    {" "}
                    <ButtonsDashboard name="Dashboard" />
                  </a>
                  <a
                    href="#"
                    onClick={triggerLogout}
                    className="connect_btn1 cnt-bt"
                  >
                    {" "}
                    <Buttons2 onClick={triggerLogout} name="Log Out" />
                  </a>
                </Fragment>
              )} */}

                {/* ========= */}
                {/* ========= */}
                {/* ========= */}
                <Link
                  to="/dashboard/whitepaper"
                  className="link"
                  id="whitepaper"
                  onClick={changeBg}
                >
                  <li
                    className={
                      activeBg == "whitepaper"
                        ? "sidebarListItem list-item-active"
                        : "sidebarListItem"
                    }
                  >
                    <PowerSettingsNewIcon className="sidebarIcon" />
                    Logout
                  </li>
                </Link>
              </ul>
            </div>
          </div>
      
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, {})(DashboardSideBar);
