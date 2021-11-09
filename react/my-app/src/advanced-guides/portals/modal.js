import React from 'react';
import ReactDOM from 'react-dom';

import './modal.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  handleShow() {
    this.setState({
      showModal: true,
    });
  }
  handleHide() {
    this.setState({
      showModal: false,
    });
  }
  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className='modal'>
          <div className='modal-wrapper'>
            <div className='modal-head'>
              <h2>this is head</h2>
            </div>
            <div className='modal-body'>this is body</div>
            <div className='modal-footer'>
              <button onClick={this.handleHide.bind(this)}>Hide Modal</button>
            </div>
          </div>
        </div>
      </Modal>
    ) : null;
    return (
      <div className='app-modal'>
        this div has overflow:hidden
        <button onClick={this.handleShow.bind(this)}>Show modal</button>
        {/* 显示弹窗 */}
        {modal}
      </div>
    );
  }
}

export default App;
