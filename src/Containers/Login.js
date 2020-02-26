import { connect } from "react-redux";
import Login from "../Components/Login";
import { getUsername, isAuthenticated, logout } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    getUsername: username => dispatch(getUsername(username)),
    isAuthenticated: boolean => dispatch(isAuthenticated(boolean))
  };
};

export default connect(null, mapDispatchToProps)(Login);
