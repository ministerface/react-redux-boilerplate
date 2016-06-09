import React, { Component } from 'react';
import Todo from './Todo';


export default class TodosGrid extends Component {
  constructor(props) {
    super(props);

    const { todos } = props;
    this.todosTemplate = todos.map(function(item, index) {
      return (
        <Todo key={item.id} todo={item}/>
      )
    })

  }
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       addTodo: this.props.addTodo
     })
    );

    return (
      <div className="col-lg-8">
        {childrenWithProps}
        {this.todosTemplate}
      </div>

    );
  }
}
