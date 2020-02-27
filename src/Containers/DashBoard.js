import { connect } from "react-redux";
import DashBoard from "../Components/DashBoard";

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

export default connect(mapStateToProps, null)(DashBoard);
