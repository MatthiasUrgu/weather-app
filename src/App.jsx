import { ApiWeather } from "API/API";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import style from "./Style.module.scss";
import CityName from "components/CityName/CityName";
import Temperature from "components/Temperature/Temperature";
import DateTime from "components/DateTime/DateTime";
import ExtraDetails from "components/ExtraDetails/ExtraDetails";
import Hamburger from "components/Hamburger/Hamburger";
import WeatherLogo from "components/WeatherLogo/WeatherLogo";


function App() {
  /* States */
  const [input, setInput] = useState("");
  const [ville, setVille] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [meteo,setMeteo] = useState("")

  /* API */
  async function City() {
    const ville = await ApiWeather.WeatherCity(input);
    const temperature = await ApiWeather.WeatherTemperature(input);
    const humidity = await ApiWeather.WeatherHumidity(input);
    const wind = await ApiWeather.WeatherWind(input);
    const max = await ApiWeather.WeatherMin(input);
    const min = await ApiWeather.WeatherMax(input);
    const weatherData = await ApiWeather.WeatherImage(input);
        
    /* .Log acces data */
    console.log("**meteoLogo**", weatherData);
    
    
    setVille(ville);
    setTemperature(temperature);
    setHumidity(humidity);
    setWind(wind);
    setMax(max);
    setMin(min);
    setMeteo(weatherData);
  }
   
  /* Animation FramerMotion  */
  const SearchBarControls = useAnimation();
  const HamburgerControls = useAnimation();
   
  function handleSearchBar() {
    SearchBarControls.start({ x: 25, opacity: 1 });
    HamburgerControls.start({ x: 0, opacity: 0 });
  }

  function resetComponents() {
    SearchBarControls.start({ x: -300, opacity: 0 });
    HamburgerControls.start({ x: -250, opacity: 1 });
  }

  /* Framer Motion : Input  */

  /* Input Value */
  function InputValue(e) {
    setInput(e.target.value);
  }

  /* Input KeyPress */
  async function InputKey(e) {
    if (e.key === "Enter") {
      setInput(e.target.value);
      resetComponents();
      City();
    }
  }

  /* Wheater Background  */
  
  let colors= {
    sun : '#ffb703',
    night: '#023047',
    rain: '#219ebc',
    snow: '#8ecae6'
}
  const date = new Date()
  const hour = date.getHours()
  
  const getBackgroundColor = () => {
    if (hour < 17){
       return colors.sun;
    
    }
    else{
      return colors.night;
    }
    }


  const containerStyle = {
    backgroundColor: getBackgroundColor(),
  };





  
  return (
    <section className={style.container} style={containerStyle}>
      
      <div className={style.data}>
        <div className={style.dataSearch}>
          {/******* SearchBar  *******/}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={SearchBarControls}
          >
            <input
              type="text"
              value={input}
              onChange={InputValue}
              onKeyDown={InputKey}
            />
            <button type="submit" onClick={City}>
              <BsSearch />
            </button>
          </motion.div>
          {/******* hamburger  *******/}
          <motion.div
            className={style.hamburger}
            initial={{ x: -250, opacity: 1 }}
            animate={HamburgerControls}
            onTap={handleSearchBar}
          >
            <Hamburger />
          </motion.div>
        </div>
        {/******* All components  *******/}
        <div className={style.dataFind}>
          <WeatherLogo LogoMeteo={meteo} City={ville} />
          <CityName City={ville} />
          <Temperature Celcius={temperature} />
          <DateTime City={ville} />
        </div>
        <div className={style.lastBlock}>
          <ExtraDetails
            Validate={ville}
            Humidity={humidity}
            Wind={wind}
            Min={min}
            Max={max}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
