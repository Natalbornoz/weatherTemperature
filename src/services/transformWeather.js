import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    THUNDER,
    DRIZZLE
} from './../constant/weathers';

//fucnion para pedir que traiga el icono del sol
  const  getWeatherState = (weather) => {
        // return SUN;
        const { id } = weather[0];
        if (id < 300) {
            return THUNDER;
        }else if (id < 400) {
            return DRIZZLE;
        }else if (id < 600) {
            return RAIN;
        }else if (id < 700) {
            return SNOW;
        }else if (id === 800) {
            return SUN;
        }else {
            return CLOUDY;
        }
    }
    //FORMAen la que le decimos a la api que nos entregue la info
    const transformWeather = (weather_data) => {
        const { weather } = weather_data;
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = getWeatherState(weather);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`, //template string
        }
        return data;
    }

export default transformWeather;