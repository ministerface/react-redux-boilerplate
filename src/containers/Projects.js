import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainProjects from '../components/project/MainProjects';
import * as actionProjects from '../actions/projects';


const mapStateToProps = (state) => {
  return {
    projects: state.projects
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actionProjects: bindActionCreators(actionProjects, dispatch)
  }
}



const Projects = connect(mapStateToProps, mapDispatchToProps)(MainProjects);

export default Projects;
