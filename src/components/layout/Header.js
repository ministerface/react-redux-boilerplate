import React, { Component } from 'react'
import TopBar from './TopBar';
import NavBar from './NavBar';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  toggleTodo() {
    this.props.toggleTodo(1)
  }

  render() {
    return (
      <header id="topnav">
        <TopBar />
        <NavBar />
          <div onClick={this.toggleTodo.bind(this)}>dsdsds</div>
      </header>

    );
  }
}
