
 const API_key = 'd30e7c4f10fafa8992877c3023ba9d49'
let API_BASE_LInk = `https://api.openweathermap.org/data/2.5/weather?/`


export {API_key,API_BASE_LInk}


 export class ApiWeather{

    static async WeatherResponse(){
        await fetch(`${API_BASE_LInk}${API_key}`)
        .then(res => {
            console.log(res)
            return res.json();
        })
    }

 }