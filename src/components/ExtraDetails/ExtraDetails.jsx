import style from "./ExtraDetailsStyle.module.scss"

export default function ExtraDetails({Humidity,Wind,Max,Min}) {
  return (
    <section className={style.extraDetailsContainer}>
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
            <span>{Min.toFixed(1)} - {Max.toFixed(1)}</span>
        </div>

    </section>
  )
}