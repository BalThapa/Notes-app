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

  changeHandler = (e, name) => {
    name = e.target.name;
    this.setState({
      note: { ...this.state.note, [name]: e.target.value },
    });
  };

  render() {
    return (
      <div className="app">
        <Form submit={this.modalHandler} changeHandler={this.changeHandler} />

        <Display
          {...this.state.note}
          /* firstname={this.state.firstname}
          lastname={this.state.lastname}
          phone={this.state.phone}
          role={this.state.role}
          message={this.state.message}*/
        />

        {this.state.displayModal && (
          <Modal
            {...this.state.note}
            click={this.modalHandler}
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
