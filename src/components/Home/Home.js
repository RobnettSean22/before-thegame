import React, { Component } from "react";
import "./Home.css";
import Logo from "./logo.png";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="background">
        <div className="concealer">
          <h1 className="kanjinme">
            KANJI <span>N</span> ME
          </h1>
          <input className="search-kanji" />
          <button className="search">Search</button>
        </div>
      </div>
    );
  }
}

export default Home;
