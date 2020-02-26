import { connect } from "react-redux";
import NavBar from "../Components/NavBar";
import { isAuthenticated, logout } from "../redux/actions";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: str => dispatch(logout(str))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
