import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainTodos from '../components/todos/MainTodos';
import * as actionTodos from '../actions/todos';


const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionTodos: bindActionCreators(actionTodos, dispatch)
  }
}


const Todos = connect(mapStateToProps, mapDispatchToProps)(MainTodos);

export default Todos;
