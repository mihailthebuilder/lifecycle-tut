import "./Counter.scss";

import React, { Component } from "react";

export default class Counter extends Component {
  
  constructor(props) {
    console.log("Constructor initiated");

    super(props);

    this.state = {counter:0};
  }

  componentDidMount = () => {
    console.log("Component did mount");
    console.log("------------------------");
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log("Component Did Update");  
  }

  componentWillUnmount = () => {
    console.log("Component Will Unmount");
    console.log("-----------------------");
  }

  increment = () => {
    this.setState((state)=>({
      counter: state.counter + 1
    }))
  }

  decrement = () => {
    this.setState((state)=>({
      counter: state.counter - 1
    }))
  }

  render() {
    console.log("Render initiated");

    const { increment, decrement } = this;
    const { counter } = this.state;

    return (
      <div className="counter-container">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <div className="counter">
          Counter: {counter}
        </div>
      </div>
    )
  }
} 