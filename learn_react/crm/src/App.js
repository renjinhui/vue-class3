import React from 'react';
import logo from './logo.svg';
import './App.css';
import {message} from 'antd'
import { Modal, Button } from 'antd';
import {connect} from 'react-redux'
class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal{this.props.appCount}
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
App = connect((state)=>{
  return {
    appCount:state.countReducer.count
  }
})(App)

export default App;
