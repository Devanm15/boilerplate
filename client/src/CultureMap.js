import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import axios from 'axios';


class CultureMap extends Component {
  constructor( props ){
		super( props );
		this.state = {
        locals: [],
        cultureInfo: [],
        InfoWindow: false
    }
  };
  

  async componentDidMount(){ 
    
      const [locations, cultures] = await Promise.all([
       axios.get('/api/locations'),
        axios.get('api/cultures')
      ]);
      console.log(cultures.data)
        this.setState({
          locals: locations.data,
          cultureInfo: cultures.data,
        });  
  }

    renderMarkers() {
      return this.state.locals.map((location) => {
        return <Marker 
        key={ location.id }
        position={{lat: location.latitude, lng: location.longitude }}
        icon={"https://img.icons8.com/pastel-glyph/32/000000/quill-pen.png"}
        onClick={ {InfoWindow: true}}
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
          <div>{ this.renderMarkers()  }</div>
          {/* <InfoWindow
          className="info-window"
            anchor={Marker.position}
            visible={this.state.showInfoWindow}
          ></InfoWindow> */}
        </GoogleMap>
      </LoadScript>
     )
  }
}

export default CultureMap;