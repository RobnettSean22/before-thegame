import React, { Component } from "react";
import "./Home.css";
import Logo from "./logo.png";
import Rapid from "../Rapid";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      allKanji: []
    };
  }
  readAllKanji() {
    Rapid.get("/kanji/all").then(response => {
      this.setState({
        allKanji: response.data
      });
    });
  }
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
