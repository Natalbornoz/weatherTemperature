import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../constant/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={'jelou'}
        weatherState = {SUN} />
        <WeatherExtraInfo humidity={80} wind={'10m/s'} />
    </div>
);
export default WeatherData;