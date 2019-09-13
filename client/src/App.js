import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import "antd/dist/antd.css";
import  {Menu, Row, Col, Button} from 'antd';
// import Map from './Map.js'; 
import Cultures from './Cultures.js';




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
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
        <div className='Menu'>
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
       </div>
       <Cultures/>
       {/* <Map
              google={this.props.google}
              center={{
                lat: 49,
                lng: -123
              }}
              height="70vh"
              zoom={2}
              setLocation={this.setLocation}
            />
         */}
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
