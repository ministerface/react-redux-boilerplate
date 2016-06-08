import React, { Component } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';


export default class Main extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}/>
        <div className="wrapper">
          <div className="container">
            { this.props.children }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
