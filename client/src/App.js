import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import "antd/dist/antd.css";
import  {Menu, Row, Col, Button} from 'antd';
import Map from './Map.js'; 
// import Cultures from './Cultures.js';


getLocation = navigator.geolocation.getCurrentPosition(function(location) {
  console.log(location.coords.latitude);
  console.log(location.coords.longitude);
  console.log(location.coords.accuracy);
});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // display_lat: latitude,
      // display_long: longitude,
      map_city: '',
      map_state: '',
      getLocation: ''
    }
  }

  setLocation = locationObj => {
    const lat = locationObj.mapPosition.lat;
    const lng = locationObj.mapPosition.lng;
    const area = locationObj.area;
    const state = locationObj.state;
    this.setState({
      display_lat: lat,
      display_long: lng,
      map_city: area,
      map_state: state
    });
  }

  render() {
    return (
      <div className="App">

        {/* <div className='Menu'>
          <Row> <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Col span={12}><h1>Earth Medicine App</h1></Col>
          <Col span={12}>
           <Menu.Item key="mail">
          Login | Register
          </Menu.Item>
          <Menu.Item key="app" disabled>
          </Menu.Item></Col>
          </Menu>
         </Row>
       </div> */}
       {/* <Cultures/> */}
        <Map
              google={this.props.google}
              center={{
                lat: 49,
                lng: -123
              }}
              height="70vh"
              zoom={2}
              setLocation={this.setLocation}
            /> 
        
        <ul><Button>Discover Medicinal Plants</Button></ul>
        <ul><Button>Discover Medicinal Culture</Button></ul>
        <ul><Button>Discover Endangered Plant Species</Button></ul>
        {/* <button onClick={this.fetchData} > */}
          {/* Fetch Data */}
        {/* </button>    */}    
      </div>
    );
  }
}

export default App;
