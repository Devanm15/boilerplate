import React, {Component} from 'react';
import axios from 'axios';

class Locations extends Component {
    state={
        locations: [],
        
    };

    componentDidMount(){
        axios.get('/api/index').then(response => 
          {console.log(response)
          })};
    
      render() {
        return (
            <div>Hello</div>
        )
      }
    }
    
    export default Locations