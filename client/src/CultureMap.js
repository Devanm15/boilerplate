import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import axios from 'axios';


class CultureMap extends Component {


componentDidMount() { 
  axios.get('/api/index').then(response => {console.log(response.data)
})};
  
   


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