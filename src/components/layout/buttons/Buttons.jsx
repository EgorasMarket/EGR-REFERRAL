import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./button.css";
export function Buttons(props) {
  return (
    <div>
      <button className="join_now_btn jb1">{props.name}</button>
    </div>
  );
}
export function Buttons3(props) {
  return (
    <div>
      <button className="join_now_btn3 ">{props.name}</button>
    </div>
  );
}
export function ButtonsDashboard(props) {
  return (
    <div>
      <button className="join_now_btn3  jb1a">
        {props.name} <ArrowForwardIcon className="double_arrow" />
      </button>
    </div>
  );
}
export function Buttons2(props) {
  return (
    <div>
      <button className="join_now_btn2 jb2">{props.name}</button>
    </div>
  );
}
