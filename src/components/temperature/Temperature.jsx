import style from "./TemperatureStyle.module.scss";
function Temperature({ Celcius }) {
  return (
    <div>
      {Celcius && (
        <div className={style.temperature}>
          <span className={style.temperatureNumber}>{Celcius.toFixed(1)} </span>
          <span className={style.temperatureUnit}>°</span>
        </div>
      )}
    </div>
  );
}

export default Temperature;
