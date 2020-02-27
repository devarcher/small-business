import { connect } from "react-redux";
import NavBar from "../Components/NavBar";
import { logout } from "../redux/actions";

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: str => dispatch(logout(str))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
