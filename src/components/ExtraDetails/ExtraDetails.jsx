import style from "./ExtraDetailsStyle.module.scss"

export default function ExtraDetails({Validate,Humidity,Wind,Max,Min}) {
  return (
    <>
      {Validate && (<section className={style.extraDetailsContainer}>
          <div className={style.case}>
              <img src="" alt="humidity" />
              <span>{Humidity} %</span>
          </div>
          <div className={style.case}>
              <img src="" alt="wind" />
              <span>{Wind}</span>
          </div>
          <div className={style.case}>
              <img src="" alt="minMax" />
              <span>{Min}° - {Max}°</span>
          </div>
      </section>)}
    </>
  )
}