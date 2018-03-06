import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Santiago,scl',
  'Buenos Aires,ar',
  'Bogotá,col',
  'Ciudad de México,mx',
  'Madrid,es',
  'Rio de Janeiro,br',
  'London,uk'
];

class App extends Component {

hadlerSelectionLocation = city => {
    console.log('hadlerSelectionLocationClick')
}

  render() {
    return (
     <MuiThemeProvider> 
      <div className="App">
        <LocationList cities={cities}
            onSelectedLocation ={this.hadlerSelectionLocation}/>
       </div> 
     </MuiThemeProvider> 
    );
  }
}
export default App;