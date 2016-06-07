import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainBoard from '../components/dashboard/MainBoard';
import * as actionDashBoard from '../actions/dashboard';


const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionDashBoard, dispatch);
}


const DashBoard = connect(mapStateToProps, mapDispatchToProps)(MainBoard);

export default DashBoard;
