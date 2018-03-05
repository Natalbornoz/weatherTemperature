import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../constant/weathers';

//fucnion para pedir que traiga el icono del sol
  const  getWeatherState = (weather) => {
        return SUN;
    }

    const transformWeather = (weather_data) => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = getWeatherState(this.weather);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`, //template string
        }
        return data;
    }

export default transformWeather;