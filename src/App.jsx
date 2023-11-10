import { ApiWeather } from "API/API";
import { useState } from "react";
import style from "./Style.module.scss";
import CityName from "components/CityName/CityName";
import Temperature from "components/Temperature/Temperature";
import DateTime from "components/DateTime/DateTime";
import video from "assets/videos/heavy-rain.mp4"
import ExtraDetails from "components/ExtraDetails/ExtraDetails";
import Hamburger from "components/Hamburger/Hamburger";
function App() {

  /* States */
  const [isInput, setIsInput] = useState('namur');
  const [isVille,setIsVille] = useState ('')
  const [isTemperature,setIsTemperature] = useState ('')
  const [isHumidity,setIsHumidity] = useState ('')
  const [isWind,setIsWind] = useState ('')
  const [isMax,setIsMax] = useState ('')
  const [isMin,setIsMin] = useState ('')

/* Input Value */
  function InputValue(e) {
    setIsInput(e.target.value);
  }

  /* API */
  async function City() {
    const ville =  await ApiWeather.WeatherCity(isInput)
    const temperature = await ApiWeather.WeatherTemperature(isInput)
    const humidity = await ApiWeather.WeatherHumidity(isInput)
    const wind = await ApiWeather.WeatherWind(isInput)
    const max = await ApiWeather.WeatherMin(isInput)
    const min = await ApiWeather.WeatherMax(isInput)
    setIsVille(ville)
    setIsTemperature(temperature)
    setIsHumidity(humidity)
    setIsWind(wind)
    setIsMax(max)
    setIsMin(min)
  }
  

  return (
    <section className={style.container}>
      <video src={video}  autoPlay loop muted></video>
      <div className={style.data}>
        
        <div className={style.dataSearch}>
          
          <div className={style.hamburger}>
            <Hamburger />
          </div>

          <input type="text" value={isInput} onChange={InputValue} />
          <button type="submit" onClick={City}>
            Go!
          </button>
        </div>
        
        
        <div className={style.dataFind}>
            <CityName City={isVille}/>
          <Temperature Celcius={isTemperature}/>
          <DateTime City={isVille}/>
        </div>
        <div className={style.lastBlock}>
          <ExtraDetails Humidity={isHumidity} Wind={isWind} Min={isMin} Max={isMax}/>
        </div>
      </div>

    </section>
  );
}

export default App;
