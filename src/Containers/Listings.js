import { connect } from "react-redux";
import Listings from "../Components/Listings";
import { deleteListing } from '../redux/actions'

const mapStateToProps = state => {
  return {
    listings: state.listings,
    username: state.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteListing: id => dispatch(deleteListing(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
