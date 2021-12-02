import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import jwt from "jsonwebtoken";

import PropTypes from "prop-types";

import { Buttons, Buttons3 } from "./buttons/Buttons";
import { CloseIcon } from "./icons/CloseIcon";
// import { CloseIcon } from "./icons/CloseIcon";
import "./Forms/forms.css";

import "../../css/landing.css";

import { getLoginAuthentication } from "../../actions/Auth";
import { getSocialHandles } from "../../actions/getreferer";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Landing = ({
  getSocialHandles,
  setAlert,
  auth,
  getLoginAuthentication,
}) => {
  const [openModal, setOpenModal] = useState("not_modal_form_section");
  const [openModal2, setOpenModal2] = useState("not_modal_form_section");
  const [errorMessage, setErrorMessage] = useState("not_error_message_div");
  const [errorMessage1, setErrorMessage1] = useState("not_error_message_div1");
  const [errorMessage2, setErrorMessage2] = useState("not_error_message_div2");
  const [errorMessage3, setErrorMessage3] = useState("not_error_message_div3");
  const [openJoin, setOpenJoin] = useState("button");
  const [visibility, setVisibility] = useState(false);
  const [passImg, setPassImg] = useState("show_pass");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [getUsername, setGetUsername] = useState("");

  useEffect(() => {
    // fetchDepositLinks();

    if (auth.user !== null) {
      var todecoded = auth.user;
      var decoded = jwt.decode(todecoded, {
        complete: true,
      });
      setGetUsername(decoded.payload.user.username);
      setIsLoggedIn(true);
    }
  }, [auth]);

  const [userAuth, setUserAuth] = useState({
    email: "",
    password: "",
    // applicant_businessAddress: "",
  });

  const { email, password } = userAuth;

  const [userData, setUserData] = useState({
    username: getUsername,
    twitterHandle: "",
    telegramHandle: "",
    linkedInHandle: "",
    facebookHandle: "",
    walletAddress: "0xd68edd5c52f7563486cc1a15d00efa12c8644a907e",
    // applicant_businessAddress: "",
  });

  const {
    username,
    twitterHandle,
    telegramHandle,
    linkedInHandle,
    facebookHandle,
    walletAddress,
  } = userData;

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
  };

  const onChange1 = (e) => {
    setUserAuth({ ...userAuth, [e.target.name]: e.target.value });
  };

  // const first = "Test String";

  const submitData = async (e) => {
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
        username,
        twitterHandle,
        telegramHandle,
        linkedInHandle,
        facebookHandle,
        walletAddress,
      });

      console.log(res);

      if (res.success === true) {
        setIsSuccessful(true);
      } else {
        setAlert(res.data[0].msg, "danger");
      }
    }
  };

  const submitData1 = async (e) => {
    // setAlert('Check your internet connection', 'danger');
    console.log(email, password);
    console.log("okay Good look at me");
    setIsLoading2(true);

    let res = await getLoginAuthentication({
      email,
      password,
    });
    console.log(res);
    if (res === undefined) {
      setAlert("Check your internet connection", "danger");
      setIsLoading2(false);
    } else {
      if (res.data.success === true) {
        setIsLoading2(false);
        // return <Redirect to="/" />;
        // return window.location.replace("/");
        setIsLoggedIn(true);
        setOpenModal("not_modal_form_section");
        setOpenModal2("modal_form_section");
      } else {
        setAlert(res.data.data.errors[0].msg, "danger");
        setIsLoading2(false);
        // console.log('res.data.errorMessage');
        // setIsLoading(false);
      }
    }
  };

  const setPasswordVisibilty = () => {
    setVisibility(true);
    setPassImg("hide_pass");
  };
  const closetPasswordVisibilty = () => {
    setVisibility(false);
    setPassImg("show_pass");
  };

  const toggleCloseIcon = () => {
    setOpenModal("not_modal_form_section");
    setOpenModal2("not_modal_form_section");
  };
  const toggleOpenIcon = () => {
    // setOpenModal("modal_form_section");
    // setOpenModal2("not_modal_form_section");

    if (isLoggedIn) {
      setOpenModal2("modal_form_section");
    } else {
      setOpenModal("modal_form_section");
    }
  };
  // const toggleCloseIcon2 = () => {
  //   setOpenModal("not_modal_form_section");
  // };
  // const toggleOpenIcon2= () => {
  //   setOpenModal("modal_form_section");
  // };

  return (
    <div>
      <section className="landing_section">
        <div className="container">
          <div className="landing_area">
            <div className="landing_area_txts">
              <h1 className="landing_area_txts_heading">
                REFERRAL CONTEST WITH EGORAS.
              </h1>
              <p className="landing_area_txts_sub_heading">
                EARN MASSIVELY WITH EGR TOKEN.....
              </p>
              <p className="landing_area_txts_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                porro iusto consequatur sit minima, neque natus impedit amet
                deleniti aliquam!
              </p>
              {/* <div
                className={openJoin == "button" ? "button" : "not_button"}
                onClick={toggleOpenIcon}
              >
                <Buttons3 name="Join Now" />
              </div> */}
            </div>
            <div className="landing_area_img">
              <img src="/img/hero_image.svg" alt="" className="hero_img" />
            </div>
          </div>
        </div>
        <img src="/img/big_hero-1.png" alt="" className="big_hero_img" />
        <img src="/img/spiky-circle.png" alt="" className="big_hero_img2" />
        <img src="/img/bg-hero-dots.svg" alt="" className="big_hero_img3" />
      </section>
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* Partners Section start  */}
      <section className="gtpartnersSection">
        <div className="container">
          {/* <div className="gttitleLine"></div>
          <div className="gthowItWorksTitle">
            <h1 className="gttitle">Our Partners</h1>
          </div> */}
          <div className="gtPartnersArea">
            <div className="gtpatLogo">
              <a href="https://paidnetwork.com/" target="blank">
                <img
                  src="/img/partners/PAIDNETWORK.svg"
                  alt=""
                  className="gtpartnerLogos   paid"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://yellowroad.app/" target="blank">
                <img
                  src="/img/partners/yellow-road-white.svg"
                  alt=""
                  className="gtpartnerLogos yellow"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://www.threem.capital/" target="blank">
                <img
                  src="/img/partners/threecapital-black.svg"
                  alt=""
                  className="gtpartnerLogos three"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://buidlhodl.capital/" target="blank">
                <img
                  src="/img/partners/build-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos build"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://exnetwork.community/" target="blank">
                <img
                  src="/img/partners/ex-capital-white.svg"
                  alt=""
                  className="gtpartnerLogos ex"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://ferrum.network/" target="blank">
                <img
                  src="/img/partners/ferrum-network-white.svg"
                  alt=""
                  className="gtpartnerLogos ferrum"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://titans.ventures/" target="blank">
                <img
                  src="/img/partners/TITANS2.svg"
                  alt=""
                  className="gtpartnerLogos titans"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://www.juncapital.io/" target="blank">
                <img
                  src="/img/partners/jun-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos jun"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://nuls.medium.com/" target="blank">
                <img
                  src="/img/partners/NULS.svg"
                  alt=""
                  className="gtpartnerLogos nuls"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://launchpool.xyz/" target="blank">
                <img
                  src="/img/partners/launchpooldark-image.svg"
                  alt=""
                  className="gtpartnerLogos launch"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="https://www.mantradao.com/" target="blank">
                <img
                  src="/img/partners/mantra-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/resurgence-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/QUIVERX.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/propel-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/blackdragon-dark.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/n3rd-logo-white.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/MUTUALBENEFITS.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/skyfast-dark.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/chaos-black.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/aussie-black.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/ventures-black.svg"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
            <div className="gtpatLogo">
              <a href="#" target="blank">
                <img
                  src="/img/partners/everse-logo-1.png"
                  alt=""
                  className="gtpartnerLogos  mantra"
                />
              </a>
            </div>
          </div>
        </div>

        <img
          src="/img/partner-circle.svg"
          alt=""
          className="gtpartnersCircle"
        />
      </section>
      {/* Partners Section end  */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/*========= modal div start============ */}
      <div>
        <section
          className={
            openModal2 == "not_modal_form_section"
              ? "not_modal_form_section"
              : "modal_form_section"
          }
        >
          <div className="container">
            {!isSuccessful ? (
              <div className="form_area">
                <div className="modal_form_head" onClick={toggleCloseIcon}>
                  Join $600k+ EGR Airdrop!
                  <CloseIcon />
                </div>

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
                <button
                  type="submit"
                  onClick={submitData}
                  className="generate_ref_link"
                >
                  Submit
                </button>
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                {/* ===== */}
                <div className="referral_area">
                  <div className="referral_heading">
                    Invite People to get 30% EGR on every airdrop.
                  </div>
                  <div className="modal_form_area1"></div>
                  <button className="generate_ref_link">Get Ref Link</button>
                </div>
              </div>
            ) : (
              <div className="form_area">
                <div className="modal_form_head" onClick={toggleCloseIcon}>
                  Join $600k+ EGR Airdrop!
                  <CloseIcon />
                </div>

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
              </div>
            )}
          </div>
        </section>{" "}
        {/* ========================= */}
        {/* ========================= */}
        {/* ========================= */}
        {/* ========================= */}
        {/* ========================= */}
        {/* ========================= */}
        {/* ========================= */}
        <section
          className={
            openModal == "not_modal_form_section"
              ? "not_modal_form_section"
              : "modal_form_section"
          }
        >
          <div className="container">
            <div className="form_area2">
              <div className="modal_form_head" onClick={toggleCloseIcon}>
                Login to continue
                <CloseIcon />
              </div>

              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              <form class="sign_up_form2" action="/action_page.php">
                <label for="email"></label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  required
                  className="input_me2"
                  value={email}
                  onChange={onChange1}
                />

                <label for="psw"></label>
                <div className="input_area_field">
                  <input
                    type={visibility ? "text" : "password"}
                    placeholder="Enter Password"
                    name="password"
                    required
                    className="input_me2 show"
                    value={password}
                    onChange={onChange1}
                    placeholder="***********"
                    minLength="8"
                  />

                  <div className="show_pass_div">
                    <img
                      src="/img/show-icon.svg"
                      alt=""
                      onClick={setPasswordVisibilty}
                      className={
                        passImg == "show_pass" ? "show_pass" : "not_show_pass"
                      }
                    />
                    <img
                      src="/img/close-pass.svg"
                      alt=""
                      onClick={closetPasswordVisibilty}
                      className={
                        passImg == "hide_pass" ? "hide_pass" : "not_hide_pass"
                      }
                    />
                  </div>
                </div>

                <div className="forgot_link2">
                  <a href="/forgot-password" className="forgot_password">
                    Forgot Password?
                  </a>
                </div>
              </form>
              {/* ========== */}
              {/* ========== */}
              {/* ========== */}

              <div className="sign_up_btns sign_up_login">
                <button
                  type="submit"
                  className="signupbtn"
                  onClick={submitData1}
                  // disabled={disable}
                  // disabled={isLoading ? "true" : null}
                  value="Login"
                >
                  {isLoading ? (
                    <span>
                      Logging in{" "}
                      <FontAwesomeIcon className="ml-2" icon={faSpinner} spin />
                    </span>
                  ) : (
                    <span>Login</span>
                  )}{" "}
                </button>
              </div>
              {/* ========== */}
              {/* ===== */}
              {/* ===== */}
              {/* ===== */}
              {/* ===== */}
              {/* ===== */}
              {/* ===== */}
              {/* ===== */}
            </div>
          </div>
        </section>{" "}
      </div>
      {/*========= modal div end============ */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
    </div>
  );
};

Landing.propTypes = {
  getLoginAuthentication: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  // isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getSocialHandles,
  getLoginAuthentication,
  setAlert,
})(Landing);
