//importamos component para componente de clase
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
//import './styles.css';
// import {
//     CLOUD,
//     CLOUDY,
//     SUN,
//     RAIN,
//     SNOW,
//     WINDY
// } from './../../constant/weathers';


//const para llamar a la api
const api_key = '3964db249e6c82ee05522ad1fa60775e';
// const location = 'Buenos Aires,ar';
const url = 'http://api.openweathermap.org/data/2.5/weather'
// const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;


// Eliminamos data
// const data1 = {
//     temperature: 32,
//     weatherState: SUN,
//     humidity: 2,
//     wind: '10 m/s', //string
// }
/*
const data2 = {
  temperature: 10,
  weatherState: SNOW,
  humidity: 98,
  wind: '70 m/s',
}
*/

/*
const WeatherLocation = () => (
    <div className='weatherLocation'>
      <Location city = {'Santiago'}/>
      <WeatherData data = {data}/>
    </div>
  )
*/
//Crear una clases que se extienda .. Al trabajar con componet es necsario importarlo mas ariba //Componente de clase nativo de React
//Componente de clase para poder reutilizarlo 
class WeatherLocation extends Component {
//constructor creado en js
    constructor ({ city }) {
        super();
        this.state = {
            city,
            data: null
        }
        console.log('constructor');
    }
    

    //Esto se fue a trasformWeather
    // //fucnion para pedir que traiga el icono del sol
    // getWeatherState = (weather) => {
    //     return SUN;
    // }

    // getData = (weather_data) => {
    //     const { humidity, temp } = weather_data.main;
    //     const { speed } = weather_data.wind;
    //     const weatherState = this.getWeatherState(this.weather);

    //     const data = {
    //         humidity,
    //         temperature: temp,
    //         weatherState,
    //         wind: `${speed} m/s`, //template string
    //     }
    //     return data;
    // }

    componentWillMount(){
       const { city } = this.state
       const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
        fetch(api_weather).then(data => {
            return data.json();
        }).then(weather_data => {
            //usamos this cuando estoi apuntando algo que esta dentro de mi funcion
            const data = transformWeather(weather_data);
            this.setState({ data });
        })
    }
// componentWillMount () {
//     this.handleUpdateClick();
// }

// componentWillMount() {
//     console.log('componetWillMount');
// }


// //Se ejecuta despues del render
// componentDidMount() {
//     console.log('componentDidMount');
// }

// //Se ejecuta despues segundo renderizado y se renderiza por segunda vez
// componentWillUpdate() {
//     console.log('componentWillUpdate');
// }

// componentDidUpdate() {
//     console.log('componentDidUpdate');
// }


    render = () => {
        const { onWeatherLocationClick } = this.props;
        const { city, data } = this.state;
        return (
        <div className='weatherLocation' onClick={onWeatherLocationClick}>
            <Location city={ city } />
    
            {data ? <WeatherData data={ data }/> : <CircularProgress size={60} thickness={7}/>}
        
        </div>
        );
       
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}




export default WeatherLocation;