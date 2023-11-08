
const API_key = 'd30e7c4f10fafa8992877c3023ba9d49'
let API_BASE_LInk = `https://api.openweathermap.org/data/2.5/weather?q=`

export class ApiWeather {
    static async WeatherCity(cityName) {
      return fetch(`${API_BASE_LInk}${cityName}&appid=${API_key}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          return data.name;
        });
    }
  
    static async WeatherTemperature(cityName) {
      return fetch(`${API_BASE_LInk}${cityName}&appid=${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log('**temperature**', data.main.temp);
          return data.main.temp;
        });
    }
  }
  