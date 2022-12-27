import React, { Component } from "react";
import "./header.css";
import fire from "../config/fire";

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {};
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="header-div1">
        <div className="header-title">
          <h1>To-Do List</h1>
        </div>
        <div>
          <button className="logout-btn" onClick={this.logout}>
            Odjavi se
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
