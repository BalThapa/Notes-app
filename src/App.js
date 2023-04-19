import React, { Component } from "react";

import Form from "./components/form";
import Display from "./components/display";
import Modal from "./components/modal";

class App extends Component {
  state = {
    displayModal: false,
    note: {
      firstname: " ",
      lastname: " ",
      phone: " ",
      role: " ",
      message: " ",
    },
  };

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      displayModal: !this.state.displayModal,
    });
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="app">
        <Form submit={this.modalHandler} changeHandler={this.changeHandler} />

        <Display
          {...this.note}
          /* firstname={this.state.firstname}
          lastname={this.state.lastname}
          phone={this.state.phone}
          role={this.state.role}
          message={this.state.message}*/
        />

        {this.state.displayModal && (
          <Modal
            click={this.modalHandler}
            {...this.note}
            /*firstname={this.state.firstname}
            lastname={this.state.lastname}
            phone={this.state.phone}
            role={this.state.role}
            message={this.state.message}*/
          />
        )}
      </div>
    );
  }
}

export default App;
