import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';//import siempre con mayuscula y from con min
import {CLOUD,
        CLOUDY,
        SUN,
        RAIN,
        SNOW,
        WINDY,
        THUNDER,
        DRIZZLE
    } from './../../../constant/weathers';
import './styles.css';    

// aca va el nombre del icono
const StateToIconName = (weatherState) => {
    switch (weatherState) {
        case CLOUD:
        return 'cloud';
        case CLOUDY:
        return 'cloudy';
        case SUN:
        return 'day-sunny';
        case RAIN:
        return 'snow';
        case SNOW:
        return 'snow';
        case WINDY:
        return 'windy';
        case THUNDER:
        return 'day-thunderstorm';
        case DRIZZLE:
        return 'day-showers';
        default:
        return 'day-sunny';
    }
}
const getWeatherIcon = (weatherState) => {
    return (
        <div className="icon">
        <WeatherIcons name = {StateToIconName(weatherState)}
        size = '2x'/>
        </div>
    )
}
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} °C`}</span>
    </div>
)
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
}
export default WeatherTemperature;


