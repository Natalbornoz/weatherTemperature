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
// import './styles.css'

const data = {
    temperature: 32,
    weatherState: SUN,
    humidity: 2,
    wind: '10 m/s',
}

const WeatherLocation = () => (
    <div>
        <Location city= {'Santiago'} />
        <WeatherData data = {data} />
    </div>
);
export default WeatherLocation;