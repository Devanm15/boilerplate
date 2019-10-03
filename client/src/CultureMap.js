import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

class CultureMap extends Component {
  render() {
     return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey= { process.env.REACT_APP_GOOGLE_API_KEY }
      >
        <GoogleMap
          id="Culture-Map"
          mapContainerStyle={{
            height: "400px",
            width: "800px"
          }}
          zoom={1}
          center={{
            lat: -3.745,
            lng: -38.523
          }}
        >
          <Marker
            position={{lat: 49.01, lng: -123.01 }}
          />
        </GoogleMap>
      </LoadScript>
     )
  }
}

export default CultureMap;