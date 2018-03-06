import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


// const LocationList = ({ cities }) => (
//     <div>
//         <WeatherLocation city={'Santiago,scl'}/> 
//         <WeatherLocation city={'Bogotá,col'}/>
//         <WeatherLocation city={'Buenos Aires,ar'}/>
//         <WeatherLocation city={'Rio de Janeiro,br'} /> 
//     </div>
// );

//cada vez uqe selccionesmos una city se ejecutara este codigo
const LocationList = ( { cities, onSelectedLocation }) => {
    const hadlerWeatherLocationClick = city => {
        console.log('hadleWeatherLocationClick');
        onSelectedLocation(city);
    }

//La key es para que el elemento se sobreescriba
const strToComponent = cities => (
    cities.map(city => (
        <WeatherLocation
            key={city}
            city={city}
            onWeatherLocationClick={() => 
                hadlerWeatherLocationClick(city)}/>))
);
return(
    <div>
        {strToComponent(cities)}
    </div>
    )
};

//Almacenar ciudades en unarray para que location list pueda recorrer
LocationList.PropTypes = {
    cities: PropTypes.array.isRequired,
}


export default LocationList;
