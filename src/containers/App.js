import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../components/Main';
import * as actionTodos from '../actions/todos';


const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionTodos, dispatch);
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
