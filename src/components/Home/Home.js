import React, { Component } from "react";
import "./Home.css";
import Logo from "./logo.png";
import Rapid from "../Rapid";

class Home extends Component {
  render() {
    return (
      <div className="background">
        <div className="concealer">
          <h1 className="kanjinme">
            KANJI <span className="heart">N</span> ME
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
