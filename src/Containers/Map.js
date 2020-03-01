import { connect } from "react-redux";
import Map from "../Components/Map";

const mapStateToProps = state => {
  console.log("mstp singlebiz");
  return {
    listings: state.listings,
    username: state.username
  };
};

export default connect(mapStateToProps)(Map);
