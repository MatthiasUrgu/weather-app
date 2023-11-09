import { ApiWeather } from "API/API";
import { useState } from "react";
import style from "./Style.module.scss";
import CityName from "components/CityName/CityName";
import Temperature from "components/Temperature/Temperature";
import DateTime from "components/DateTime/DateTime";
function App() {

  /* States */
  const [isInput, setIsInput] = useState('');
  const [isVille,setIsVille] = useState ('')
  const [isTemperature,setIsTemperature] = useState ('')

/* Input Value */
  function InputValue(e) {
    setIsInput(e.target.value);
  }

  /* API */
  async function City() {
    const ville =  await ApiWeather.WeatherCity(isInput)
    const temperature = await ApiWeather.WeatherTemperature(isInput)
   
    setIsVille(ville)
    setIsTemperature(temperature)
  }
  

  return (
    <section className={style.container}>
      <div>
        <input type="text" value={isInput} onChange={InputValue} />
        <button type="submit" onClick={City}>
          submit
        </button>
      </div>
      <CityName City={isVille}/>
      <Temperature Celcius={isTemperature}/>
      <DateTime City={isVille}/>

    </section>
  );
}

export default App;
