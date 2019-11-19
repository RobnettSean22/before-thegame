import React, { Component } from "react";
import Rapid from "../Rapid";
import { connect } from "react-redux";
import { setUser } from "../../reducer/userReducer";
import axios from "axios";
import KanjiStudyCard from "../KanjiStudyCard";

class Study extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allKanji: [],
      kCode1: [],
      kCode2: [],
      kCode3: []
    };
  }

  componentDidMount() {
    this.readAllKanji();
    this.readKanji(
      this.props.user.user.user_id,
      this.props.match.params.folder_id
    );
    this.readKanji2(this.props.user.user.user_id, this.props.folder_id);
    this.readKanji3(this.props.user.user.user_id, this.props.folder_id);
  }

  readAllKanji() {
    Rapid.get("/kanji/all").then(response => {
      this.setState({
        allKanji: response.data
      });
    });
  }

  shuffle(ji) {
    let k = ji.length,
      t,
      i;
    while (k) {
      i = Math.floor(Math.random() * k--);
      t = ji[k];
      ji[k] = ji[i];
      ji[i] = t;
    }
    return ji;
  }

  readKanji(user_id, folder_id) {
    axios.get(`/api/read_kanji/${user_id}/${folder_id}`).then(response => {
      this.setState({
        kCode1: this.shuffle(response.data)
      });
    });
  }

  readKanji2(user_id, folder_id) {
    axios.get(`/api/read2_kanji/${user_id}/${folder_id}`).then(response => {
      this.setState({
        kCode2: this.shuffle(response.data)
      });
    });
  }
  readKanji3(user_id, folder_id) {
    axios.get(`/api/read3_kanji/${user_id}/${folder_id}`).then(response => {
      this.setState({
        kCode3: this.shuffle(response.data)
      });
    });
  }

  render() {
    const { allKanji, kCode1, kCode2, kCode3 } = this.state;
    console.log(allKanji);
    console.log(kCode1);
    // const {kCode1} = this.state
    // console.log(kCode1)

    return (
      <div>
        {allKanji.length > 1 && (
          <KanjiStudyCard
            all={allKanji}
            cd1={kCode1}
            cd2={kCode2}
            cd3={kCode3}
            shuf={this.shuffle}
          />
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Study);
