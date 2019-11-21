import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
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
      correct: ["NICE!", "GREAT!", "WITH EASE!", "CLEAN!", "BOSS!"],
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
    const english = this.state.card[this.state.i][0].kanji.meaning.english;

    const kunyomi = this.state.card[this.state.i][0].kanji.kunyomi.romaji;

    const onyomi = this.state.card[this.state.i][0].kanji.onyomi.romaji;

    if (english === this.state.answer) {
      this.setState({
        i: this.state.i + 1
      });
    } else if (kunyomi === this.state.answer) {
      this.setState({
        i: this.state.i + 1
      });
    } else if (onyomi === this.state.answer) {
      this.setState({
        i: this.state.i + 1
      });
    } else if (this.state.card[this.state.card.length - 1]) {
      // this.setState({
      //   i: 0
      // });
      console.log(5611615);
    }
    this.notify();
    this.rand();
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

  notify = () => toast("spot on");

  render() {
    const { card, i, answer, whatToinput, wi } = this.state;

    return (
      <div className="backside">
        <ToastContainer />
        <div className="study-this">
          <div className="study-this-kanji">
            {card.length > 0 && card[i][0].kanji.character}
          </div>
        </div>
        <div className="test">
          <div className="testing">{whatToinput[wi]}</div>
        </div>
        <div className="user-answer">
          <input
            value={answer}
            onChange={e => this.setState({ answer: e.target.value })}
          />

          <button
            onClick={() => {
              this.match(answer);
            }}
          >
            try
          </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(KanjiStudyCard);
