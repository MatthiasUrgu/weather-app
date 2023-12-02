

const API_key = '&appid=d30e7c4f10fafa8992877c3023ba9d49'
let API_BASE_Link = `https://api.openweathermap.org/data/2.5/weather?q=`

const API_Key_Time ="4f9d061b712d46fabbf1266f2c41bb13"
let Api_BaseTime_Link="https://timezone.abstractapi.com/v1/current_time/?api_key="

export class ApiWeather {
  /****** Name of city ******/
    static async WeatherCity(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          
          return data.name;
        })
        .catch(error =>{
          console.error('erreur lors de ka recherche de la Ville')
        }
        )
    }
  /****** Temperature ******/
    static async WeatherTemperature(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data.main.temp;
        })
        .catch(error =>{
          console.error('erreur lors de ka recherche Temperature Grand')
        }
        )
    }
    /****** Humidity ******/
    static async WeatherHumidity(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data.main.humidity;
        })
        .catch(error =>{
          console.error('erreur lors de ka recherche Humidity')
        }
        )
    }
    /****** Wind ******/
    static async WeatherWind(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
      
          return data.wind.speed;
        })
        .catch(error =>{
          console.error('erreur lors de ka recherche Wind ')
        }
        )
    }
    /****** Min Temperature ******/
    static async WeatherMin(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          
          return data.main.temp_min;
        })
        .catch (error=> {
          console.error(`erreur lors de la recherche Temperature min`)
        }
        )
    }
    /****** Max Temperature ******/
    static async WeatherMax(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data.main.temp_max;
        })
        .catch (error=> {
          console.error(`erreur lors de la recherche Temperature Max`)
        }
        )
    }
    /****** WeatherLogo ******/
    static async WeatherImage(cityName) {
      return fetch(`${API_BASE_Link}${cityName}${API_key}&units=metric`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data.weather[0].main
        })
        .catch (error=> {
          console.error(`erreur lors de la recherche Image du logo`)
        }
        )
    }
  }

export class ApiTimeZone{
  static async timezone(cityName){
    return fetch(`${Api_BaseTime_Link}${API_Key_Time}&location=${cityName}`)
    .then(res =>{
      return res.json()
    }
      )
    .then(data => {
     
      return data.datetime
      
    }
    )
    .catch (error=> {
      console.error(`erreur lors de la recherche TimeZone`)
    }
    )
    

  }
}