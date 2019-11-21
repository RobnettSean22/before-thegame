import React, { Component } from "react";
import Rapid from "../Rapid";
import "./AllKanji.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../reducer/kanjiReducer";
class AllKanji extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      allKanji: [],
      add: [],
      add2: [],
      add3: []
    };
  }
  componentDidMount() {
    this.readAllKanji();
  }

  readAllKanji() {
    Rapid.get("/kanji/all").then(response => {
      this.setState({
        allKanji: response.data
      });
    });
  }

  addKanji(user_id, folder_id, index_number) {
    axios
      .post(`/api/add_kanji/${user_id}/${folder_id}`, { index_number })
      .then(response => {
        this.setState({
          add: response.data
        });
      });
    this.notify();
  }

  addKanji2(user_id, folder_id, index_number) {
    axios
      .post(`/api/add2_kanji/${user_id}/${folder_id}`, { index_number })
      .then(response => {
        this.setState({
          add2: response.data
        });
      });
    this.notify();
  }

  addKanji3(user_id, folder_id, index_number) {
    axios
      .post(`/api/add3_kanji/${user_id}/${folder_id}`, { index_number })
      .then(response => {
        this.setState({
          add3: response.data
        });
      });
    this.notify();
  }

  notify = () => toast("It shall be so");

  done() {
    this.props.history.push(
      `/folder_content/${this.props.user.user.user_id}/${+this.props.match
        .params.folder_id}`
    );
  }

  render() {
    console.log(this.props.match.params.folder_name);

    console.log(
      "this data will be added top the " + this.props.location.state + " folder"
    );
    console.log(this.state.add2);
    console.log(this.state.add);
    const { allKanji, search } = this.state;
    console.log(allKanji);
    let filteredKanji = allKanji
      .filter(kanjiObj => {
        return (
          kanjiObj.kanji.character.indexOf(search) !== -1 ||
          kanjiObj.kanji.meaning.english.indexOf(search) !== -1 ||
          kanjiObj.kanji.kunyomi.hiragana.indexOf(search) !== -1 ||
          kanjiObj.kanji.onyomi.katakana.indexOf(search) !== -1 ||
          kanjiObj.kanji.onyomi.romaji.indexOf(search) !== -1 ||
          kanjiObj.kanji.kunyomi.romaji.indexOf(search) !== -1
        );
      })
      .map((k, i) => {
        console.log(typeof k.references.kodansha);

        return (
          <div key={i}>
            <div className="kanji-container">
              <div className="kanji">
                <div className="character-container">
                  <h1 className="character">{k.kanji.character}</h1>
                </div>

                <div className="kana2">
                  <h2 className="kunyomi ">
                    KUN<span>-</span>YOMI: {k.kanji.kunyomi.hiragana}
                  </h2>

                  <h2 className="onyomi ">
                    ON<span>-</span>YOMI: {k.kanji.onyomi.katakana}
                  </h2>
                </div>
              </div>

              <div className="pic-container">
                <img className="pics" src={k.kanji.video.poster} alt="pic" />
              </div>

              <div className="englishContainer">
                <h2 className="english">English: {k.kanji.meaning.english}</h2>
                <button
                  className={this.props.user.user ? "show" : "hide"}
                  onClick={e => {
                    if (this.props.location.state === "first add") {
                      return this.addKanji(
                        this.props.user.user.user_id,
                        +this.props.match.params.folder_id,
                        k.references.kodansha
                      );
                    } else if (this.props.location.state === "second add") {
                      return this.addKanji2(
                        this.props.user.user.user_id,
                        +this.props.match.params.folder_id,
                        k.references.kodansha
                      );
                    } else {
                      return this.addKanji3(
                        this.props.user.user.user_id,
                        +this.props.match.params.folder_id,
                        k.references.kodansha
                      );
                    }
                  }}
                >
                  Add Kanji
                </button>
              </div>
            </div>
          </div>
        );
      });
    return (
      <div>
        <ToastContainer />
        <div className="search-input-container">
          <button
            className={this.props.user.user ? "alive" : "dead"}
            onClick={e => this.done()}
          >
            Finished
          </button>
          <input
            type="text"
            className="search-input"
            value={search}
            onChange={e => this.setState({ search: e.target.value })}
          />
        </div>

        {filteredKanji}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllKanji);
