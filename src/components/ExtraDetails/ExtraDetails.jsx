import style from "./ExtraDetailsStyle.module.scss"
import Humiditys from "assets/img/Rain.png"
import Winds from "assets/img/Mist.png"
import MinMax from "assets/img/ClearSkyDay.png"


export default function ExtraDetails({Validate,Humidity,Wind,Max,Min}) {
  return (
    <>
      {Validate && (<section className={style.extraDetailsContainer}>
          <div className={style.case}>
              <img src={Humiditys} alt="humidity" />
              <span>{Humidity} %</span>
          </div>
          <div className={style.case}>
              <img src={Winds} alt="wind" />
              <span>{Wind} m/s</span>
          </div>
          <div className={style.case}>
              <img src={MinMax} alt="minMax" />
              <span>{Min}° / {Max}°</span>
          </div>
      </section>)}
    </>
  )
}