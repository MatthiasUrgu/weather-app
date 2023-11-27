import Day from "assets/img/FewCloudDay.png"
import Night from "assets/img/FewCloudNight.png"



export default function WeatherLogo({LogoMeteo,CityName}) {
  const date = new Date()
  const hour = date.getHours()

  function findImgWeather() {
    // Add your conditions to determine which image to display
    if (LogoMeteo === 'overcast cloud' && hour < 17) {
      return <img src={Day} alt="day" />;
    } else {
      return <img src={Night} alt="night" />;
    }
  }
  findImgWeather()
  return (<div>
    
      <div>{LogoMeteo}  {CityName}</div>
      <div><img src={Day} alt="day" /></div>
      <div>{findImgWeather}</div>
  </div>
  )
}