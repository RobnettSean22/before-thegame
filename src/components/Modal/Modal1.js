import React, { Component } from "react";

class Modal1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          New Folder
        </button>

        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Create New Folder
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input
                  value={this.props.folders1}
                  onChange={e => this.props.value1()}
                />
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={this.props.create1(
                    this.props.user,
                    this.props.folders1
                  )}
                  type="button"
                  class="btn btn-primary"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal1;
