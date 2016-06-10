import React, { Component } from 'react';
import Todo from './Todo';


export default class TodosGrid extends Component {
  constructor(props) {
    super(props);


  }
  render() {

    const { todos } = this.props;
    const todosTemplate = todos.map(function(item, index) {
      return (
        <Todo key={item.id} todo={item}/>
      )
    });


    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       addTodo: this.props.addTodo,
       redirect: this.props.redirect
     })
    );

    return (
      <div className="col-lg-8">
        {childrenWithProps}
        {todosTemplate}
      </div>

    );
  }
}
