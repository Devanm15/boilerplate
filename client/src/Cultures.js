import React, {Component} from 'react';
import axios from 'axios';

class Cultures extends Component {
    state={
        cultures: [],
        locations: []
    };

    componentDidMount(){
        axios.get('/api/index').then(response => {console.log(response.data)
          this.setState({ cultures: response.data})
        })
    };
    
      render() {
        return (
          <div>
            {this.state.cultures.map(culture => {
              return (
                <div className='cultures' key={culture.id}>
                  <h4>{culture.name}</h4>
                </div>
                )
              })}
          </div>
        )
      }
    }
    
    export default Cultures

