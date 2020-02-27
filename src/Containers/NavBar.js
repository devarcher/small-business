import { connect } from "react-redux";
import NavBar from "../Components/NavBar";

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

export default connect(mapStateToProps, null)(NavBar);
