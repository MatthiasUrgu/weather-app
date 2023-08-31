import style from "./Style.module.scss";
/* import {API} from 'API/API'
 */
import Menu from "components/Menu/Menu";
import CityName from "components/CityName/CityName";
import Temperature from "components/temperature/Temperature";
import WeatherImg from "components/weatherImg/WeatherImg";
/* import axios from "axios"; */
import { API_key,API_BASE_LInk } from "API/API_Key";
function App() {

let city = 'Paris'


const response =`${API_BASE_LInk}q=${city}&appid=${API_key}`



/*
  let temperature = response.data.main.temp
  let celcius = temperature - 273.15;
  
  celcius.toFixed(1)
 */

  

  return (
    <section className={style.container}>
      <Temperature Degree=''/>
      <CityName City={city}/>
      <WeatherImg />
      <Menu />
    </section>
  );
}
export {response}
export default App;
