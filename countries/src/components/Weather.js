import axios from "axios";
import {useState, useEffect} from 'react'

const api_key = '9f55f7c1ed44e9042d92355afb87cc7f'

const Weather = (prop) => {
  const [weather, setWeather] = useState([])
  const lat = prop.country.capitalInfo.latlng[0];
  const lon = prop.country.capitalInfo.latlng[1];
  const capitalWeatherLink =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=metric&appid=" +
    api_key;

  useEffect(() =>{
  console.log('axios call')
  axios
    .get(capitalWeatherLink)
    .then((response) => {
      setWeather([response.data])
      console.log('set weather', response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [capitalWeatherLink])

 
    if(weather.length === 1){
    return <>
    <p>temperature is {weather[0].current.temp}</p>
    <img 
    src={" http://openweathermap.org/img/wn/"+weather[0].current.weather[0].icon + "@2x.png"} />
    <p>wind speed is {weather[0].current.wind_speed}</p>
    </>}
  
  }
export default Weather;
