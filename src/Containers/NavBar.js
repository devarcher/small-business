import { connect } from "react-redux";
import NavBar from "../Components/NavBar";
import { logout, isAuthenticated } from "../redux/actions";

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: str => dispatch(logout(str)),
    isAuthenticated: Boolean => dispatch(isAuthenticated(Boolean))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
