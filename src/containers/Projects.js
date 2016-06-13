import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainProjects from '../components/project/MainProjects';
//import * as actionTodos from '../actions/todos';


const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    actionTodos: bindActionCreators(actionTodos, dispatch)
  }
}
*/


const Projects = connect(mapStateToProps)(MainProjects);

export default Projects;
