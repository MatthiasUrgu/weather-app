import style from "./TemperatureStyle.module.scss";
function Temperature({ Celcius }) {
  return (
    <>
      {Celcius && (
        <div className={style.temperature}>
          <span className={style.temperatureNumber}>{Celcius.toFixed(1)} </span>
          <span className={style.temperatureUnit}>°</span>
        </div>
      )}
    </>
  );
}

export default Temperature;
