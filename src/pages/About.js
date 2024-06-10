import React, { Component } from "react";
import "./About.css";
import logo from '../assets/pfp.jpg';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={logo}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Ibrahim Shah</div>
            <div className="brief_description">
              Hi! I am Ibrahim and I love coding, driving in the mountains, and swimming. This summer
              I would like to learn how to surf!
            </div>
          </div>
        </div>
      </div>
    );
  }
}
