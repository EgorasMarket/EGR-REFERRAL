import React from "react";
import "./button.css";
export function Buttons(props) {
  return (
    <div>
      <button className="join_now_btn">{props.name}</button>
    </div>
  );
}
export function Buttons2(props) {
  return (
    <div>
      <button className="join_now_btn2">{props.name}</button>
    </div>
  );
}
