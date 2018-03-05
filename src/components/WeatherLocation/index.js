// import React, { Component } from 'react';
// import Location from './Location';
// import WeatherData from './WeatherData';
// import {
//     CLOUD,
//     CLOUDY,
//     SUN,
//     RAIN,
//     SNOW,
//     WINDY
// } from './../../constant/weathers';
// // import './styles.css'

// const api_key = 'b986ee3e271393628879005a06faf78d';
// const location = 'Buenos Aires,ar';
// const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`

// const data1 = {
//     temperature: 32,
//     weatherState: SUN,
//     humidity: 2,
//     wind: '10 m/s',
// }




// // const data2 = {
// //     temperature: 10,
// //     weatherState: SNOW,
// //     humidity: 98,
// //     wind: '70 m/s',
// // }

// // const WeatherLocation = () => (
// //     <div>
// //         <Location city= {'Santiago'} />
// //         <WeatherData data = {data} />
// //     </div>
// // );

// class WeatherLocation extends Component {

//     constructor () {
//         super ();
//         this.state = { //Tomando el estado inicial de nuestro componente
//             city: 'Santiago',
//             data: data1
//         }
//     }

//     getWeatherState = (weather) => {
//             return SUN;
//         }

//     getData = (weather_data) => {
//         const { humidity, temp } = weather_data.main;
//         const { speed } = weather_data.wind;
//         const weatherState = this.getWeatherState(this.weather);

//         const data = {
//             humidity,
//             temperature: temp,
//             weatherState,
//             wind: `${speed} m/s`
//         }
//         return data;
//     }    


//     handleUpdateClick = () => {
//         fetch(api_weather).then(data => {
//             console.log(data)
//         })
//         /*this.setState = ({ //Actualizando y cambiando 'Seteando' o reseteando, pidiendo que muten los valores de nuesgro estado
//             data: data2
//         })*/
//       console.log('Actualizado');
//     }
//     render = () => (
//         <div className ='weatherLocation'>
//          <Location city = {this.state.city}/>
//          <WeatherData data = {this.state.data} />
//         <button onClick={this.handleUpdateClick}>Actualizar</button>
//         </div>
//     )
// }




//importamos component para componente de clase
import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../../constant/weathers';
// import './styles.css';

const api_key = '3964db249e6c82ee05522ad1fa60775e';
const location = 'Buenos Aires,ar';
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`;

const data1 = {
    temperature: 32,
    weatherState: SUN,
    humidity: 2,
    wind: '10 m/s', //string
}
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
    constructor() {
        super();
        this.state = {
            city: 'Santiago',
            data: data1
        }
    }

    //fucnion para pedir que traiga el icono del sol
    getWeatherState = (weather) => {
        return SUN;
    }

    getData = (weather_data) => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(this.weather);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`, //template string
        }
        return data;
    }

    handleUpdateClick = () => {
        /*
        this.setState ({
          data: data2
        })
        */
        fetch(api_weather).then(data => {
            console.log(data);
            return data.json();
        }).then(weather_data => {
            const data = this.getData(weather_data);
            this.setState({ data });
        })



        console.log('Actualizado');
    }
    render = () => {
        const { city, data } = this.state;
        return (
        <div className='weatherLocation'>
            <Location city={ city } />
            <WeatherData data={ data } />
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>
        );
    }
}





export default WeatherLocation;