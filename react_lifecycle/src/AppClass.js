import React, { Component } from 'react';
import Box from './Box';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log('constructor');
  }
  buttonClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.buttonClick}>클릭!</button>
        {this.state.counter < 3 && <Box />}
      </div>
    );
  }
}
