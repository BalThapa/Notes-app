import React, { Component } from "react";

import Form from "./components/form";
import Display from "./components/display";
import Modal from "./components/modal";

class App extends Component {
  state = {
    modal: false,
  };

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div className="app">
        <div>
          <Form submit={this.modalHandler} />
        </div>
        <div>
          <Display />
        </div>
        {this.state.modal && (
          <div>
            <Modal />
          </div>
        )}
      </div>
    );
  }
}

export default App;
