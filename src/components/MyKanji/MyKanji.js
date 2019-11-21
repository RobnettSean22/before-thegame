import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUser } from "../../reducer/userReducer";
import { Link } from "react-router-dom";
import { FaGhost } from "react-icons/fa";
import spinner from "./spinner.png";
import "./MyKanji.css";

import Popup from "reactjs-popup";

class MyKanji extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studying: [],
      studyingName: "",
      study: [],
      studyName: "",
      folders: [],
      folderName: "",
      folderName2: ""
    };
  }

  componentDidMount() {
    if (this.props.user.user) {
      this.readStudyingFolder(this.props.user.user.user_id);
      this.readStudyingFolder3(this.props.user.user.user_id);
      this.readFolder(this.props.user.user.user_id);
    } else {
      this.props.history.push("/login/");
    }
  }

  async readFolder(user_id) {
    const response = await axios.get(`/api/get_folder/${user_id}`);
    this.setState({
      folders: response.data
    });
  }

  updateFolderStudied(user_id, folder_id, folder_name) {
    axios
      .put(`/api/studied_folder_update/${user_id}/${folder_id}/`, {
        folder_name
      })
      .then(response => {
        this.setState({
          folders: response.data
        });
      });
  }

  createFolderStudied(user_id, folderName) {
    axios
      .post(`/api/studied_folder/${user_id}`, { folderName })
      .then(response => {
        console.log(response.data);
        this.setState({
          folders: response.data,
          folderName: ""
        });
      });
  }

  deleteFolderStudied(user_id, folder_id) {
    axios
      .delete(`/api/studied_delete/${user_id}/${folder_id}`)
      .then(response => {
        this.setState({
          folders: response.data
        });
      });
  }

  readStudyingFolder(user_id) {
    axios.get(`/api/get_studying_folder/${user_id}`).then(response => {
      this.setState({
        studying: response.data
      });
    });
  }

  createFolderStudying(user_id, studyingName) {
    axios
      .post(`/api/studying_folder/${user_id}`, { studyingName })
      .then(response => {
        console.log(response.data);
        this.setState({
          studying: response.data,
          studyingName: ""
        });
      });
  }
  deleteFolderStudying(user_id, folder_id) {
    axios
      .delete(`/api/studying_delete/${user_id}/${folder_id}`)
      .then(response => {
        this.setState({
          studying: response.data
        });
      });
  }

  readStudyingFolder3(user_id) {
    axios.get(`/api/get_study_folder/${user_id}`).then(response => {
      this.setState({
        study: response.data
      });
    });
  }
  createFolderStudying3(user_id, studyName) {
    axios.post(`/api/study_folder/${user_id}`, { studyName }).then(response => {
      console.log(response.data);
      this.setState({
        study: response.data,
        studyName: ""
      });
    });
  }

  deleteFolderStudying3(user_id, folder_id) {
    axios.delete(`/api/study_delete/${user_id}/${folder_id}`).then(response => {
      this.setState({
        study: response.data
      });
    });
  }

  render() {
    const { folderName, folderName2 } = this.state;
    const { folders } = this.state;
    const { studying, studyingName } = this.state;
    const { study, studyName } = this.state;

    const mapStudy = study.map(folder3 => {
      return (
        <div className="folders" key={folder3.folder_id}>
          <Link
            className="link"
            to={{
              pathname: `/folder_content/${this.props.user.user.user_id}/${folder3.folder_id}`,
              state: "third add"
            }}
          >
            {folder3.folder_name}
          </Link>

          <FaGhost
            className="delete-icon"
            onClick={e =>
              this.deleteFolderStudying3(
                this.props.user.user.user_id,
                folder3.folder_id
              )
            }
          />
        </div>
      );
    });

    const mapStudying = studying.map(folder2 => {
      return (
        <div className="folders" key={folder2.folder_id}>
          <Link
            className="link"
            to={{
              pathname: `/folder_content/${this.props.user.user.user_id}/${folder2.folder_id}/`,
              state: "second add"
            }}
          >
            {folder2.folder_name}
          </Link>

          <FaGhost
            className="delete-icon"
            onClick={e =>
              this.deleteFolderStudying(
                this.props.user.user.user_id,
                folder2.folder_id
              )
            }
          />
        </div>
      );
    });
    const mapFolderName = folders.map(folder => {
      return (
        <div className="folders" key={folder.folder_id}>
          <Popup
            className="update"
            trigger={<button></button>}
            position="left top"
          >
            <div>
              <input
                value={folderName2}
                onChange={e => this.setState({ folderName2: e.target.value })}
              />
              <button
                onClick={e =>
                  this.updateFolderStudied(
                    this.props.user.user.user_id,
                    folder.folder_id,
                    folder.folder_name
                  )
                }
              ></button>
            </div>
          </Popup>
          <Link
            className="link"
            to={{
              pathname: `/folder_content/${this.props.user.user.user_id}/${folder.folder_id}`,
              state: "first add"
            }}
          >
            {folder.folder_name}
          </Link>

          <FaGhost
            className="delete-icon"
            onClick={e =>
              this.deleteFolderStudied(
                this.props.user.user.user_id,
                folder.folder_id
              )
            }
          />
        </div>
      );
    });

    return (
      <div className="background2">
        <div className="all_containers">
          <div className="spinner-container">
            <img className="spinner" src={spinner} alt="spin" />
          </div>
          <div className="heads">
            <h1 className="iknow k">
              Ka<span className=" n-red">n</span>ji I Know
            </h1>
            <h1 className="ilearn k">
              Ka<span className="n-red">n</span>ji I'm Learning
            </h1>
            <h1 className="ilearning k">
              Ka<span className="n-red">n</span>ji I'll Learn
            </h1>
          </div>
          <div className="contained">
            <div className="containers studied1">
              {mapFolderName}

              <button
                className="create"
                onClick={e =>
                  this.createFolderStudied(
                    this.props.user.user.user_id,
                    folderName
                  )
                }
              >
                <span>New Folder</span>
              </button>
              <input
                value={folderName}
                onChange={e => this.setState({ folderName: e.target.value })}
              />
            </div>

            <div className="containers studying2">
              {mapStudying}

              <button
                className="create"
                onClick={e =>
                  this.createFolderStudying(
                    this.props.user.user.user_id,
                    studyingName
                  )
                }
              >
                <span>New Folder</span>
              </button>

              <input
                value={studyingName}
                onChange={e => this.setState({ studyingName: e.target.value })}
              />
            </div>

            <div className="containers study3">
              {mapStudy}

              <button
                className="create"
                onClick={e =>
                  this.createFolderStudying3(
                    this.props.user.user.user_id,
                    studyName
                  )
                }
              >
                <span>New Folder</span>
              </button>
              <input
                value={studyName}
                onChange={e => this.setState({ studyName: e.target.value })}
              />
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MyKanji);
