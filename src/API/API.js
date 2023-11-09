
const API_key = '&appid=d30e7c4f10fafa8992877c3023ba9d49'
let API_BASE_Link = `https://api.openweathermap.org/data/2.5/weather?q=`
let API_7Days_Link = `https://api.openweathermap.org/data/2.5/forecast?q=`


export class ApiWeather {
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
  
    static async WeatherTemperature(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('**temperature**', data.main.temp);
          return data.main.temp;
        });
    }
  }

