import React from "react";
import './bg.css';

export default function Background() {
  return (
    <React.Fragment>
      <div className="background-container">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
        alt="111"
      ></img>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      </div>
    </React.Fragment>
  );
}
