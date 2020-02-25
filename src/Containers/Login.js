import { connect } from "react-redux";
import Login from '../Components/Login'
import { getUserName }  from '../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    getUserName: username => dispatch(getUsername(username))
  };
};

export default connect(null, mapDispatchToProps)(Lgoin);