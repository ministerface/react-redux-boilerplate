import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainProjects from '../components/project/MainProjects';
import * as actionProjects from '../actions/projects';
import * as actionApp from '../actions/app';

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    modals: state.app.modals
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionProjects: bindActionCreators(actionProjects, dispatch),
    actionApp: bindActionCreators(actionApp, dispatch)
  }
}



const Projects = connect(mapStateToProps, mapDispatchToProps)(MainProjects);

export default Projects;
