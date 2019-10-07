import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import axios from 'axios';


class CultureMap extends Component {
  constructor( props ){
		super( props );
		this.state = {
        locals: [],
        cultureInfo: [],
        activeMarkerLocationId: null,
        // showingInfoWindow: false,
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
    // updateContent() {
    //   ReactDOM.render(React.Children.only(children), document.getElementById("iwc"));
    // }
    onMarkerClicked = (location) => {
        this.setState({
          activeMarkerLocationId: location.id,
          // showingInfoWindow: true,

        });
    }

    renderMarkers() {
      return this.state.locals.map((location) => {
        let onClickHandler = (marker) => { this.onMarkerClicked(location) };

        return <Marker 
          onClick={ onClickHandler }
          key={ location.id }
          position={{lat: location.latitude, lng: location.longitude }}
          icon={"https://img.icons8.com/pastel-glyph/32/000000/quill-pen.png"}
          // activeMarker={ true }
        > 
        </Marker>       
      });
    }

    
  

    renderActiveMarkerInfoWindow() {
      let { activeMarkerLocationId: locationId, locals } = this.state;
      if (locationId) {
      let { latitude, longitude } = locals.find(function(location) {
        return location.id === locationId;
      });
        return <InfoWindow
          position={{lat: latitude, lng: longitude }}
        >
          <div>Hello World</div>
        </InfoWindow>
      }  
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
          <div>{ this.renderActiveMarkerInfoWindow()  }</div>
          
        </GoogleMap>
      </LoadScript>
     )
  }
}

export default CultureMap;