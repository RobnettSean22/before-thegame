import React, { Component } from "react";

import { connect } from "react-redux";
import { setUser } from "../reducer/userReducer";
import axios from "axios";

class KanjiStudyCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card: [],
      code1: [],
      j: [],
      kCode2: [],
      kCode3: [],
      index: 0,
      answer: "",
      i: 0
    };
  }

  componentDidMount() {
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

    // this.readKanji2(this.props.user.user.user_id, this.props.folder_id)
    // this.readKanji3(this.props.user.user.user_id, this.props.folder_id)

    // this.setState({
    //     card:this.props.all
    //     })
  }
  ranProp() {}

  match() {
    const stuff = this.state.card[this.state.i][0].kanji.meaning.english
      .split(",")
      .map(a => {
        return a.trim();
      })
      .filter(str => {
        return str === this.state.answer;
      });
    if (stuff) {
      this.setState({
        i: this.state.i + 1
      });
    }
  }
  // readKanji2(user_id, folder_id) {
  //     axios.get(`/api/read2_kanji/${user_id}/${folder_id}`).then(response => {
  //         this.setState({
  //             kanjiCode2:response.data
  //         })
  //     })
  // }
  // readKanji3(user_id, folder_id) {
  //     axios.get(`/api/read3_kanji/${user_id}/${folder_id}`).then(response => {
  //         this.setState({
  //             kanjiCode3:response.data
  //         })
  //     })
  // }

  render() {
    const { card, i, answer } = this.state;

    console.log(this.state.j);
    console.log(this.state.card);
    console.log(this.state.code1);
    return (
      <div>
        {card.length > 0 && card[i][0].kanji.character}
        {card.length > 0 && card[i][0].kanji.meaning.english}
        <input
          value={answer}
          onChange={e => this.setState({ answer: e.target.value })}
        />
        <button
          onClick={e =>
            this.match(card[this.state.i][0].kanji.meaning.english, answer)
          }
        >
          try
        </button>
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
