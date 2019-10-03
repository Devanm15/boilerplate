import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import "antd/dist/antd.css";
// import  {Menu, Row, Col, Button} from 'antd';
import CultureMap from './CultureMap.js'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
            <CultureMap/>
        
        {/* <ul><Button>Discover Medicinal Plants</Button></ul>
        <ul><Button>Discover Medicinal Culture</Button></ul>
        <ul><Button>Discover Endangered Plant Species</Button></ul> */}
        {/* <button onClick={this.fetchData} > */}
          {/* Fetch Data */}
        {/* </button>    */}    
      </div>
    );
  }
}

export default App;
