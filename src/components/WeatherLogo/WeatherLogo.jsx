import { ApiWeather } from "API/API";
import style from "./WeatherLogoStyle.module.scss";
import { useState,useEffect } from "react";

export default function WeatherLogo({ Validate, CityName }) {
  const [isMeteo, setIsMeteo] = useState();
  const [isTime, setIsTime] = useState();


  useEffect(()=>{
    async function weather() {
        const weatherData = await ApiWeather.WeatherImage(CityName);
        console.log("**meteoLogo**", weatherData);
        setIsMeteo(weatherData);
    
        const date = new Date();
        const time = date.getHours();
        console.log(time);
        setIsTime(time);
      }

      weather()
  },[CityName,Validate])
  
  

  async function SearchWeatherImage(isTime) {
    if (isTime < 17) {
      return <div>it's day</div>;
    } else {
      return <div>it's night</div>;
    }
  }



  return (
    <>
      {Validate && (
        <div className={style.weatherLogo}>
          {Validate && <div>{SearchWeatherImage()}</div>}
        </div>
      )}
    </>
  );
}
