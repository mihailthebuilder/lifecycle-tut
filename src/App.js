import Counter from "./Counter";

import React, { Component } from "react";
import "./App.scss";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {mount: true}
  }

  mountCounter = () => {
    this.setState({mount: true})
  }

  unmountCounter = () => {
    this.setState({mount:false})
  }

  render() {

    let { mount } = this.state;

    let { mountCounter, unmountCounter } = this;

    return (
      <div>
        <button onClick={mountCounter} className="mount-button" disabled={mount}>Mount Counter</button>
        <button onClick={unmountCounter} className="mount-button" disabled={!mount}>Unmount Counter</button>
        {mount && <Counter />}
      </div>
    );
  }
}