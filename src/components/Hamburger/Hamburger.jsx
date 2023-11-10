import style from "components/Hamburger/Hamburger.module.scss"

export default function Hamburger() {
  return (
    <div className={style.hamburgerSearch}>
        <span className={style.hamburgerSpanFirst}></span>
        <span className={style.hamburgerSpanSecond}></span>
    </div>
  )
}