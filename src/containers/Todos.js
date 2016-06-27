import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainTodos from '../components/todos/MainTodos';
import * as actionTodos from '../actions/todos';

const mapStateToProps = (state) => {

  const listProjects = state.projects.map((item, index) => {
      return item.name;
  });

  return {
    todos: state.todos,
    lists: listProjects
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    actionTodos: bindActionCreators(actionTodos, dispatch)
  }
}


const Todos = connect(mapStateToProps, mapDispatchToProps)(MainTodos);

export default Todos;
