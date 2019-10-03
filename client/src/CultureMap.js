import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import axios from 'axios';


class CultureMap extends Component {
  constructor( props ){
		super( props );
		this.state = {
        locals: [],
        cultureInfo: [],
        // showInfoWindow: false,
        // visible: true,
        isOpen: false,
    }
  };
  

  async componentDidMount(){ 
      const [locations, cultures] = await Promise.all([
       axios.get('/api/locations'),
        axios.get('api/cultures'),
      ])
        this.setState({
          locals: locations.data,
          cultureInfo: cultures.data,
        }) 
    };

    isClicked = () => {
      console.log()
        this.setState({
          isOpen: !false
        });
    }

    renderMarkers() {
      return this.state.locals.map((location) => {
        return <Marker 
          onClick={ this.isClicked }
          key={ location.id }
          position={{lat: location.latitude, lng: location.longitude }}
          icon={"https://img.icons8.com/pastel-glyph/32/000000/quill-pen.png"}
          activeMarker={ true }
        >
        </Marker>
      });
    }
  

    renderInfoWindows() {
      return this.state.locals.map((location)=> {
        return <InfoWindow
        position={{lat: location.latitude, lng: location.longitude }}
          key={ location.id }

        ></InfoWindow>
      })  
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
          {/* <div>{ this.renderInfoWindows()  }</div> */}
           
        </GoogleMap>
      </LoadScript>
     )
  }
}

export default CultureMap;