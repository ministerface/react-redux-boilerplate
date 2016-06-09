import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    return (
        <select className="form-control">
          <option>Не важно</option>
          <option>Interactive Home</option>
          <option>RuPlans</option>
          <option>Secure Transaction</option>
        </select>
    );
  }
}
