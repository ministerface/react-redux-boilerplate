import React, { Component } from 'react';
import Todo from './Todo';


export default class TodosGrid extends Component {
  constructor(props) {
    super(props);


  }
  render() {

    const { todos } = this.props;
    const todosTemplate = todos.map((item, index) => {
      return (
        <Todo key={item.id} todo={item} index={index} {...this.props}/>
      )
    });


    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       addTodo: this.props.actionTodos.addTodo,
       redirect: this.props.actionTodos.redirect,
       lists: this.props.lists
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
