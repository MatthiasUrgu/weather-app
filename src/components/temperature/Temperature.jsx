import style from './style.module.scss';

function Temperature({Degree}) {


    return (
        <div className={style.temp}>
            {Degree} <span>°C</span>
        
        </div>
    );
}

export default Temperature;