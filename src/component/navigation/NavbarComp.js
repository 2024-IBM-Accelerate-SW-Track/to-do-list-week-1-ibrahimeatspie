import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
        </div>
      </Router>
    );
  }
}
