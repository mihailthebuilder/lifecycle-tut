import "./Counter.scss";

import React, { Component } from "react";

export default class Counter extends Component {
  
  constructor(props) {
    console.log("Constructor initiated");

    super(props);

    this.state = {counter:0};

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((state)=>({
      counter: state.counter + 1
    }))
  }

  decrement() {
    this.setState((state)=>({
      counter: state.counter - 1
    }))
  }

  render() {
    console.log("Render initiated");

    return (
      <div className="counter-container">
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">
          Counter: {this.state.couter}
        </div>
      </div>
    )
  }
} 