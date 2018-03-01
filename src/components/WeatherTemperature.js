import React from 'react';
import WeatherIcons from 'react-weathericons';//import siempre con mayuscula y from con min

const getWeatherIcon = (weatherState) => {
    switch (weatherState) {
        case 'tsunami':
            return (<WeatherIcons name='tsunami' size='2x' />)
        default:
            return (<WeatherIcons name='rain' size='2x' />)
    }
}
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} °C`}</span>
    </div>
);
export default WeatherTemperature;


