import { ApiWeather } from "API/API";
import { useState } from "react";
import style from "./Style.module.scss";
import CityName from "components/CityName/CityName";
import Temperature from "components/Temperature/Temperature";

function App() {
  const [isInput, setIsInput] = useState('');
  const [isVille,setIsVille] = useState ('')
  const [isTemperature,setIsTemperature] = useState ('')
  function InputValue(e) {
    setIsInput(e.target.value);
    
    console.log(isInput);
  }

  async function City() {
    const ville =  await ApiWeather.WeatherCity(isInput)
    const temperature = await ApiWeather.WeatherTemperature(isInput)
   
    setIsVille(ville)
    setIsTemperature(temperature)
  }
  
  return (
    <section className={style.container}>
      <input type="text" value={isInput} onChange={InputValue} />

      <button type="submit" onClick={City}>
        submit
      </button>
      <CityName City={isVille}/>
      <Temperature Celcius={isTemperature}/>
    </section>
  );
}

export default App;
