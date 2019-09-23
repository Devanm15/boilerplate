// import React, {Component} from 'react';
// import axios from 'axios';

// class Cultures extends Component {
//     state={
//         cultures: [],
        
//     };

//     componentDidMount(){
//         axios.get('/api/index').then(response => 
//           {console.log(response.data[0].locations[0].latitude)
//           // this.setState({ cultures: response.data, locations: response.data.locations})
//           })};
    
//       render() {
//         return (
//           <div>
//             {this.state.cultures.map(culture => {
//               return (
//                 <div className='cultures' key={culture.id}>
//                   <h4>{culture.name}</h4>
//                 </div>
//                 )
//               })}
//               {/* {this.cultures.locations.map(location => <p key={location.id}>{location.latitude}</p>)} */}
//           </div>
//         )
//       }
//     }
    
//     export default Cultures

