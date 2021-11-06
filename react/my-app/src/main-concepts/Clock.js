import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 9,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);

    // this.setState({
    //   counter: this.state.counter + this.props.increment,
    // });

    this.setState(function (state, props) {
      console.log(state, props);
      return {
        counter: state.counter + props.increment,
      };
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello react!</h1>
        <h2>{this.state.counter}</h2>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
