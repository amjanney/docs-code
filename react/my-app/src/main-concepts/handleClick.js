import React from 'react';

export default class HandleClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  // handleToggle = () =>  {
  //   this.setState((prevState) => ({
  //     isToggleOn: !prevState.isToggleOn,
  //   }));
  // }

  //   <button onClick={this.handleToggle.bind(this)}>
  //   {this.state.isToggleOn ? 'on' : 'off'}
  // </button>
  render() {
    return (
      <button onClick={() => this.handleToggle()}>
        {this.state.isToggleOn ? 'on' : 'off'}
      </button>
    );
  }
}
