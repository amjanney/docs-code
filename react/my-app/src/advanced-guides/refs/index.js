import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  handleClick() {
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        <input ref={this.textInput} type='text' />
        <input
          onClick={this.handleClick.bind(this)}
          type='button'
          value='Focus the text input'
        />
      </div>
    );
  }
}

export default CustomTextInput;
