import React, { Component } from "react";
import axios from "axios";
import { setUser } from "../../reducer/userReducer";
import { connect } from "react-redux";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.register = this.register.bind(this);
  }

  async register() {
    const { username, password, email } = this.state;
    const registerUser = await axios.post("/auth/register", {
      username,
      password,
      email
    });
    console.log(2222, registerUser);
    this.props.setUser(registerUser.data);
    this.props.history.push("/my_kanji");
  }

  render() {
    const { username, password, email } = this.state;

    return (
      <div className="background">
        <div className="signup-container">
          <form
            onSubmit={e => {
              this.register();
            }}
          >
            <div className="signup-label-container">
              <label className="top-label">
                My Ka<span className="signup-n">n</span>ji Register
              </label>
            </div>
            <label className="username acu">Username:</label>
            <input
              className="signup-input top-signup-input ui"
              value={username}
              onChange={e =>
                this.setState({
                  username: e.target.value
                })
              }
            />
            <label className="username pw">Password:</label>
            <input
              className="signup-input pwi"
              type="password"
              value={password}
              onChange={e =>
                this.setState({
                  password: e.target.value
                })
              }
            />
            <label className="username em">Email:</label>
            <input
              className="signup-input emi"
              type="email"
              value={email}
              onChange={e =>
                this.setState({
                  email: e.target.value
                })
              }
            />
            <div>
              <button className="signup-button">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
