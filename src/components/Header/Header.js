import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "../Home/Home";
import AllKanji from "../AllKanji/AllKanji";
import MyKanji from "../MyKanji/MyKanji";
import KanjiHelp from "../KanjiHelp/KanjiHelp";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import FolderContent from "../FolderContent/FolderContent";
import Study from "../Study/Study";
import { connect } from "react-redux";
import { setUser } from "../../reducer/userReducer";
import "./Header.css";
import Logo from "./logo.png";
import axios from "axios";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.logout = this.logout.bind(this);
  }

  async logout() {
    const loggedOut = axios.delete("/auth/logout");
    this.props.setUser(loggedOut.data);
  }

  render() {
    let button;
    this.props.user.user
      ? (button = (
          <NavLink
            className="direct"
            activeClassName="active"
            to="/"
            onClick={e => this.logout()}
          >
            <li>Logout</li>
          </NavLink>
        ))
      : (button = (
          <NavLink className="direct" activeClassName="active" to="/login">
            <li>Login</li>
          </NavLink>
        ));
    return (
      <div>
        <header className="nav">
          <div className="logo">
            <img className="lego" src={Logo} alt="Logo" />
          </div>
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />

              <span></span>
              <span></span>
              <span></span>

              <ul id="menu">
                <NavLink
                  className="direct"
                  activeClassName="active"
                  exact
                  to="/"
                >
                  <li>Home</li>
                </NavLink>
                <NavLink
                  className="direct"
                  activeClassName="active"
                  to="/all_kanji"
                >
                  <li>All Kanji</li>
                </NavLink>
                <NavLink
                  className="direct"
                  activeClassName="active"
                  to="/my_kanji"
                >
                  {" "}
                  <li>My Kanji</li>
                </NavLink>

                {button}
              </ul>
            </div>
          </nav>
          <div className="navlinks">
            <NavLink className="direct" activeClassName="active" exact to="/">
              Home
            </NavLink>
            <NavLink
              className="direct"
              activeClassName="active"
              to="/all_kanji"
            >
              All Ka<span className="red-n">n</span>ji
            </NavLink>
            <NavLink className="direct" activeClassName="active" to="/my_kanji">
              {" "}
              My Ka<span className="red-n">n</span>ji
            </NavLink>

            {button}
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/all_kanji" component={AllKanji} />
          <Route exact path="/my_kanji" component={MyKanji} />
          <Route exact path="/kanji_help" component={KanjiHelp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/folder_content/:user_id/:folder_id"
            component={FolderContent}
          />
          <Route
            exact
            path="/add_to_folder/:user_id/:folder_id"
            component={AllKanji}
          />
          <Route
            exact
            path="/add2_to_folder/:user_id/:folder_id"
            component={AllKanji}
          />
          <Route
            exact
            path="/add3_to_folder/:user_id/:folder_id"
            component={AllKanji}
          />
          <Route exact path="/study/:user_id/:folder_id" component={Study} />
        </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
