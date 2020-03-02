import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@material-ui/icons/Room";

class GoogleMap extends Component {
  state = {
    geocode: {
      lat: null,
      lng: null
    }
  };

  static defaultProps = {
    center: {
      lat: 30.26,
      lng: -97.74
    },
    zoom: 12
  };

  Marker = ({ text }) => (
    <div>
      <RoomIcon text={this.props.biz.name} />
    </div>
  );

  componentDidMount() {
    this.fetchGeoCode();
  }

  async fetchGeoCode() {
    const address = this.props.biz.address;
    const splitAddress = address.split(" ");
    const formattedAddress = splitAddress.join("+");
    console.log("in fetch");

    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const geoLocationResponse = data.results[0].geometry.location;

      this.setState({ geocode: geoLocationResponse });
    } catch (err) {
      console.log(err);
    }
  }

  // Take address props into component from AddBiz / SingleBiz & convert to geocode. Set Lat and Lng in state to converted geocode

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
          <this.Marker
            style={{ cursor: "pointer" }}
            lat={this.state.geocode.lat}
            lng={this.state.geocode.lng}
            text={this.props.name}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
