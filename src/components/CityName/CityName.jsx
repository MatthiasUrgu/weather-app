import style from './CityNameStyle.module.scss'

function CityName({City}) {
    return (
        <div className={style.cityContainer}>
        {City}
        </div>
    );
}

export default CityName