import React from 'react';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  handleSubmit(e) {
    console.log(this.state.value);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
          名字：
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
        </label>
        <input type='submit' value='提交' />
      </form>
    );
  }
}

export default NameForm;
