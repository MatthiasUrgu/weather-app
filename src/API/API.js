
const API_key = '&appid=d30e7c4f10fafa8992877c3023ba9d49'
let API_BASE_Link = `https://api.openweathermap.org/data/2.5/weather?q=`


export class ApiWeather {
  /****** Name of city ******/
    static async WeatherCity(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          return data.name;
        });
    }
  /****** Temperature ******/
    static async WeatherTemperature(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data.main.temp;
        });
    }
    /****** Humidity ******/
    static async WeatherHumidity(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data.main.humidity;
        });
    }
    /****** Wind ******/
    static async WeatherWind(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('**wind**', data.main.humidity);
          return data.main.humidity;
        });
    }
    /****** Min Temperature ******/
    static async WeatherMin(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('**Temp-Min**', data.main.temp_min);
          return data.main.temp_min;
        });
    }
    /****** Max Temperature ******/
    static async WeatherMax(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('**Temp-max**', data.main.temp_max);
          return data.main.temp_max;
        });
    }
  }

