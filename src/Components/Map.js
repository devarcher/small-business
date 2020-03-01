import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import RoomIcon from '@material-ui/icons/Room';

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 12,
  };

AnyReactComponent = ({ text }) => <div><RoomIcon/></div>;

  // Take addres props into component from AddBiz / SingleBiz & convert to geocode. Set Lat and Lng in state to converted geocode

  render() {
    const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "45vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <this.AnyReactComponent lat={59.95541} lng={30.33784} text="" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
