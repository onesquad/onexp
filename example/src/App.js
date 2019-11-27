import React, { Component } from "react";
import Sidebar from "./Main/Sidebar";
import Overview from "./Main/Overview";
import { BrowserRouter as Router } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="fx-row fx-ai--start xp--wrapper">
          <Sidebar />
          <Overview />
        </div>
      </Router>
    );
  }
}
