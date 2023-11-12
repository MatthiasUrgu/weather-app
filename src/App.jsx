import { ApiWeather } from "API/API";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {BsSearch} from 'react-icons/bs'
import style from "./Style.module.scss";
import CityName from "components/CityName/CityName";
import Temperature from "components/Temperature/Temperature";
import DateTime from "components/DateTime/DateTime";
import video from "assets/videos/heavy-rain.mp4";
import ExtraDetails from "components/ExtraDetails/ExtraDetails";
import Hamburger from "components/Hamburger/Hamburger";
function App() {
  /* States */
  const [isInput, setIsInput] = useState("");
  const [isVille, setIsVille] = useState("");
  const [isTemperature, setIsTemperature] = useState("");
  const [isHumidity, setIsHumidity] = useState("");
  const [isWind, setIsWind] = useState("");
  const [isMax, setIsMax] = useState("");
  const [isMin, setIsMin] = useState("");

  /* API */
  async function City() {
    const ville = await ApiWeather.WeatherCity(isInput);
    const temperature = await ApiWeather.WeatherTemperature(isInput);
    const humidity = await ApiWeather.WeatherHumidity(isInput);
    const wind = await ApiWeather.WeatherWind(isInput);
    const max = await ApiWeather.WeatherMin(isInput);
    const min = await ApiWeather.WeatherMax(isInput);
    setIsVille(ville);
    setIsTemperature(temperature);
    setIsHumidity(humidity);
    setIsWind(wind);
    setIsMax(max);
    setIsMin(min);
    resetComponents();
  }

  /* Animations FramerMotion  */
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
    setIsInput(e.target.value);
  }

  /* Input KeyPress */
  async function InputKey(e) {
    if (e.key === "Enter") {
      setIsInput(e.target.value);
      console.log("*enter**", isInput);
      City();
      resetComponents();
    }
  }

  return (
    <section className={style.container}>
      <video src={video} autoPlay loop muted></video>
      <div className={style.data}>
        <div className={style.dataSearch}>
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={SearchBarControls}
          >
            <input
              type="text"
              value={isInput}
              onChange={InputValue}
              onKeyDown={InputKey}
            />
            <button type="submit" onClick={City}>
            <BsSearch />
            </button>
          </motion.div>
          <motion.div
            className={style.hamburger}
            initial={{ x: -250, opacity: 1 }}
            animate={HamburgerControls}
            onTap={handleSearchBar}
          >
            <Hamburger />
          </motion.div>
        </div>

        <div className={style.dataFind}>
          <CityName City={isVille} />
          <Temperature Celcius={isTemperature} />
          <DateTime City={isVille} />
        </div>
        <div className={style.lastBlock}>
          <ExtraDetails
            Humidity={isHumidity}
            Wind={isWind}
            Min={isMin}
            Max={isMax}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
