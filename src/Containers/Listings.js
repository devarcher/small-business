import { connect } from "react-redux";
import Listings from "../Components/Listings";

const mapStateToProps = state => {
  console.log("inside mapstatetoprops");
  return {
    listings: state.listings
  };
};

export default connect(mapStateToProps, null)(Listings);
