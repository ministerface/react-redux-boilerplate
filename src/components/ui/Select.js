import React, { Component } from 'react';

export default class Select extends Component {
  render() {
    return (
        <select name={this.props.name} className="form-control">
          <option>Не важно</option>
          <option value="Interactive Home">Interactive Home</option>
          <option value="RuPlans">RuPlans</option>
          <option value="Secure Transaction">Secure Transaction</option>
        </select>
    );
  }
}
