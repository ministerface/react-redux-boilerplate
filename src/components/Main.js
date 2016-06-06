import React, { Component } from 'react';
import Header from './layout/Header';

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}/>

      </div>
    );
  }
}
