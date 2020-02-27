import { connect } from "react-redux";
import DashBoard from "../Components/DashBoard";

const mapStateToProps = state => {
  console.log("***Props in Dash***", state);
  return {
    username: state.username
  };
};

export default connect(mapStateToProps, null)(DashBoard);
