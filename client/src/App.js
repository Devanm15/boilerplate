import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import "antd/dist/antd.css";
import  {Menu} from 'antd';


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

  render() {
    return (
      <div className="App">
        <h1>Earth Medicine App</h1>
        <div className='Menu'>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
         
          Login | Register
        </Menu.Item>
        <Menu.Item key="app" disabled>
        </Menu.Item>
        </Menu>
        
        </div>
        
        
        {/* <button onClick={this.fetchData} > */}
          {/* Fetch Data */}
        {/* </button>    */}    
      </div>
    );
  }
}

export default App;
