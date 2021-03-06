import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { setUser } from "../../reducer/userReducer";
import "./KanjiStudyCard.css";

class KanjiStudyCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: [],
      code1: [],
      code2: [],
      code3: [],

      whatToinput: ["English", "kun-yomi", "on-yomi"],
      wi: 0,
      answer: "",
      i: 0
    };
    this.rand = this.rand.bind(this);
  }

  componentDidMount() {
    //figure out conditions to render
    if (this.props.here === "first add") {
      this.setState(() => {
        // set state is async logic starts here
        let card = this.props.cd1.map(ref => {
          return this.props.all.filter(kcc => {
            return ref.index_number === kcc.references.kodansha;
          });
        });
        //   logic ends here
        // object to merge into state
        console.log(456, card);
        return { card: card };
      });
    } else if (this.props.here === "second add") {
      this.setState(() => {
        // set state is async logic starts here
        let card = this.props.cd2.map(ref => {
          return this.props.all.filter(kcc => {
            return ref.index_number === kcc.references.kodansha;
          });
        });
        //   logic ends here
        // object to merge into state
        console.log(456, card);
        return { card: card };
      });
    } else {
      this.setState(() => {
        // set state is async logic starts here
        let card = this.props.cd3.map(ref => {
          return this.props.all.filter(kcc => {
            return ref.index_number === kcc.references.kodansha;
          });
        });
        //   logic ends here
        // object to merge into state
        console.log(456, card);
        return { card: card };
      });
    }
  }

  match(answer) {
    if (!this.state.card[this.state.i][0]) {
      this.props.history.push(
        `/folder_content/${this.props.userid}/${this.props.folderid}`
      );
    } else {
      const english = this.state.card[this.state.i][0].kanji.meaning.english;

      const kunyomi = this.state.card[this.state.i][0].kanji.kunyomi.romaji;

      const onyomi = this.state.card[this.state.i][0].kanji.onyomi.romaji;
      if (english === this.state.answer) {
        this.setState({
          i: this.state.i + 1,
          answer: ""
        });
        this.rand();
      } else if (kunyomi === this.state.answer) {
        this.setState({
          i: this.state.i + 1,
          answr: ""
        });
        this.rand();
      } else if (onyomi === this.state.answer) {
        this.setState({
          i: this.state.i + 1,
          answer: ""
        });
        this.rand();
      } else {
        this.notify();
        console.log(5611615);
      }
    }
  }

  rand() {
    const enGlish =
      this.state.card.length > 0 &&
      this.state.card[this.state.i][0].kanji.meaning.english;

    const kunYomi =
      this.state.card.length > 0 &&
      this.state.card[this.state.i][0].kanji.kunyomi.romaji;
    const onYomi =
      this.state.card.length > 0 &&
      this.state.card[this.state.i][0].kanji.onyomi.romaji;
    let change = [enGlish, kunYomi, onYomi];

    let changed = change[Math.floor(Math.random() * change.length)];

    // if (changed === enGlish) {
    //   return this.state.whatToinput[this.state.wi];
    // } else if (changed === kunYomi) {
    //   return this.state.whatToinput[this.state.wi + 1];
    // } else {
    //   return this.state.whatToinput[this.state.wi + 2];
    // }
    if (changed === enGlish) {
      this.setState({
        wi: 0
      });
    } else if (changed === kunYomi) {
      this.setState({
        wi: 1
      });
    } else {
      this.setState({
        wi: 2
      });
    }
  }

  notify = () => toast("Try again");

  render() {
    const { card, i, answer, whatToinput, wi } = this.state;
    console.log("card ========> ", this.props);
    console.log("with index added", card[0]);
    return (
      <div className="backside">
        <ToastContainer />
        <div className="study-this">
          <div className="study-this-kanji">
            {card.length > 0 &&
              card[i] &&
              card[i][0] &&
              card[i][0].kanji &&
              card[i][0].kanji.character}
          </div>
        </div>
        <div className="test">
          <div className="testing">{whatToinput[wi]}</div>
        </div>
        <div className="user-answer">
          <form
            className="form-answer"
            onSubmit={() => {
              this.match(answer);
            }}
          >
            <button className="fire">Fire Away</button>
            <input
              className="animal"
              value={answer}
              onChange={e => this.setState({ answer: e.target.value })}
            />
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(KanjiStudyCard)
);
