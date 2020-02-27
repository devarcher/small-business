import { connect } from "react-redux";
import AddBiz from "../Components/AddBiz";

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

export default connect(mapStateToProps, null)(AddBiz);
