import { ApiWeather, ApiTimeZone  } from "API/API";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { BsSearch } from "react-icons/bs";
import style from "./Style.module.scss";
import CityName from "components/CityName/CityName";
import Degree from "components/Degree/Degree";
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
  const [time,setTime] = useState("")
  

  /* API */
  async function City() {
    const ville = await ApiWeather.WeatherCity(input);
    const temperature = await ApiWeather.WeatherTemperature(input);
    const humidity = await ApiWeather.WeatherHumidity(input);
    const wind = await ApiWeather.WeatherWind(input);
    const max = await ApiWeather.WeatherMin(input);
    const min = await ApiWeather.WeatherMax(input);
    const weatherData = await ApiWeather.WeatherImage(input);
    const time = await ApiTimeZone.timezone(input);
    /* .Log acces data you want  */
    
    
    
    setVille(ville);
    setTemperature(temperature);
    setHumidity(humidity);
    setWind(wind);
    setMax(max);
    setMin(min);
    setMeteo(weatherData);
    setTime(time)
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
    sun : 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
    night: 'linear-gradient(to right, #434343 0%, black 100%)',
    sunset: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
    morning: 'linear-gradient(to right, #34343 0%, black 100%)'
}

const user = time
const split = user.split(' ')
const userHour =split[1]
  
  const getBackgroundColor = () => {
    if (userHour > '08:00:00' && userHour < '16:59:59'){
       return colors.sun;
    }
    else if(userHour > '17:00:00' && userHour < '19:00:00'){
      return colors.sunset
    }
    else if(userHour > '19:00:00' && userHour < '23:59:59'){
      return colors.night
    }
    else if(userHour > '00:00:00' && userHour < '07:59:59'){
      return colors.morning
    }
    else{
      return '';
    }
    }

  const containerStyle = {
    backgroundImage: getBackgroundColor(),
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
          <Degree Celcius={temperature} />
          <DateTime City={ville} TimeZone={time}/>
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
