import react from "react";
import GoogleMapReact from 'google-map-react';
import { useParams } from "react-router-dom";
import { useState } from "react";
import Firebase from "./Firebase";

function SimpleMap() {
    const {id} = useParams();
    console.log(id.split("a"));
    const [latt,set_latt] = useState(id.split("a")[0]);
    const [longh,set_long] = useState(id.split("a")[1]);
    const [no,set_no] = useState(id.split("a")[2]);
    // 22.7250426881063, 75.87286099510544
    
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const val = {
        center: {
          lat: 22.7250426881063,
          lng: 75.87286099510544
        },
        zoom: 11
      }
    return (
      <div>
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCuGwk1IRDJmKCWJVXIAQvnm7y9XMQZ2QE" }}
          defaultCenter={val.center}
          defaultZoom={val.zoom}
        >
          <AnyReactComponent
            text={"BinNo-"+no}
          />
        </GoogleMapReact>
      </div>
      </div>
    );
  }

export default SimpleMap;