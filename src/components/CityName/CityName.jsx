import style from './style.module.scss'

function CityName({City}) {
    return (
        <div className={style.cityContainer}>
            {City}
        </div>
    );
}

export default CityName;