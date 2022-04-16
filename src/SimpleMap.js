import react from "react";
import GoogleMapReact from 'google-map-react';
import { useParams } from "react-router-dom";
import { useState } from "react";
import Firebase from "./Firebase";

function SimpleMap() {
    const {id} = useParams();
    const a = id.split("a");
    console.log(a);

    const LocationPin = ({ text }) => (
      <div className="pin">
        
        <p className="pin-text">{text}</p>
      </div>
    )
    
    const [latt,set_latt] = useState(a[0]);
    const [lg,set_lg] = useState(a[1]);
    const [no,set_no] = useState(a[2]);
    
    const [bno,set_bno] = useState(a[3]);
    // 22.7250426881063, 75.87286099510544
    const location = {
      lat:latt,
      lng:lg
    }
    const AnyReactComponent = ({ text }) => <div><h6>{text}</h6></div>;
    const val = {
        center: {
          lat: parseFloat(latt),
          lng: parseFloat(lg)
        },
        zoom: 18
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
            lat={location.lat}
            lng={location.lng}
            text={no + bno}
          />
        
        </GoogleMapReact>
      </div>
      </div>
    );
  }

export default SimpleMap;