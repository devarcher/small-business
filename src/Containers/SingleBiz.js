import { connect } from "react-redux";
import SingleBiz from "../Components/SingleBiz";

const mapStateToProps = state => {
  console.log("mstp singlebiz");
  return {
    listings: state.listings,
    username: state.username
  };
};

export default connect(mapStateToProps)(SingleBiz);
