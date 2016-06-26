import React, { Component } from 'react';

export default class Select extends Component {
  render() {

    const { data } = this.props;
    const dataTemplate = data.map((item, index) => {
      return (
        <option key={ index } value={ item }>{ item }</option>
        )
      });

      return (
          <select name={this.props.name} className="form-control">
            {dataTemplate}
        </select>
    );
  }
}
