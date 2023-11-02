const formatCurrentWeather = (data) => {
  const { timezone } = data;
  const { temp, feels_like, temp_min, temp_max, humidity, pressure } = data.main;
  const { speed: wind_speed } = data.wind;
  const { sunrise, sunset, country} = data.sys;
  const{icon, main: description} = data.weather[0]
  const {id:iconId}=data.weather[0]
  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    wind_speed,
    sunrise,
    sunset,
    timezone,
    icon,
    description,
    iconId,
    pressure,
    country
  };
};

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;


export { formatCurrentWeather, iconUrlFromCode };
