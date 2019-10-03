import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import axios from 'axios';


class CultureMap extends Component {
  constructor( props ){
		super( props );
		this.state = {
        locals: [],
				lat: 0,
				lng: 0
    }
    
  };

    componentDidMount(){ 
      axios.get('/api/index').then(response => {
        console.log(response.data)
        const locations = response.data
        this.setState({
          locals: locations,
        });        
    })}

    renderMarkers() {
      return this.state.locals.map((location, key) => {
        return <Marker 
        key={ location.id }
        position={{lat: location.latitude, lng: location.longitude }}
        />
      });
    };


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
          <div>{ this.renderMarkers() }</div>
          
        </GoogleMap>
      </LoadScript>
     )
  }
}

export default CultureMap;