import React, { Component } from "react";

import Form from "./components/form";
import Display from "./components/display";
import Modal from "./components/modal";
import Posts from "./components/posts";
import axios from "axios";

class App extends Component {
  state = {
    displayModal: false,
    data: [],
    note: {
      firstname: " ",
      lastname: " ",
      phone: " ",
      role: " ",
      message: " ",
    },
  };

  componentDidMount() {
    axios
      .get("http://localhost:4001/posts/")
      .then((res) => this.setState({ data: res.data }));
  }

  /*fetch("http://localhost:4001/posts")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }*/

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

  postHandler = () => {
    axios
      .post("http://localhost:4001/posts/", this.state.note)
      .then((res) => console.log("res", res))
      .catch((error) => console.log("error", error));
    this.setState({
      displayModal: !this.state.showModal,
      note: {
        firstname: " ",
        lastname: " ",
        phone: " ",
        role: " ",
        message: " ",
      },
      data: [],
    });
    axios
      .get("http://localhost:4001/posts/")
      .then((res) => this.setState({ data: res.data }));
  };

  render() {
    return (
      <div>
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
              send={this.postHandler}
              /*firstname={this.state.firstname}
            lastname={this.state.lastname}
            phone={this.state.phone}
            role={this.state.role}
            message={this.state.message}*/
            />
          )}
        </div>
        <div className="post">
          <Posts data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
