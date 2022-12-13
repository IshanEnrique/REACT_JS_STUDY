import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name='Rahul Kumar';
  render() {
    return (
      <div>
        Hello my first class based Component {this.name}
      </div>
    )
  }
}
