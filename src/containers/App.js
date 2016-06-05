import { connect } from 'react-redux';
import Main from '../components/Main';


function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

const App = connect(mapStateToProps)(Main);

export default App;
