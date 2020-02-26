import { connect } from "react-redux";
import Login from "../Components/Login";
import { getUsername } from "../redux/actions";

const mapDispatchToProps = dispatch => {
  return {
    getUsername: username => dispatch(getUsername(username))
  };
};

export default connect(null, mapDispatchToProps)(Login);
