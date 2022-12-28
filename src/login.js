import React, { Component } from "react";
import fire from "./config/fire";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="todo">
        <h1>To-Do App</h1>

        <div className="login">
          <form>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              placeholder="Unesite email"
              name="email"
              className="inp"
            ></input>{" "}
            <br />
            <br />
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder="Unesite lozinku"
              name="password"
              className="inp"
            ></input>{" "}
            <br />
            <br />
            <button onClick={this.login} className="btn1">
              Prijavi se
            </button>
            <button onClick={this.signup} className="btn1">
              Registriraj se
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
