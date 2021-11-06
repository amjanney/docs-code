import React from 'react';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className='warning'>Warning!</div>;
}

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  handeleShow() {
    this.setState((preState) => ({
      isShow: !preState.isShow,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.isShow} />
        <button onClick={this.handeleShow.bind(this)}>
          {this.state.isShow ? 'hide' : 'show'}
        </button>
      </div>
    );
  }
}
