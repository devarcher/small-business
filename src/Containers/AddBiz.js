import { connect } from "react-redux";
import AddBiz from "../Components/AddBiz";
import { addListing } from "../redux/actions";

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addListing: listing => dispatch(addListing(listing))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBiz);
