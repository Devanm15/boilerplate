import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import "antd/dist/antd.css";
import  {Button} from 'antd';
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
        <div className='Menu'>
           <h1>Earth Medicine App</h1>
       </div>
            <CultureMap/>
        
        <ul><Button>Discover Medicinal Plants</Button></ul>
        <ul><Button>Discover Medicinal Culture</Button></ul>
        <ul><Button>Discover Endangered Plant Species</Button></ul>
         
      </div>
    );
  }
}

export default App;
