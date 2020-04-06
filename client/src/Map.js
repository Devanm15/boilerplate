import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow} from "react-google-maps";
import { GoogleMap, LoadScript } from '@react-google-maps/api'
// import Autocomplete from 'react-google-autocomplete';
import Geocode from 'react-geocode';
Geocode.setApiKey( process.env.REACT_APP_GOOGLE_API_KEY );
Geocode.enableDebug();

// const styles = require('./_map.json')

class Map extends Component {
	constructor( props ){
				super( props );
				this.state = {
					address: '',
					city: '',
					area: '',
					state: '',
					mapPosition: {
						lat: this.props.center.lat,
						lng: this.props.center.lng
					},
					markerPosition: {
						lat: this.props.center.lat,
						lng: this.props.center.lng
					}
				}
			}
	render(){
		return (
			<LoadScript
				id="script-loader"
				googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_API_KEY}`}
			>
				<GoogleMap
				id="my-map"
				mapContainerStyle={{
					height: "400px",
					width: "800px"
				}}
				zoom={1.5}
				center={{
					lat: this.state.mapPosition.lat, 
					lng: this.state.mapPosition.lng,
				}}
				/>
				
				</LoadScript>
		)
		
	}
};
export default Map

