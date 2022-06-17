import React, { Component } from 'react';

export default class Box extends Component {
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return <div>Box</div>;
  }
}
