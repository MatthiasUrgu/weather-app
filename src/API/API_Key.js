import axios from "axios"

const API_key = 'd30e7c4f10fafa8992877c3023ba9d49'

let ville = 'Namur'

let API_Day = `api.openweathermap.org/data/2.5/forecast/daily?q=${ville}&cnt=1&appid=${API_key}`
let API_Week = 'api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}'

export class AxiosAPI{
   API_day(){
// Make a request for a user with a given ID
axios.get(API_Day).then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
}