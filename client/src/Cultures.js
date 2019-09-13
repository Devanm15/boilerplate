import React, {Component} from 'react';
import axios from 'axios';

class Cultures extends Component {
    state={
        culture: []
    };

    componentDidMount(){
        axios.get('/api/cultures').then(response => {console.log('hello')})};
    
      render() {
        return (
          <div>
            {/* <ul>{this.state.cultures}</ul> */}
          </div>
        )
      }
    }
    
    export default Cultures

