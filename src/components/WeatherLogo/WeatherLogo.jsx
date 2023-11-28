/* imgWheater */
import Rain from "assets/img/Rain.png"
import ClearNight from "assets/img/ClearSkyNight.png"
import ClearDay from "assets/img/ClearSkyDay.png"
import SnowDay from "assets/img/SnowDay.png"
import SnowNight from "assets/img/SnowNight.png"
import ThunderStormDay from "assets/img/ThunderstormDay.png"
import ThunderStormNight from "assets/img/ThunderStormNight.png"
import DizzleMistDay from "assets/img/MistDay.png"
import DizzleMistNight from "assets/img/MistNight.png"
import CloudsDay from "assets/img/FewCloudDay.png"
import CloudsNight from "assets/img/FewCloudNight.png"
import SquallTornadoDay from "assets/img/Tornado.png"
import SquallTornadoNight from "assets/img/Tornado.png"

export default function WeatherLogo({ LogoMeteo,City }) {
  
    const date = new Date()
    const hour = date.getHours()
    
/* Choose good Img */
function weather(){
  
  const isDayTime = hour < 17;

  if (LogoMeteo.includes('Rain')){
     return isDayTime ? <img src={Rain} alt="dayRain" /> : <img src={Rain} alt="nightRain" />;

  } else if(LogoMeteo.includes('Clear')){      
    return isDayTime ? <img src={ClearDay} alt="dayClear" /> : <img src={ClearNight} alt="nightClear" />;

  }else if(LogoMeteo.includes('Snow')){      
    return isDayTime ? <img src={SnowDay} alt="dayClear" /> : <img src={SnowNight} alt="nightClear" />;

  }else if(LogoMeteo.includes('Thunderstorm')){      
    return isDayTime ? <img src={ThunderStormDay} alt="dayClear" /> : <img src={ThunderStormNight} alt="nightClear" />;

  }else if(LogoMeteo.includes('Dizzle' || 'Mist')){      
    return isDayTime ? <img src={DizzleMistDay} alt="dayClear" /> : <img src={DizzleMistNight} alt="nightClear" />;

  }else if(LogoMeteo.includes('Clouds')){      
    return isDayTime ? <img src={CloudsDay} alt="dayClear" /> : <img src={CloudsNight} alt="nightClear" />;

  }else if(LogoMeteo.includes('Squall' || 'Tornado')){      
    return isDayTime ? <img src={SquallTornadoDay} alt="dayClear" /> : <img src={SquallTornadoNight} alt="nightClear" />;
  }
  else{
    return ''
  }
  
}

  return (
   <> { City && (
      <div>
      {weather()}
    </div>
  )}
  </>
  )}